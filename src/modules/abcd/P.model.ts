import type Properties from './P.properties'
import { Model } from '@modules/ABCD.model'

export default class P extends Model<Properties> {
	readonly attributes = {
		class: `${this.properties.class} `
	}

	constructor(properties: Properties) {
		super(properties)
		switch (properties.mode) {
			case 'center':
				this.attributes.class += this.classes.abcd.paragraph.center
				break;
			case 'light':
				this.attributes.class += this.classes.abcd.paragraph.light
				break;
			default:
				this.attributes.class += this.classes.abcd.paragraph.abcd
				break;
		}
	}
}
