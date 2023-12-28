import type { Snippet } from '@framework'
import type { ABCD } from '@i18n/ABCD.types'
import type Properties from '@modules/ABCD.properties'

export default interface Diashow extends Properties {
	diashow: ABCD.Diashow
	controls?: boolean
	full?: boolean //full mask
}

export interface Modal extends Properties {
	/**
	 * @property {Snippet} headline
	 * @description s.e.
	 */
	headline: Snippet
	diashow: ABCD.Diashow
}
