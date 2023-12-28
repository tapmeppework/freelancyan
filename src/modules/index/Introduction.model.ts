import Utils from '@bloc/Utils'
import type { Snippet } from '@framework'
import type { ABCD as Lexicon, Index } from '@i18n/ABCD.types'
import Model from './ABCD.model'

export default class Introduction extends Model<Index.Preamble> {
	static readonly slug = 'introduction'
	readonly classNames = {
		abcd: `
			${this.classes.bootstrap.col[12]}
			${this.classes.bootstrap.col[this.proportion][5]} 
			${this.classes.bootstrap.text.center} 
			${this.classes.bootstrap.text[this.proportion].start}
		`,
		badge: {
			outer: this.classes.bootstrap.margin.bottom.zyxw,
			inner: this.classes.bootstrap.text.uppercase,
		},
		saying: `${this.classes.bootstrap.font.size[5]} ${this.classes.bootstrap.text.muted}`,
		headline: `
			${this.classes.bootstrap.text.wrap}
			${this.classes.bootstrap.margin.auto}
		`,
		pages: `
			${this.classes.bootstrap.margin.top.zyxw} 
			${this.classes.bootstrap.button.group} 
			${this.classes.bootstrap.justify.content.small.center} 
			${this.classes.bootstrap.justify.content[this.proportion].start}
		`,
	}
	readonly texts: Index.Preamble = this.lexicon.index.preamble

	readonly render = (
		badge: (badge: Snippet) => Snippet,
		div: (className: string, content: Snippet) => Snippet,
		headline: (headline: Snippet) => Snippet,
		page: (className: string, href: string, headline: Snippet) => Snippet,
	) => {
		let className = this.classes.abcd.button.primary
		return [
			this.texts.badge && badge(this.texts.badge),
			this.texts.body?.map(snippet => div(this.classNames.saying, snippet)),
			headline(this.texts.headline),
			this.texts.pages && div(
				this.classNames.pages,
				Object
					.keys(this.texts.pages)
					.filter(key => Utils.isPageVisible(this.texts.pages?.[key] as Lexicon.Page))
					.map(key => {
						const _page = this.texts.pages?.[key] as Lexicon.Page
						const button = page(
							className,
							`/${this.lexicon.language}/${this.pageHref(_page, key)}`,
							// `./${this.pageHref(_page, key)}`, //> DO NOT USE this line; the astro:transition won't work otherwise
							_page.headline,
						)
						className = this.classes.abcd.button.secondary
						return button
					})
			)
		]
	}
}
