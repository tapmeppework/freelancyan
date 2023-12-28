import type { Data } from '@bloc/ABCD.types'
import type { Snippet } from '@framework'
import { Model } from '@modules/ABCD.model'
import type Properties from './Demonstration.properties'

export default class Demonstration extends Model<Properties> {
	constructor(properties: Properties) {
		// super(properties, { active: import.meta.env.DEV }) > It won't work here because active is always set even when the value is undefined
		super(properties)
		if (this.properties.active == undefined) this.properties.active = Model.isDev
	}

	readonly render = (
		container: (attributes: Data, content: Snippet) => Snippet
	): Snippet => this.properties.active && container(
		{
			class: this.classes.abcd.demonstration,
			role: 'alert',
			style: `--${Model.umbrella(`${this.abcd.keywords.zyxw}-${this.abcd.keywords.demonstration}-offset`)}: ${this.abcd.wonder.offset}px`,
		},
		this.lexicon._.demonstration
	)
}
