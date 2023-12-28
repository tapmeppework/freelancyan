import type Properties from './Dropdown.properties'
import type { Item as PropertiesItem } from './Dropdown.properties'
import Model, { Item as ModelItem } from './Dropdown.model'

export default (props: Properties) => new Model(props).render(
	(classNames, button, items) => <div class={classNames.abcd}>
		{button}
		<ul class={classNames.menu}>{items}</ul>
	</div>,
	(attributes, label) => <button {...attributes}>{label}</button>,
)

export const Item = (props: PropertiesItem) => new ModelItem(props).render(
	(className, attributes, children) => <li class={className}>
		<a {...attributes}>{children}</a>
	</li>
)
2