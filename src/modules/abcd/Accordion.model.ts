import type { Data } from '@bloc/ABCD.types'
import Bootstrap from '@bloc/Bootstrap'
import type { Snippet } from '@framework'
import { Model } from '@modules/ABCD.model'
import type Properties from './Accordion.properties'
import type { Item } from './Accordion.properties'

export default class Accordion extends Model<Properties> {
	static readonly slug = 'accordion'
	static readonly classNames = {
		abcd: Accordion.classes.bootstrap.accordion.abcd,
	}

	readonly attributes = {
		class: `
			${Accordion.umbrella(Accordion.slug)}
			${Accordion.classes.bootstrap.accordion.abcd}
			${this.properties.flush && Accordion.classes.bootstrap.accordion.flush}
			${this.properties.class}
		`,
		id: this.properties.id || Accordion.identifier(Accordion.slug)
	}

	readonly render = (
		item: (className: string, content: Snippet) => Snippet,
		button: (attributes: Data, headline: Snippet) => Snippet,
		headline: {
			h2: (className: string, button: Snippet) => Snippet,
			h3: (className: string, button: Snippet) => Snippet,
			h4: (className: string, button: Snippet) => Snippet,
			h5: (className: string, button: Snippet) => Snippet,
			h6: (className: string, button: Snippet) => Snippet,
		},
		body: (attributes: Data, className: string, content: Snippet) => Snippet,
	): Snippet => {
		const _headline = headline[this.properties.headline];
		return this.properties.children && (this.properties.children as unknown as Item[]).map((_item, index) => {
			const
				attributes = _item.show ?
					['', 'true', Accordion.classes.bootstrap.show,] :
					[Accordion.classes.bootstrap.collapsed.abcd, 'false', '',],
				id = _item.id || `${this.attributes.id}--${index}`
			return item(
				Accordion.classes.bootstrap.accordion.item,
				[
					_headline(
						Accordion.classes.bootstrap.accordion.header,
						button(
							{
								class: `${Accordion.classes.bootstrap.accordion.button} ${attributes[0]}`,
								type: 'button',
								[Bootstrap.data(Bootstrap.keywords.toggle)]: Bootstrap.keywords.collapse,
								[Bootstrap.data(Bootstrap.keywords.target)]: `#${id}`,
								'aria-expanded': attributes[1],
								'aria-controls': id,
							},
							_item.headline
						)
					),
					body(
						{
							id,
							class: `${Accordion.classes.bootstrap.accordion.collapse} ${Accordion.classes.bootstrap.collapse.abcd} ${attributes[2]}`,
							...(_item.open ? {} : { [Bootstrap.data(Bootstrap.keywords.parent)]: `#${this.attributes.id}` })
						},
						Accordion.classes.bootstrap.accordion.body,
						_item.children,
					),
				]
			)
		})
	}
}