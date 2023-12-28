import ABCD from '@bloc/ABCD'
import type { Snippet } from '@framework'
import type { Index } from '@i18n/ABCD.types'
import { Model } from '@modules/ABCD.model'
import type { Mode } from '@abcd/P.properties'
import type Properties from './Organisations.properties'

export default class Organisations extends Model<Properties> {
	static readonly slug = ABCD.keywords.organisations
	private static readonly classNames = {
		abcd: `
			${this.classes.bootstrap.margin.top.zyxw}
			${this.classes.bootstrap.display.flex}
			${this.classes.bootstrap.flex.wrap}
			${this.classes.bootstrap.justify.content.center}
			${this.classes.bootstrap.column.gap[3]}
			${this.classes.bootstrap.row.gap[3]}
		`,
		item: `
				${this.umbrella(`${this.slug}-item`)}
				${this.classes.bootstrap.position.relative}
			`,
		image: this.umbrella(`${this.slug}-image`),
		container: this.umbrella(`${this.slug}-container`),
		headline: this.classes.abcd.headline.abcd,
	}

	readonly render = (
		headline: (headline: Snippet) => Snippet,
		body: (mode: Mode, body: Snippet) => Snippet,
		container: (className: string, items: Snippet[]) => Snippet,
		item: (
			classNames: { item: string, image: string, container: string, headline: string },
			organisation: Index.Organisation
		) => Snippet,
	): Snippet => [
			headline(this.properties.headline),
			this.properties.body && body('light', this.properties.body),
			container(
				Organisations.classNames.abcd,
				this.properties.list.map(organisation => item(Organisations.classNames, {
					...organisation,
					image: {
						...organisation.image,
						src: `${ABCD.assets.organisations}/${organisation.image.src}`,
					},
					alt: organisation.alt || organisation.headline?.toString()
				}))
			),
		]
}
