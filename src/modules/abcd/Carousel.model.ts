import type { Data, Strimber } from '@bloc/ABCD.types'
import Bootstrap from '@bloc/Bootstrap'
import type { Snippet } from '@framework'
import { Model } from '@modules/ABCD.model'
import type Properties from './Carousel.properties'
import type { Item as PropertiesItem } from './Carousel.properties'

export default class Carousel extends Model<Properties> {
	static readonly slug = 'carousel'
	static readonly classNames = {
		abcd: `${this.umbrella(this.slug)} ${this.classes.bootstrap.carousel.abcd} ${this.classes.bootstrap.slide}`,
		indicators: `${this.umbrella(`${this.slug}-indicators`)} ${this.classes.bootstrap.carousel.indicators}`,
		inner: `${this.umbrella(`${this.slug}-inner`)} ${this.classes.bootstrap.carousel.inner}`,
		controls: this.umbrella(`${this.slug}-controls`),
		item: `${this.umbrella(`${this.slug}-item`)} ${this.classes.bootstrap.carousel.item}`,
		secondary: this.umbrella(`${this.slug}-secondary`),
	}
	readonly target: string
	readonly attributes: Data

	constructor(properties: Properties) {
		super(properties, { mode: 'auto' })

		const id = properties.id || Model.identifier(Carousel.slug)
		this.attributes = {
			class: `
				${Carousel.classNames.abcd}
				${this.abcd.config.secondary.aside && Carousel.classNames.secondary}
				${properties.class}
			`,
			id,
		}
		this.target = `#${id}`
		// @see https://getbootstrap.com/docs/5.3/components/carousel/#autoplaying-carousels
		switch (properties.flow) {
			case 'auto':
				this.attributes[Bootstrap.data('ride')] = 'carousel'
				break
			case 'semi':
				this.attributes[Bootstrap.data('ride')] = 'true'
				break
		}
	}

	readonly render = (
		container: (className: string, list: Snippet[]) => Snippet,
		indicator: (attributes: Data<Strimber>) => Snippet,
		slide: (attributes: Data, content: Snippet) => Snippet,
		button: (abcd: Data, icon: Data, hidden: Data, svg: Snippet, label: string) => Snippet,
		svgs: { previous: Snippet, next: Snippet },
	): Snippet => {
		const
			indicators: Snippet[] = [],
			lexicon = this.lexicon.abcd.navigation.carousel,
			slides = (this.properties.children as unknown as PropertiesItem[]).map((item, index) => {
				indicators.push(indicator({
					type: 'button',
					[Bootstrap.data(Bootstrap.keywords.target)]: this.target,
					[Bootstrap.data(Bootstrap.keywords.slide.to)]: index,
					'aria-label': `${lexicon.slide} ${index}`,
					...(item.active ?
						{ class: this.classes.bootstrap.active, 'aria-current': 'true' } :
						{}
					)
				}))
				return slide(
					{
						class: `${Carousel.classNames.item} ${item.active && this.classes.bootstrap.active}`,
						...(item.duration ?
							{ [Bootstrap.data(Bootstrap.keywords.interval)]: item.duration } :
							{}
						)
					},
					item.children
				)
			}),
			classNameButton = Carousel.umbrella(`${Carousel.slug}-button`)
		return this.properties.controls ? [
			container(
				Carousel.classNames.indicators,
				indicators
			),
			container(`${Carousel.classNames.inner} ${Carousel.classNames.controls}`, slides),
			button(
				{
					class: `
						${classNameButton}
						${this.classes.bootstrap.background.body.tertiary}
						${this.classes.bootstrap.carousel.control.previous.abcd}
					`,
					type: 'button',
					[Bootstrap.data(Bootstrap.keywords.target)]: this.target,
					[Bootstrap.data(Bootstrap.keywords.slide.abcd)]: 'prev',
				},
				{
					class: this.classes.bootstrap.carousel.control.previous.icon,
					'aria-hidden': 'true',
				},
				{
					class: this.classes.bootstrap.visually.hidden,
				},
				svgs.previous,
				lexicon.previous,
			),
			button(
				{
					class: `
						${classNameButton}
						${this.classes.bootstrap.background.body.tertiary}
						${this.classes.bootstrap.carousel.control.next.abcd}
					`,
					type: 'button',
					[Bootstrap.data(Bootstrap.keywords.target)]: this.target,
					[Bootstrap.data(Bootstrap.keywords.slide.abcd)]: 'next',
				},
				{
					class: this.classes.bootstrap.carousel.control.next.icon,
					'aria-hidden': 'true',
				},
				{
					class: this.classes.bootstrap.visually.hidden,
				},
				svgs.next,
				lexicon.next,
			),
		] : container(Carousel.classNames.inner, slides)
	}
}