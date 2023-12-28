import type Properties from '@modules/ABCD.properties'
import Model from './Badge.model'

export default (props: Properties) => <span {...new Model(props).attributes}>
	{props.children}
</span>