import type { Data } from '@bloc/ABCD.types'
import type { Snippet } from '@framework'
import type { Services } from '@i18n/ABCD.types'
import Model from './ABCD.model'
import type Properties from './Grid.properties'
import Grid0 from '@abcd/Grid.model'

export default class Grid extends Model<Properties, Services.Grid<Data<() => Snippet>>> {
	static readonly slug = 'grid'
	static readonly classNames = {
		...Grid0.classNames,
		headline: `${this.classes.abcd.line.center} ${this.classes.bootstrap.card.title}`,
		more: `${this.classes.bootstrap.button.abcd} ${this.classes.bootstrap.button.primary}`,
	}
	static readonly height = {
		576: `${512 / 576}em`,
		640: `${512 / 640}em`,
	}
	readonly classNames = {
		row: `${Grid.classNames.row[this.abcd.config.grid]} ${this.properties.class}`
	}

	readonly render = (
		section: (id: string, headline: Snippet, cards: Snippet) => Snippet,
		image: (className: string, src: string, alt?: string) => Snippet,
		icon: (classNames:{abcd: string, span: string}, svg: Snippet) => Snippet,
		card: (identifier: string, illustration: Snippet, details: Services.Details) => Snippet
	): Snippet => Object
		.keys(this.properties.catalogue)
		.map(key => {
			const
				block = key as keyof Services.Grid,
				category = this.properties.catalogue[block] as Services.Category
			return section(
				block as string,
				category.headline,
				Object.keys(category.list).map(service => {
					const details = category.list[service]
					return card(
						`${block}-${service}`,
						this.illustration(details, image, icon, this.icons[block]?.[service]),
						details,
					)
				})
			)
		})
}
