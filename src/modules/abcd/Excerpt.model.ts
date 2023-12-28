import type { Snippet } from '@framework'
import { Model } from '@modules/ABCD.model'
import type Properties from './Excerpt.properties'

export default class Excerpt extends Model<Properties> {
	readonly render = (
		row: (className: string, content: Snippet) => Snippet,
		column: (className: string, content: Snippet) => Snippet,
		headline: {
			primary: (content: Snippet) => Snippet,
			secondary: (content: Snippet) => Snippet,
			tertiary: (content: Snippet) => Snippet,
		},
		paragraph: {
			justify: (className: string, content: Snippet) => Snippet,
			regular: (className: string, content: Snippet) => Snippet,
		},
	): Snippet => this.properties.list.map(set => row(
		`
				${this.classes.bootstrap.row.gap.zyxw}
				${this.classes.bootstrap.margin.bottom.zyxw}
			`,
		set.map(item => {
			const [classNameCols, classNameP, _paragraph] = item.full ?
				[
					'',
					'',
					paragraph.justify,
				] : (item.justify ?
					[
						this.classes.bootstrap.col.medium[6],
						'',
						paragraph.justify,
					] :
					[
						this.classes.bootstrap.col.medium[6],
						this.classes.bootstrap.text.center,
						paragraph.regular,
					]
				)
			return column(
				`
					${this.classes.bootstrap.col[12]}
					${classNameCols}
				`,
				[
					item.headline.primary && headline.primary(item.headline.primary),
					item.headline.secondary && headline.secondary(item.headline.secondary),
					item.headline.tertiary && headline.tertiary(item.headline.tertiary),
					...item.paragraphs.map(paragraph => _paragraph(classNameP, paragraph)),
				]
			)
		})
	))
}
