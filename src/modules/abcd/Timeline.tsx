import Bootstrap from '@bloc/Bootstrap'
import Badge from './Badge'
import Buttons from './Buttons'
import { Modal as Diashow } from './Diashow'
import Dropdown, { Item } from './Dropdown'
import type Harmony from './Harmony.properties'
import { H3 } from './Headline'
import Image from './Image'
import { Button } from './Modal'
import './Timeline.css'
import type Properties from './Timeline.properties'
import Model, { Step as ModelStep } from './Timeline.model'

/**
 * @see https://startbootstrap.com/previews/agency
 */
export default (props: Properties) => {
	const model = new Model(props)

	return <ul class={Model.classNames.abcd}>
		{model.render(step => <Step {...step}>{step.children}</Step>)}
		{props.children}
		<li class={Model.classNames.step}>
			<div class={Model.classNames.tail} />
		</li>
	</ul>
}

export const Step = (props: Harmony) => {
	const model = new ModelStep(props)
	return <li class={Model.classNames.step} id={model.id}>
		<div class={Model.classNames.center}>
			<Image class={Model.classNames.image} {...model.image} alt={model.alt} />
		</div>
		<div class={Model.classNames.body}>
			<H3 class={Model.classes.abcd.modal.title} size={4}>{props.headline}</H3>
			{model.render(
				subline => <H3 class={Model.classNames.headline} size={6}>
					<em>{subline}</em>
				</H3>,
				(className, badge) => <Badge class={className}>{badge}</Badge>,
				(className, target, content, badges) => <div class={className} id={target}>
					{content}
					{badges}
				</div>,
				(className, content) => <div class={className}>
					<strong>{content}</strong>
				</div>,
				(className, paragraph) => <p class={className}>{paragraph}</p>,
				(scroll, target, disabled, anchors) => <Buttons>
					{scroll ?
						<button
							class={Model.classNames.button.reader}
							type="button"
						>{model.lexicon.abcd.harmony.more}</button> :
						<button
							class={Model.classNames.button.reader}
							type="button"
							{...Bootstrap.dataset({
								[Bootstrap.keywords.toggle]: Bootstrap.keywords.collapse,
								[Bootstrap.keywords.target]: `#${target}`,
							})}
							disabled={disabled}
						>
							<span class={Model.classNames.button.collapsed}>{model.lexicon.abcd.harmony.more}</span>
							<span class={Model.classNames.button.show}>{model.lexicon.abcd.harmony.less}</span>
							<div class={Model.classNames.button.processing} role="status">
								<span class={model.classes.bootstrap.visually.hidden}>{model.lexicon.abcd.harmony.processing}</span>
							</div>
						</button>
					}
					{anchors}
				</Buttons>,
				(className, target, label, id, headline, diashow) => <>
					<Button class={className} target={target}>{label}</Button>
					<Diashow id={id} headline={headline} diashow={diashow} />
				</>,
				(className, label, items) => <Dropdown
					class={{ button: className }}
					label={label}
				>{items}</Dropdown>,
				link => <Item {...link}>{link.label}</Item>,
				link => <a {...link}>{link.label}</a>,
			)}
		</div>
	</li>
}
