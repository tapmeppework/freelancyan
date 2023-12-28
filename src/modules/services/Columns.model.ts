import type { Snippet } from '@framework'
import type { Services } from '@i18n/ABCD.types'
import Grid from '@abcd/Grid.model'
import Model from './ABCD.model'
import type Properties from './Columns.properties'

export default class Columns extends Model<Properties, Services.Columns<() => Snippet>> {
	static readonly slug = 'columns'
	static readonly classNames = {
		row: `
			${this.umbrella(this.slug)}
			${Grid.classNames.row[this.abcd.config.grid]}
		`,
		preamble: `
			${this.umbrella(`${this.slug}-preamble`)}
			${this.classes.bootstrap.text.center}
			${this.classes.bootstrap.rounded.abcd}
		`,
		column: this.umbrella(`${this.slug}-column`),
		card: this.umbrella(`${this.slug}-card`),
		highlight: this.umbrella(`${this.slug}-highlight`),
	}

	readonly render = (
		headline: (headline: Snippet) => Snippet,
		row: (className: string, columns: Snippet) => Snippet,
		container: (className: string, content: Snippet) => Snippet,
		card: (className: string, identifier: string, illustration: Snippet, details: Services.Details) => Snippet,
		image: (className: string, src: string, alt?: string) => Snippet,
		icon: (classNames: { abcd: string, span: string }, svg: Snippet) => Snippet,
		list: (className: string, content: Snippet) => Snippet,
		item: (className: string, content: Snippet) => Snippet,
	): Snippet => {
		const
			columns = Object.keys(this.properties.catalogue),
			highlight = columns.find(key =>
				(this.properties.catalogue[key as keyof Services.Columns] as Services.Column).highlight
			),
			classNameList = `
				${this.classes.bootstrap.list.group.abcd} 
				${this.properties.flush && this.classes.bootstrap.list.group.flush}
			`,
			getCard = (block: keyof Services.Columns) => {
				const column = this.properties.catalogue[block] as Services.Column

				return card(
					`
					${Columns.classNames.card}
					${column.highlight && Columns.classNames.highlight}
				`,
					`${Columns.slug}-${block}`,
					this.illustration(column, image, icon, this.icons[block]),
					{
						headline: column.headline,
						description: [
							column.header && container(this.classes.bootstrap.margin.bottom.zyxw, column.header),
							list(
								classNameList,
								column.items.map(content =>
									item(this.classes.bootstrap.list.group.item.abcd, content)
								)
							),
							column.footer && container(this.classes.bootstrap.margin.top.zyxw, column.footer),
						],
					},
				)
			}
		return [
			this.properties.headline && headline(this.properties.headline),
			highlight ? row(
				Columns.classNames.row,
				columns.map(key => {
					const
						block = key as keyof Services.Columns,
						column = this.properties.catalogue[block] as Services.Column

					return container(
						Columns.classNames.column,
						[
							container(
								`
										${Columns.classNames.preamble}
										${column.highlight && this.classes.abcd.gradient.background}
									`,
								column.highlight || this.abcd.keywords.ellipsis.value
							),
							getCard(block)
						]
					)
				})
			) : row(
				Columns.classNames.row,
				columns.map(key => container(
					Columns.classNames.column,
					getCard(key as keyof Services.Columns)
				))
			)
		]
	}
}