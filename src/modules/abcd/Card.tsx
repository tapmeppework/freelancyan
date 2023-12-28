import './Card.css'
import type Properties from './Card.properties'
import Model from './Card.model'
import ModelHarmony from './Harmony.model'
import { Col } from './Row'
import Buttons from './Buttons'
import Badge from './Badge'

/**
 * @see https://getbootstrap.com/docs/5.3/components/card/
 */
export default (props: Properties) => {
	const model = new Model(props)

	return <Col class={props.class} id={props.id}>
		<div class={Model.classNames.abcd}>
			{props.illustration}
			<div class={model.classNames.body}>
				{props.headline}
				<div class={Model.classNames.content}>
					{model.renderBody(
						Model.classNames.paragraph,
						(className, paragraph) => <div class={className}>{paragraph}</div>,
						(className, paragraph) => <p class={className}>{paragraph}</p>,
						(className, badge) => <Badge class={className}>{badge}</Badge>,
					)}
				</div>
				{model.renderEllipsis((className, ellipsis) => <div class={className}>
					<strong>{ellipsis}</strong>
				</div>)}
			</div>
			{model.renderFooter((
				classNames,
				scroll,
				label,
				disabled,
				footer
			) => <div class={classNames.footer}>
					<Buttons>
						{scroll ?
							<button class={classNames.reader} type="button">{label}</button> :
							<button class={classNames.reader} type="button" disabled={disabled}>{label}</button>
						}
						{footer}
					</Buttons>
				</div>)}
		</div>
	</Col>
}
