import type { Snippet } from '@framework'
import type Properties from '@modules/ABCD.properties'

/**
 * @see https://getbootstrap.com/docs/5.3/components/accordion/
 */
export default interface Accordion extends Properties {
	headline: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

	/**
	 * @property {boolean|undefined} flush
	 * @description Add flush to remove some borders and rounded corners to render accordions edge-to-edge with their parent container.
	 * @see https://getbootstrap.com/docs/5.3/components/accordion/#flush
	 */
	flush?: boolean
}

export interface Item extends Properties {
	/**
	 * 
	 */
	headline: Snippet
	show?: boolean
	/**
	 * @see https://getbootstrap.com/docs/5.3/components/accordion/#always-open
	 */
	open?: boolean
}