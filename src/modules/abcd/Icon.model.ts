import type { Data } from '@bloc/ABCD.types'
import Utils from '@bloc/Utils'
import { Model } from '@modules/ABCD.model'
import type Properties from './Icon.properties'
import type { Configuration } from './Icon.properties'


/**
 * @description this class is used to handle the icons
 * @see https://fontawesome.com/
 * @since PM (24.06.2023)
 */
export default class Icon extends Model<Properties> {
	readonly svg: Data<any>
	readonly path: Data

	constructor(properties: Properties, protected readonly configuration: Configuration) {
		super(properties, { size: 'medium' })
		this.svg = {
			xmlns: 'http://www.w3.org/2000/svg',
			'aria-hidden': true,
			focusable: true,
			role: 'img',
			height: '1em',
			// [Utils.data('prefix')]: (configuration.variant || 'brands')[0],
			[Utils.data('icon')]: configuration.name,
			viewBox: configuration.viewBox || '0 0 512 512',
			...properties, //height?, class?, id?, style?
			// class: `${this.classes.bootstrap.line.height[1]} ${properties.class}`,
		}
		this.path = {
			fill: 'currentColor',
			d: configuration.path,
		}
	}
}
