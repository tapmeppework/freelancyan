import type { Anonymous, Data } from '@bloc/ABCD.types'
import type { Snippet } from '@bloc/framework'
import type Properties from './Mask.properties'
import { Model } from '@modules/ABCD.model'

export default class Mask extends Model<Properties> {
	static readonly slug = Model.umbrella('mask')

	readonly render = (
		snippet: (attributes: Data<Anonymous<string>>, children: Snippet) => Snippet
	): Snippet => snippet(
		{
			class: `
				${Mask.slug}
				${this.classes.abcd.display.flex.center}
				${this.classes.bootstrap.position.absolute}
				${this.classes.bootstrap.start[0]}
				${this.classes.bootstrap.top[0]}
				${this.classes.bootstrap.width[100]}
				${this.classes.bootstrap.height[100]}
				${this.properties.full && this.classes.abcd.mask.full}
				${this.properties.class}
			`,
			id: this.properties.id,
		},
		this.properties.children
	)
}
