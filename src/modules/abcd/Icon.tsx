import type Properties from '../abcd/Icon.properties'
import type { Configuration, Modes } from '../abcd/Icon.properties'
import Model from '../abcd/Icon.model'

/**
 * @description this class is used to draw the icons
 * @since PM (03.01.2022)
 * @see https://fontawesome.com/v5/icons?d=gallery&p=2&s=solid&m=free
 */
export default (configuration: Configuration, mode: keyof Modes = 'jsx') => modes[mode](configuration)

const modes: Modes = {
	jsx: (configuration: Configuration) => (properties: Properties) => {
		const model = new Model(properties, configuration)
		return <svg {...model.svg}><path {...model.path} /></svg>
	},
	raw: (configuration: Configuration) => (properties: Properties) => {
		const model = new Model(properties, configuration)
		return `<svg 
			class='${model.svg.class}' 
			id='${model.svg.id}' 
			style='${model.svg.style}' 
			height='${model.svg.height}' 
			viewBox='${model.svg.viewBox}' 
			focusable='${model.svg.focusable}' 
			role='${model.svg.role}' 
			aria-hidden='${model.svg['aria-hidden']}'
		>
			<path fill='${model.path.fill}' d='${configuration.path}' />
		</svg>`
	},
}
