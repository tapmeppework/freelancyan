import type { Services } from '@i18n/ABCD.types'
import type Properties from '@modules/ABCD.properties'

export default interface Card extends Properties {
	details: Services.Details
	identifier: string
	div?: boolean
}
