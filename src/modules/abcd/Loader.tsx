import './Loader.css'
import type Properties from './Loader.properties'
import Model from './Loader.model'

export default (props: Properties) => new Model(props).render(
	(attributes, hidden, children) => <div {...attributes}>
		<span class={hidden}>
			{children}
		</span>
	</div>
)
