import type Properties from '@modules/ABCD.properties'
import Model from './Row.model'

export default (props: Properties) => <div
	class={new Model(props).classNames.row}
	id={props.id}
>{props.children}</div>

export const Col = (props: Properties) => <div
	class={new Model(props).classNames.col}
	id={props.id}
>{props.children}</div>

