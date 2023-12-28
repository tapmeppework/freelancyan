import type { Snippet } from '@framework'
import type { ABCD } from '@i18n/ABCD.types'
import type Properties from '@modules/ABCD.properties'

/**
 * 
 */
export default interface Harmony extends Properties, ABCD.Block.Entity { }

export type Portions = {
	container: (className: string, content: Snippet) => Snippet
	paragraph: (className: string, paragraph: Snippet) => Snippet
}

export type Assortments = {
	timeline: (timeline: ABCD.Block.Entity[], full?: boolean) => Snippet
	grid: (grid: ABCD.Block.Entity[], full?: boolean) => Snippet
}
