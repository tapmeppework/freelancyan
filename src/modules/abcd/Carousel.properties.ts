import type { Stroolean } from '@bloc/ABCD.types'
import type Properties from '@modules/ABCD.properties'

/**
 */
export default interface Carousel extends Properties {
	/**
	 * @property {Anonymous<boolean>} controls {false}
	 * @description TRUE if the controls buttons should be displayed.
	 */
	controls?: boolean

	/**
	 * @property {Flow} flow {'auto'}
	 * @description
	 * 	The mode of operation:
	 * 	- 'auto' if the slides should automatically move to the next, using the default duration.
	 * 	- 'semi' if the slides should automatically move to the next after the manual activation, using the default duration.
	 * 	- 'manual' if the slides should only move manually.
	 * 	- _number_ a positive number representing the automatic time in millisecond between 2 moves.
	 * 
	 * @see https://getbootstrap.com/docs/5.3/components/carousel/#autoplaying-carousels
	 */
	flow?: Flow

	/**
	 * @property {Stroolean} loop {'true'}
	 * @description This property is used to determine whether the carousel should cycle continuously or have hard stop.
	 */
	// loop?: Stroolean

	/**
	 * @property {Anonymous<boolean>} fade {true}
	 * @description It should be set to true to activate the crossfade transition.
	 */
	fade?: boolean
}

export interface Item extends Properties {
	/**
	 * @property {Anonymous<boolean>} active
	 */
	active?: boolean

	/**
	 * @property {Anonymous<number>} duration
	 */
	duration?: number
}

export type Flow = 'auto' | 'semi' | 'manual' | number
