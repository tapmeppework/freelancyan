import Xmark from '@icons/Xmark'
import type Properties from './Modal.properties'
import type { Button as PropertiesButton } from './Modal.properties'
import Model, { Button as ModelButton, LanguagesSwitch as ModelLanguagesSwitch } from './Modal.model'
import { H4 } from './Headline'


/**
 * @see https://getbootstrap.com/docs/5.3/components/modal/#live-demo
 * @see https://getbootstrap.com/docs/5.3/components/modal/#vertically-centered
 */
const Modal = (props: Properties) => {
	const model = new Model(props)

	return new Model(props).render(
		(attributes, headline, button, body, footline) => <aside {...attributes}>
			<div class={Model.classNames.dialog}>
				<div class={Model.classNames.content}>
					<div class={Model.classNames.header}>
						{headline}
						{button}
					</div>
					{body}
					{footline}
				</div>
			</div>
		</aside>,
		(attributes, label) => <H4 {...attributes}>{label}</H4>,
		(attributes, icon) => <button {...attributes}>
			<Xmark {...icon} />
		</button>,
		(className, children) => <div class={className}>{children}</div>,
		(className, snippet) => <div class={className}>{snippet}</div>,
	)
}
export default Modal

export const Button = (props: PropertiesButton) => <button
	{...new ModelButton(props).attributes}
>{props.children}</button>

export const LanguagesSwitch = () => new ModelLanguagesSwitch().render(
	(ids, attributes, body) => <Modal id={ids.modal} {...attributes}>
		<div>{body}</div>
		<ul id={ids.list}></ul>
	</Modal>
)