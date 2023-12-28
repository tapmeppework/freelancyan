import ABCD0 from '@bloc/ABCD'
import Admin from '@bloc/Admin'
import type { Snippet } from '@framework'
import Model from '@modules/ABCD.model'

export default class ABCD extends Model {
	static readonly page = (description: string) => ({
		headline: ABCD0.project,
		description,
	})

	readonly mine = Admin.astro.url.origin.startsWith(ABCD0.author.website)
	readonly show: { en: boolean, de: boolean, fr: boolean }
	readonly project: Snippet
	readonly contact: (label: string) => Snippet
	readonly website: (label: string) => Snippet

	constructor(anchor: (href: string, target: '_blank' | '_self', label: string) => Snippet) {
		super()
		const language = Admin.language.trim().toLowerCase()

		const show = {
			de: language.startsWith('de'),
			fr: language.startsWith('fr'),
		}
		this.show = {
			en: language.startsWith('en') || (!show.de && !show.fr),
			...show,
		}
		this.project = anchor(
			`https://github.com/${ABCD0.umbrella}-work/${ABCD0.project}`,
			'_blank',
			ABCD0.project
		)
		this.contact = label => anchor(
			`/${language}/${ABCD0.keywords.contact}`,
			'_self',
			label
		)
		this.website = label => anchor(
			ABCD0.author.website,
			'_blank',
			label
		)
	}
}
