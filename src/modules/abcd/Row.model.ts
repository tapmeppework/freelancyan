import type Properties from '@modules/ABCD.properties'
import { Model } from '@modules/ABCD.model'

export default class Row extends Model<Properties> {
	readonly classNames = {
		row: `${this.classes.bootstrap.row.abcd} ${this.properties.class}`,
		col: `${this.classes.bootstrap.col.abcd} ${this.properties.class}`,
	}
}
