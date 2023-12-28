import type Properties from '@modules/ABCD.properties'
import { Model } from '@modules/ABCD.model'

export default class Buttons extends Model<Properties> {
	readonly attributes = {
		class: `
			${this.classes.bootstrap.button.group} 
			${this.properties.class}
		`,
		id: this.properties.id,
	}
}
