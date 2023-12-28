import './ABCD.css'
import type Properties from './ABCD.properties'
import Model from './ABCD.model'
import Section from '@abcd/Section'
import Diashow, { Modal } from '@abcd/Diashow'
import { H2, H3 } from '@abcd/Headline'

export default (props: Properties) => <Section>
	{new Model(props).render(
		headline => <H2>{headline}</H2>,
		(attributes, items) => <div {...attributes}>{items}</div>,
		(attributes, className, diashow, caption, id) => <div {...attributes}>
			<Diashow class={className} diashow={diashow} controls={false}>
				<div class={caption.container}>
					<H3 title={diashow.title} size={caption.size} class={caption.headline}>{diashow.headline}</H3>
					<button {...caption.button}>{caption.label}</button>
				</div>
			</Diashow>
			<Modal id={id} headline={diashow.headline} diashow={diashow} />
		</div>
	)}
</Section>