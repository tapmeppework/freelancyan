import type { Snippet } from '@bloc/framework'
import type { Services } from '@i18n/ABCD.types'
import type Properties from '@modules/ABCD.properties'

export default interface Columns extends Properties {
	headline?: Snippet
	strategies: Services.Columns
	flush?: boolean
}
