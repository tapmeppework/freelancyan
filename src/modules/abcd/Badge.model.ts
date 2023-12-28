import type Properties from '@modules/ABCD.properties'
import { Model } from '@modules/ABCD.model'

export default class Buttons extends Model<Properties> {
	readonly attributes = {
		class: `
			${this.classes.abcd.gradient.background} 
			${this.classes.bootstrap.badge} 
			${this.properties.class}
		`,
		id: this.properties.id,
	}
}
