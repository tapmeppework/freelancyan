import ABCD from '@bloc/ABCD'
import type { Link } from '@bloc/ABCD.types'
import type { Snippet } from '@framework'
import type { ABCD as Lexicon } from '@i18n/ABCD.types'
import { Model } from '@modules/ABCD.model'
import type Properties from './Grid.properties'
import type Harmony from './Harmony.properties'
import ModelHarmony from './Harmony.model'


/**
 * @see https://startbootstrap.com/previews/agency > About
 */
export default class Grid extends Model<Properties> {
	static readonly slug = 'grid'
	private static readonly _classNames = ModelHarmony.harmonise(this.slug)
	static readonly classNames = {
		abcd: this._classNames.abcd,
		row: {
			1: `
				${this.classes.bootstrap.gutter.zyxw}
				${this.classes.bootstrap.row.cols[1]} 
			`,
			2: `
				${this.classes.bootstrap.gutter.zyxw}
				${this.classes.bootstrap.row.cols[1]} 
				${this.classes.bootstrap.row.cols.small[2]} 
			`,
			3: `
				${this.classes.bootstrap.gutter.zyxw}
				${this.classes.bootstrap.row.cols[1]} 
				${this.classes.bootstrap.row.cols.small[2]} 
				${this.classes.bootstrap.row.cols.medium[3]} 
			`,
		},
		headline: {
			regular: this.classes.abcd.line.center,
			modal: `${this.classes.abcd.line.center} ${this.classes.abcd.modal.title}`,
		},
		image: this.classes.bootstrap.card.image.top,
		content: `
			${this._classNames.content}
			${this.classes.abcd.modal.content}
			${this.classes.bootstrap.overflow.hidden}
		`,
		button: this._classNames.reader,
		...this._classNames.others,
	}
	readonly classNames = {
		row: `${Grid.classNames.row[this.abcd.config.grid]} ${Grid.umbrella(Grid.slug)} ${this.properties.class}`
	}

	readonly render = (card: (card: Harmony) => Snippet): Snippet => [
		this.properties.cards.map(_card => card(_card)),
		this.properties.children,
	]
}

export class Card extends ModelHarmony {
	readonly target = ModelHarmony.identifier(Grid.slug)
	readonly classNames: {
		content: string
	}

	constructor(properties: Harmony) {
		super(properties)
		this.classNames = {
			content: `${Grid.classNames.content} ${ABCD.config.full && this.classes.bootstrap.show}`,
		}
	}

	readonly renderSublines = (subline: (subline: Snippet) => Snippet) => [
		this.properties.subline && subline(this.properties.subline),
		this.properties.timeframe && subline(this.properties.timeframe),
	]

	readonly renderFooter = (
		diashow: (className: string, target: string, label: string, id: string, headline: Snippet, diashow: Lexicon.Diashow) => Snippet,
		dropdown: (className: string, label: string, items: Snippet) => Snippet,
		item: (link: Link) => Snippet,
		anchor: (link: Link) => Snippet,
	): Snippet => {
		const
			id = Card.identifier(Grid.slug),
			lexicon = this.lexicon.abcd.harmony,
			links = this.properties.links || [],
			threshold = links.length > 0 //threshold if dialog

		return this.properties.diashow ? [
			diashow(
				`
					${Card.classes.abcd.button.secondary} 
					${!threshold && this.classes.bootstrap.rounded.end[2]}
				`,
				`#${id}`,
				lexicon.diashow,
				id,
				this.properties.headline,
				this.properties.diashow
			),
			threshold && dropdown(
				Grid.classNames.dropdown,
				this.abcd.keywords.ellipsis.value,
				links.map(link => item(this.sanitiseLink(link)))
			)
		] : [
			links.length > (this.properties.threshold as number) ?
				dropdown(
					Grid.classNames.dropdown,
					lexicon.others,
					links.map(link => item(this.sanitiseLink(link)))
				) : links.map(link => anchor(this.sanitiseLink({
					...link,
					class: `${Grid.classNames.anchor} ${link.class}`,
				})))
		]
	}
}