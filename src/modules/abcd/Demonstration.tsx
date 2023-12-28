import Admin from '@bloc/Admin'
import './Demonstration.css'
import type Properties from './Demonstration.properties'
import Model from './Demonstration.model'

export default (props: Properties) => new Model(props).render(
	(attributes, content) => <div {...attributes}>{content}</div>
)