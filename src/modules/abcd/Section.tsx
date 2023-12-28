import ABCD from '@bloc/ABCD'
import Utils from '@bloc/Utils'
import './Section.css'
import type Properties from './Section.properties'
import Model from './Section.model'

export default (props: Properties) => <section
	class={Model.class}
	id={props.id}
	{...Utils.dataset({ block: props.block || '' })}
>
	<div
		class={`
			${Model.classes.abcd.container}
			${Model.classes.bootstrap.container[ABCD.proportion]} 
			${Model.classes.bootstrap.padding.y.zyxw}
			${props.class}
		`}
	>{props.children}</div>
</section>
