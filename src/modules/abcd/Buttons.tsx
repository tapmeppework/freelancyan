import type Properties from '@modules/ABCD.properties'
import Model from './Buttons.model'

export default (props: Properties) => <div {...new Model(props).attributes} role='group'>
	{props.children}
</div>
