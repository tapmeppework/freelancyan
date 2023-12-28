import type { Networks } from '@bloc/ABCD.types'
import type { Snippet } from '@framework'
import Contact from '@modules/contact/Basics.model'
import type { ABCD, Index } from '@i18n/ABCD.types'
import Model from './ABCD.model'

export default class About extends Model<Index.About> {
	static readonly slug = 'about'
	readonly texts: Index.About = this.lexicon.index.about

	readonly render = (
		networks: Networks,
		contact: (className?: string) => Snippet,
		paragraph: (className: string, snippet: Snippet) => Snippet, //DO NOT USE <P/>
		anchor: (className: string, network: ABCD.Network, icons: Snippet) => Snippet
	): Snippet => {
		const lexicon = this.lexicon
		return [
			paragraph(
				this.classes.abcd.paragraph.light,
				lexicon.abcd.pages.header.index?.preamble
			),
			this.texts.body && paragraph(
				`${this.classes.abcd.paragraph.abcd} ${this.classes.bootstrap.margin.top.zyxw}`,
				this.texts.body
			),
			paragraph(
				`
					${this.classes.abcd.paragraph.abcd}
					${this.classes.bootstrap.margin.top.zyxw}
					${this.classes.bootstrap.display.flex}
					${this.classes.bootstrap.justify.content.center}
					${this.classes.bootstrap.gap.zyxw}
				`,
				[
					anchor(
						`${this.classes.bootstrap.font.size[2]} ${this.classes.bootstrap.text.primary}`,
						{
							href: `/${lexicon.language}/${this.pageHref(lexicon.abcd.pages.footer.contact, Contact.slug)}`,
							// href: `./${this.pageHref(lexicon.abcd.pages.footer.contact, Contact.slug)}`, //> DO NOT USE this line; the astro:transition won't work otherwise
							target: '_self',
							title: lexicon.index.about.contact,
						},
						contact()
					),
					this.renderNetworks(
						networks,
						anchor,
						{
							primary: `${this.classes.bootstrap.font.size[2]} ${this.classes.bootstrap.text.secondary}`,
							secondary: `${this.classes.bootstrap.font.size[2]} ${this.classes.bootstrap.text.secondary}`,
						}
					)
				]
			)
		]
	}
}
