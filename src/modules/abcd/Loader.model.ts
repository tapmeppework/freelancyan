import type { Anonymous, Data } from '@bloc/ABCD.types'
import type { Snippet } from '@bloc/framework'
import type Properties from './Loader.properties'
import { Model } from '@modules/ABCD.model'

export default class Loader extends Model<Properties> {
	readonly render = (
		snippet: (attributes: Data<Anonymous<string>>, hidden: string, children: Snippet) => Snippet
	): Snippet => snippet(
		{
			class: `
				${this.classes.abcd.loader.abcd}
				${this.properties.large && this.classes.abcd.loader.large}
				${this.classes.bootstrap.spinner.grow}
				${this.properties.class}
			`,
			id: this.properties.id,
			// style: this.properties.large ? `--bs-spinner-width: 4rem; --bs-spinner-height: 4rem;` : '',
		},
		Model.classes.bootstrap.visually.hidden,
		this.properties.children || this.lexicon.abcd.harmony.processing
	)
}
