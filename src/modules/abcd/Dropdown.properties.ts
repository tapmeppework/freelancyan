import type { HTMLAttributesAnchor, Snippet } from '@framework'
import type Properties from '@modules/ABCD.properties'

/**
 */
export default interface Dropdown extends Omit<Properties, 'class'> {
	label: Snippet
	class: DropdownClass
}

export interface Item extends Properties, HTMLAttributesAnchor {}

export type DropdownClass = {
	abcd?: string
	button: string
	menu?: string
}
