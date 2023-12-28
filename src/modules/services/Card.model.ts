import ABCD from '@bloc/ABCD'
import type { Snippet } from '@framework'
import { Model } from '@modules/ABCD.model'
import type Properties from './Card.properties'

export default class Card extends Model<Properties> {
	static readonly slug = 'card'
	static readonly classNames = {
		headline: `
			${this.classes.abcd.line.center} 
			${this.classes.bootstrap.card.title}
			${this.classes.abcd.modal.title}
		`,
		more: this.classes.abcd.button.secondary,
	}
	readonly id: string
	readonly href: string
	readonly description: Snippet

	constructor(properties: Properties) {
		super(properties)

		this.id = properties.identifier
		// this.href = Utils.mailto(
		// 	ABCD.config.contact.email,
		// 	this.lexicon.services.miscellaneous.message(`${properties.details.headline}`)
		// )
		this.href = `./${ABCD.keywords.contact}?${ABCD.keywords.service}=${properties.details.headline}`
	}
}
