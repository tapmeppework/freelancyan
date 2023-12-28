/**
 * fontawesome
 * @tutorial https://fontawesome.com/v5/how-to-use/on-the-web/using-with/react huge collection; one color for all
 * 
 * customiser
 * - @see https://icomoon.io/app import in bulk; custom classes definition; exported svg files contain deprecated code
 * - @see https://www.glyphter.com/ login doesn't work; svg files can't be imported in bulk
 * 
 * alternatives
 * - @see https://getbootstrap.com/docs/5.3/extend/icons/
 * - @see https://feathericons.com/ custom download; one color for every stroke; small collection; simplistic design
 * - @see https://icofont.com/icons custom download; one color for every stroke; huge collection
 * 
 * @see https://fontawesome.com/v5/how-to-use/on-the-web/using-with/react#features
 */
import type { Component, Style } from '@framework'
import type Properties from '@modules/ABCD.properties'

export default interface Icon extends Properties {
	height?: string
	viewBox?: string
	style?: Style
}

export interface Modes {
	jsx: (configuration: Configuration) => Component<Icon>
	raw: (configuration: Configuration) => Component<Icon>
}

export interface Configuration {
	name: string
	path: string
	viewBox?: string
	variant?: 'brands' | 'solid' | 'regular'
}
