import ABCD from '@bloc/ABCD'
import Admin from '@bloc/Admin'
import type { Snippet } from '@framework'
import Model from '@modules/ABCD.model'
import type Properties from './Modal.properties'
// TODO @ts-ignore '@trackersModel'
import trackersModel from '@trackersModel'

export default class ThirdParty extends Model {
	readonly render = (
		trackers: (defer: boolean, trackersModel: string) => Snippet,
		modal: (attributes: Properties, body: Snippet) => Snippet,
		button: (className: string, id: string, label: string) => Snippet,
	): Snippet => {
		if (ABCD.config.third.party) {
			const lexicon = this.lexicon.abcd.navigation.modal.third.party
			switch (Admin.astro.cookies.get(ABCD.keywords.third.party.key)?.number()) {
				case 0: return ''
				case 1: return trackers(true, trackersModel)
				default: return modal(
					{
						id: ABCD.wonder.third.party.modal,
						static: true,
						headline: lexicon.headline,
						footline: button(
							this.classes.abcd.button.primary,
							ABCD.wonder.third.party.button,
							lexicon.accept,
						)
					},
					lexicon.body
				)
			}
		}
		return ''
	}
}