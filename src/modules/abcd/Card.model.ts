import type { Snippet } from '@framework'
import { Model } from '@modules/ABCD.model'
import type Properties from './Card.properties'
import ModelHarmony from './Harmony.model'

/**
 */
export default class Card extends Model<Properties> {
	static readonly slug = this.abcd.keywords.card
	private static readonly _classNames = ModelHarmony.harmonise(this.slug)
	static readonly classNames = {
		abcd: `
			${this._classNames.abcd}
			${this.umbrella(this.slug)}
			${this.classes.bootstrap.card.abcd} 
			${this.classes.bootstrap.text.center} 
			${this.classes.bootstrap.height[100]} 
		`,
		body: `
			${this.umbrella(`${this.slug}-body`)}
			${this.classes.bootstrap.card.body} 
		`,
		paragraph: this.umbrella(`${this.slug}-paragraph`),
		content: `
			${this._classNames.content}
			${this.classes.abcd.modal.content}
			${this.classes.bootstrap.card.text}
			${this.classes.bootstrap.margin.bottom[0]}
			${this.abcd.config.scroll && this.classes.abcd.harmony.scroll}
		`,
		ellipsis: `
			${this._classNames.others.ellipsis}
			${this.classes.bootstrap.text.start}
		`,
	}
	readonly classNames = {
		body: `${Card.classNames.body} ${this.properties.classes?.body}`,
		paragraph: this.properties.classes?.paragraph,
		footer: `${this.classes.bootstrap.card.footer} ${this.properties.classes?.footer}`,
	}

	readonly renderBody = (
		className: string,
		chunk: (className: string, content: Snippet) => Snippet,
		paragraph: (className: string, content: Snippet) => Snippet,
		badge: (className: string, content: Snippet) => Snippet,
		content: Snippet = this.properties.children,
	) => {
		const badges = ModelHarmony.renderBadges(this.properties.badges, badge)
		return [
			this.renderParagraphs(className, this.properties.div ? chunk : paragraph, content),
			badges && paragraph(Model.umbrella('badges'), badges),
		]
	}

	readonly renderEllipsis = (ellipsis: (className: string, content: string) => Snippet) =>
		!this.abcd.config.scroll && ellipsis(Card.classNames.ellipsis, this.abcd.keywords.ellipsis.value)

	readonly renderFooter = (
		skeleton: (
			classNames: { footer: string, reader: string },
			scroll: boolean,
			label: string,
			disabled: boolean,
			footer: Snippet
		) => Snippet
	) => skeleton(
		{
			footer: this.classNames.footer,
			reader: Card._classNames.reader,
		},
		this.abcd.config.scroll,
		this.lexicon.abcd.harmony.more,
		!this.abcd.config.full,
		this.properties.footer,
	)
}
