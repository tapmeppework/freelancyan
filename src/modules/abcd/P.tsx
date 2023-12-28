import type Properties from './P.properties'
import Model from './P.model'

export default (props: Properties) => <p
	{...new Model(props).attributes}
>{props.children}</p>
