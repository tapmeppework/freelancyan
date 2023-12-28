import type { Anonymous, Data } from '@bloc/ABCD.types'
import Bootstrap from '@bloc/Bootstrap'
import type { Snippet } from '@framework'
import { Model } from '@modules/ABCD.model'
import type Properties from './Dropdown.properties'
import type { Item as PropertiesItem } from './Dropdown.properties'

export default class Dropdown extends Model<Properties> {
	static readonly slug = 'dropdown'
	static readonly classNames = {
		abcd: `${this.classes.bootstrap.dropdown.abcd} ${this.umbrella(this.slug)}`,
		button: this.classes.bootstrap.dropdown.toggle,
		menu: this.classes.bootstrap.dropdown.menu.abcd,
		item: this.classes.bootstrap.dropdown.item,
	}

	readonly render = (
		container: (
			classNames: { abcd: string, menu: string },
			button: Snippet,
			items: Snippet,
		) => Snippet,
		button: (attributes: Data, label: Snippet) => Snippet,
	): Snippet => container(
		{
			abcd: `${Dropdown.classNames.abcd} ${this.properties.class.abcd}`,
			menu: Dropdown.classNames.menu,
		},
		button(
			{
				class: `${Dropdown.classNames.button} ${this.properties.class.button}`,
				type: 'button',
				'aria-expanded': 'false',
				[Bootstrap.data(Bootstrap.keywords.toggle)]: Bootstrap.keywords.dropdown,
			},
			this.properties.label,
		),
		this.properties.children,
	)
}

export class Item extends Model<PropertiesItem> {
	readonly render = (
		snippet: (className: Anonymous<string>, attributes: Omit<PropertiesItem, 'children'>, children: Snippet) => Snippet
	): Snippet => {
		const
			className = this.properties.class,
			children = this.properties.children
		delete this.properties.children
		delete this.properties.children
		this.properties.class = this.classes.bootstrap.dropdown.item

		return snippet(className, this.properties, children)
	}
}
