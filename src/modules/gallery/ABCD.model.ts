import type { Data } from '@bloc/ABCD.types'
import Bootstrap from '@bloc/Bootstrap'
import type { Snippet } from '@framework'
import type { Gallery } from '@i18n/ABCD.types'
import { Model } from '@modules/ABCD.model'
import type Properties from './ABCD.properties'
import type { Size } from '@abcd/Headline.properties'

/**
 * @see https://medium.com/@brotherlycreative/free-photo-gallery-web-templates-8c5a78c10588
 * @see https://www.w3schools.com/css/css_grid.asp
 * @see https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_layout_named
 */
export default class ABCD extends Model<Properties> {
	static readonly slug = this.abcd.keywords.gallery
	static readonly classNames = {}

	/**
	 * @returns 
	 */
	readonly render = (
		headline: (headline: Snippet) => Snippet,
		container: (attributes: Data, items: Snippet) => Snippet,
		item: (
			attributes: Data,
			className: string,
			diashow: Gallery.Diashow,
			caption: { container: string, headline: string, size: Size, button: Data, label: string },
			id: string
		) => Snippet
	): Snippet => {
		const
			gallery = this.properties.gallery,
			identifiers = Object.keys(gallery.diashow),
			items: Snippet[] = [],
			className = Model.umbrella(ABCD.slug),
			prefix = Model.identifier(ABCD.slug)
		let max = 0 //maximal amount of columns

		if (!Array.isArray(gallery.layout)) return '' //bug fix: at times `gallery.layout` seems not to be an array
		gallery.layout.forEach(row => max = Math.max(max, row.length))
		gallery.layout.forEach((row, i) => {
			const last = row[row.length - 1]
			for (let j = row.length; j < max; j++) gallery.layout[i][j] = last
		})
		identifiers.forEach(identifier => {
			items.push(item(
				{
					class: `${className}-diashow ${this.classes.bootstrap.display.flex}`, //bug fix: video container margin bottom
					style: `grid-area: ${identifier}`,
				},
				this.classes.bootstrap.flex.grow[1], //bug fix: video container margin bottom
				gallery.diashow[identifier],
				{
					container: this.classes.bootstrap.text.center, //HTML:class
					headline: this.classes.bootstrap.margin.bottom[2], //HTML:class
					size: 5,
					button: {
						class: this.classes.abcd.button.primary,
						[Bootstrap.data(Bootstrap.keywords.toggle)]: Bootstrap.keywords.modal,
						[Bootstrap.data(Bootstrap.keywords.target)]: `#${prefix}-${identifier}`,
					},
					label: this.lexicon.abcd.harmony.diashow,
				},
				`${prefix}-${identifier}`,
			))
		})

		return [
			gallery.columns && Model.isDev && headline(this.getColumnWidth(gallery.columns)),
			gallery.headline && headline(gallery.headline),
			container(
				{
					class: identifiers.length < 2 ? className : `
					${className}
					${this.classes.bootstrap.display.flex}
					${this.classes.bootstrap.flex.column}
					${this.classes.bootstrap.display.small.grid}
					${this.classes.bootstrap.gap[2]}
				`,
					style: `--${Model.umbrella(`${this.abcd.keywords.zyxw}-grid-template-areas`)}: ${this.properties.gallery.layout.map(row => `'${row.join(' ')}'`).join(' ')};`,
				},
				items
			)
		]
	}

	private getColumnWidth = (columns: number) => {
		const
			width = 968, //max width
			gap = 8
		return `${(width - (columns - 1) * gap) / columns} x 180`
	}

	private style = (dimension: keyof Gallery.Layout) =>
		`--${Model.umbrella(`${this.abcd.keywords.zyxw}-grid-template-areas`)}: ${this.properties.gallery.layout.map(row => `'${row.join(' ')}'`).join(' ')};`
}
