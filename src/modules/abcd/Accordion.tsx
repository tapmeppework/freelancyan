import type { Snippet } from '@framework'
import './Accordion.css'
import type Properties from './Accordion.properties'
import type { Item as PropertiesItem } from './Accordion.properties'
import Model from './Accordion.model'

/**
 * @see https://getbootstrap.com/docs/5.3/components/accordion
 */
export default (props: Properties) => {
	const model = new Model(props)
	return <div {...model.attributes}>
		{model.render(
			(className, item) => <div class={className}>{item}</div>,
			(attributes, headline) => <button {...attributes}>{headline}</button>,
			{
				h2: (className, button) => <h2 class={className}>{button}</h2>,
				h3: (className, button) => <h3 class={className}>{button}</h3>,
				h4: (className, button) => <h4 class={className}>{button}</h4>,
				h5: (className, button) => <h5 class={className}>{button}</h5>,
				h6: (className, button) => <h6 class={className}>{button}</h6>,
			},
			(attributes, className, content) => <div {...attributes}>
				<div class={className}>{content}</div>
			</div>
		)}
	</div>
}

/**
 * 
 * @param props 
 * @returns 
 */
export const Item = (props: PropertiesItem) => props as unknown as Snippet
