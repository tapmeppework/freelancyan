import type { Snippet } from '@framework'
import type Properties from '@modules/ABCD.properties'

export default interface Card extends Properties {
	/**
	 * TODO classes > class
	 */
	classes?: {
		body?: string
		paragraph?: string
		footer?: string
	}
	illustration: Snippet
	headline: Snippet
	badges?: string[]
	footer?: Snippet
	div?: boolean
}
