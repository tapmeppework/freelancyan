import type { Snippet } from '@framework'
import type Properties from '@modules/ABCD.properties'

export default interface Modal extends Properties {
	mode?: ModalMode
	static?: boolean
	headline?: Snippet
	footline?: Snippet
}

export interface Button extends Properties {
	/**
	 * @property {string} target
	 * @description This property represents the target of the modal.
	 */
	target: string
}

export type ModalMode = 'basic' | 'small' | 'large' | 'huge'
