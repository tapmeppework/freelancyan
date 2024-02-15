import ABCD from '@bloc/ABCD'
import type { Anonymous } from '@bloc/ABCD.types'
import type { Snippet } from '@framework'
import type { Index } from '@i18n/ABCD.types'
import { Model } from '@modules/ABCD.model'
import type { Flow } from '@abcd/Carousel.properties'
import type { Mode } from '@abcd/P.properties'
import type Properties from './Testimonials.properties'

/**
 * @see https://viatordigital.com/
 */
export default class Testimonials extends Model<Properties> {
	static readonly slug = ABCD.keywords.testimonials
	private static readonly classNames = {
		item: this.umbrella(`${this.slug}-item`),
		profile: `
				${this.umbrella(`${this.slug}-profile`)}
				${this.classes.abcd.line.center}
				${this.classes.bootstrap.margin.bottom.zyxw}
			`,
		image: this.classes.abcd.image.profile,
		headline: this.classes.abcd.headline.abcd,
		body: `
				${this.umbrella(`${this.slug}-body`)}
				${this.classes.bootstrap.padding.end[2]}
				${this.classes.bootstrap.overflow.y.auto}
			`,
	}

	readonly render = (
		headline: (headline: Snippet) => Snippet,
		body: (mode: Mode, body: Snippet) => Snippet,
		carousel: (className: string, flow: Flow, items: Snippet[]) => Snippet,
		item: (
			classNames: { item: string, profile: string, image: string, headline: string, body: string },
			active: boolean,
			testimonial: Index.Testimonial
		) => Snippet,
	): Snippet => [
			headline(this.properties.headline),
			this.properties.body && body('light', this.properties.body),
			carousel(
				this.classes.bootstrap.margin.top.zyxw,
				'auto',
				this.properties.list.map((testimonial, index) => item(
					Testimonials.classNames,
					index == 0,
					{
						...testimonial,
						image: {
							...testimonial.image,
							src: `${ABCD.assets.testimonials}/${testimonial.image.src}`,
						},
						alt: testimonial.alt || testimonial.headline?.toString()
					}
				)),
			),
		]
}
