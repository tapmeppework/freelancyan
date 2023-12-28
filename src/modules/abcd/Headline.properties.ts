import type { HeadlineMode, Strippet } from '@bloc/ABCD.types'
import type Properties from '@modules/ABCD.properties'

export default interface Headline extends Properties {
	mode?: HeadlineMode
}

export interface H extends Properties {
	size?: Size
	title?: Strippet
}

export type Size = 1 | 2 | 3 | 4 | 5 | 6
