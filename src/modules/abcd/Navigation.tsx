import CLASSES from '@bloc/CLASSES'
import ABCD from '@bloc/ABCD'
import type { Snippet } from '@framework'
import './Navigation.css'
import type { Navigation as Interface } from './Navigation.properties'
import Model from './Navigation.model'

/**
 * @see https://getbootstrap.com/docs/5.3/components/navbar
 */
export default (className: string, position: Interface.Position, render: (model: Model) => Snippet) => (() => <nav class={Model.classNames.abcd(className, position)}>
	<div class={`${CLASSES.abcd.container} ${CLASSES.bootstrap.container[ABCD.proportion]}`}>
		{render(new Model(position))}
	</div>
</nav>)

/**
 * @see https://getbootstrap.com/docs/5.3/helpers/vertical-rule
 * @returns 
 */
export const Divider = () => <div class={`
	${CLASSES.bootstrap.vertical.rule} 
	${CLASSES.bootstrap.display.none} 
	${CLASSES.bootstrap.display.medium.block} 
	${CLASSES.bootstrap.margin.x.zyxw}
`}></div>
