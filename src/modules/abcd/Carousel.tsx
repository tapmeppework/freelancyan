import type { Snippet } from '@framework'
import ChevronLeft from '@icons/ChevronLeft'
import ChevronRight from '@icons/ChevronRight'
import './Carousel.css'
import type Properties from './Carousel.properties'
import type { Item as PropertiesItem } from './Carousel.properties'
import Model from './Carousel.model'


export default (props: Properties) => {
	const model = new Model(props);

	return <div {...model.attributes}>
		{model.render(
			(className, list) => <div class={className}>{list}</div>,
			attributes => <button {...attributes}></button >,
			(attributes, content) => <div {...attributes}>{content}</div>,
			(abcd, icon, hidden, svg, label) => <button {...abcd}>
				<span {...icon}>{svg}</span>
				<span {...hidden}>{label}</span>
			</button>,
			{
				previous: <ChevronLeft />,
				next: <ChevronRight />,
			}
		)}
	</div>
}

export const Item = (props: PropertiesItem) => props as unknown as Snippet
