import ABCD from '@bloc/ABCD'
import type { ContactKey, Data } from '@bloc/ABCD.types'
import Admin from '@bloc/Admin'
import Utils from '@bloc/Utils'
import type { Snippet } from '@framework'
import Model from '@modules/ABCD.model'

export default class Basics extends Model {
	static readonly slug = 'contact'
	static readonly classNames = {
		abcd: `
			${this.umbrella(this.slug)}
			${this.classes.bootstrap.row.cols[1]}
			${this.classes.bootstrap.row.cols.small[2]}
			${this.classes.bootstrap.gutter.y[5]}
		`,
		information: {
			container: `
				${this.classes.bootstrap.display.flex}
				${this.classes.bootstrap.justify.content.center}
			`,
			icon: `
				${this.umbrella(`${this.slug}-icon`)} 
				${this.classes.bootstrap.text.end}
				${this.classes.bootstrap.text.secondary}
				${this.classes.bootstrap.margin.end[2]}
			`,
		},
		networks: {
			primary: this.classes.abcd.button.primary,
			secondary: this.classes.abcd.button.secondary,
			icon: `
				${this.classes.bootstrap.font.size[4]}
				${this.classes.bootstrap.padding.end[2]}
			`
		},
		columns: this.classes.bootstrap.text.center,
	}
	readonly classNames = {
		abcd: `
			${Basics.classNames.abcd}
			${this.lexicon.contact.office ? this.classes.bootstrap.row.cols.medium[3] :''}
		`,
	}


	readonly renderContact = (
		line: (
			className: { container: string, icon: string },
			icon: Snippet,
			information: Snippet,
		) => Snippet,
		anchor: (href: string, label: Snippet) => Snippet,
		snippets: Data<() => Snippet>,
	): Snippet => {
		const
			params = Admin.astro.url.searchParams,
			keywords = ABCD.keywords,
			message = params.has(keywords.service) ?
				this.lexicon.services.miscellaneous.message(params.get(keywords.service) as string) :
				this.lexicon.contact.message

		return Object
			.keys(ABCD.config.contact)
			.filter(key => ABCD.config.contact[key as ContactKey] && ABCD.config.contact[key as ContactKey] != '')
			.map(key => {
				let label: Snippet = ABCD.config.contact[key as ContactKey] as string
				switch (key) {
					case keywords.email:
						label = anchor(Utils.mailto(label, message), label)
						break;
					case keywords.phone:
						label = anchor(Utils.tel(label), label)
						break;
					case keywords.whatsapp:
						label = anchor(Utils.whatsapp(label, message), label)
						break;
					case keywords.sms:
						label = anchor(Utils.sms(label, message), label)
						break;
				}

				return line(Basics.classNames.information, snippets[key](), label)
			})
	}

	readonly renderOffice = (
		office: (className: string, headline: Snippet, url: string, content: Snippet) => Snippet
	): Snippet => {
		const lexicon = this.lexicon.contact.office

		return lexicon && office(Basics.classNames.columns, lexicon.headline, lexicon.url, lexicon.content)
	}
}
