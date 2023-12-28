import type { Link } from '@bloc/ABCD.types'
import type { Snippet } from '@framework'
import type { ABCD as Lexicon } from '@i18n/ABCD.types'
import { Model } from '@modules/ABCD.model'
import type Harmony from './Harmony.properties'
import ModelHarmony from './Harmony.model'
import type Properties from './Timeline.properties'

/**
 * @see https://startbootstrap.com/previews/agency > About
 */
export default class Timeline extends Model<Properties> {
	static readonly slug = 'timeline'
	private static readonly _classNames = ModelHarmony.harmonise(this.slug)
	static readonly classNames = {
		abcd: `
			${this._classNames.abcd}
			${this.umbrella(this.slug)} 
			${this.umbrella(`${this.slug}-line`)}
			${this.classes.bootstrap.margin.top.zyxw}
			${this.classes.bootstrap.position.relative}
			${this.classes.bootstrap.padding[0]}
			${this.classes.bootstrap.list.unstyled}
		`,
		step: `
			${this.umbrella(this.abcd.keywords.step)}
			${this.classes.bootstrap.position.relative}
			${this.classes.bootstrap.display.flex}
			${this.classes.bootstrap.margin.bottom[5]}
		`,
		center: `
			${this.umbrella(`${this.slug}-center`)}
			${this.umbrella(`${this.slug}-line`)}
			${this.classes.bootstrap.position.absolute}
			${this.classes.bootstrap.start[50]}
			${this.classes.bootstrap.translate.middle.x}
			${this.classes.bootstrap.margin.end.zyxw}
			${this.classes.bootstrap.margin.end.medium[0]}
		`,
		image: `
			${this.umbrella(`${this.slug}-image`)}
			${this.classes.abcd.image.profile}
		`,
		headline: this.umbrella(`${this.slug}-headline`), //placeholder to prevent the default headline behaviour
		body: `
			${this.umbrella(`${this.slug}-body`)}
			${this.classes.bootstrap.position.relative}
		`,
		content: `
			${this._classNames.content}
			${this.classes.abcd.text.justify}
			${this.classes.abcd.modal.content}
			${this.classes.bootstrap.collapse.abcd}
			${this.classes.bootstrap.display.block}
			${this.abcd.config.scroll && this.classes.abcd.harmony.scroll}
		`,
		button: {
			reader: this._classNames.reader,
			collapsed: this.umbrella(`${this.slug}-collapsed`),
			processing: `
				${this.umbrella(`${this.slug}-processing`)}
				${this.classes.bootstrap.spinner.border}
			`,
			show: this.umbrella(`${this.slug}-show`),
		},
		tail: `
			${this.umbrella(`${this.slug}-tail`)}
			${this.classes.abcd.aspect.ratio[1]} 
			${this.classes.abcd.gradient.background}
			${this.classes.abcd.rounded}
			${this.classes.bootstrap.border.abcd}
			${this.classes.bootstrap.border.primary}
			${this.classes.bootstrap.margin.medium.auto}
			${this.classes.bootstrap.display.none}
			${this.classes.bootstrap.display.medium.block}
		`,
		...this._classNames.others,
	}

	readonly render = (step: (step: Harmony) => Snippet): Snippet => [
		this.properties.steps.map(_step => step(_step)),
		this.properties.children,
	]
}

export class Step extends ModelHarmony {
	readonly render = (
		subline: (subline: Snippet) => Snippet,
		badge: (className: string, content: Snippet) => Snippet,
		content: (className: string, target: string, body: Snippet, badges: Snippet,) => Snippet,
		ellipsis: (className: string, content: string) => Snippet,
		paragraph: (className: string, paragraph: Snippet) => Snippet,
		footer: (scroll: boolean, target: string, disabled: boolean, anchors: Snippet) => Snippet,
		diashow: (className: string, target: string, label: string, id: string, headline: Snippet, diashow: Lexicon.Diashow) => Snippet,
		dropdown: (className: string, label: string, items: Snippet) => Snippet,
		item: (link: Link) => Snippet,
		anchor: (link: Link) => Snippet,
	) => {
		const
			ids = {
				collapse: Step.identifier(Timeline.slug),
				diashow: Step.identifier(Timeline.slug),
			},
			lexicon = this.lexicon.abcd.harmony,
			links = this.properties.links || [],
			threshold = links.length > 0 //threshold if dialog

		return [
			this.properties.subline && subline(this.properties.subline),
			this.properties.timeframe && subline(this.properties.timeframe),
			content(
				Timeline.classNames.content,
				ids.collapse,
				this.renderParagraphs('', paragraph),
				paragraph('', ModelHarmony.renderBadges(this.properties.badges, badge)),
			),
			!this.abcd.config.scroll && ellipsis(Timeline.classNames.ellipsis, this.abcd.keywords.ellipsis.value),
			footer(
				this.abcd.config.scroll,
				ids.collapse,
				!this.abcd.config.full,
				this.properties.diashow ? [
					diashow(
						`
							${Timeline.classes.abcd.button.secondary} 
							${!threshold && this.classes.bootstrap.rounded.end[2]}
						`,
						`#${ids.diashow}`,
						lexicon.diashow,
						ids.diashow,
						this.properties.headline,
						this.properties.diashow
					),
					threshold && dropdown(
						Timeline.classNames.dropdown,
						this.abcd.keywords.ellipsis.value,
						links.map(link => item(this.sanitiseLink(link)))
					)
				] : [
					links.length > (this.properties.threshold as number) ?
						dropdown(
							Timeline.classNames.dropdown,
							lexicon.others,
							links.map(link => item(this.sanitiseLink(link)))
						) : links.map(link => anchor(this.sanitiseLink({
							...link,
							class: `${Timeline.classNames.anchor} ${link.class}`,
						})))
				]
			),
		]
	}
}
