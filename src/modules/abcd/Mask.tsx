import './Mask.css'
import type Properties from './Mask.properties'
import Model from './Mask.model'

export default (props: Properties) => new Model(props).render(
	(attributes, children) => <div {...attributes}>
		{children}
	</div>
)
