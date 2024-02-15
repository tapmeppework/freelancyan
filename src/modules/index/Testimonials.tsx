import Carousel, { Item } from '@abcd/Carousel'
import { H2, H3 } from '@abcd/Headline'
import Image from '@abcd/Image'
import P from '@abcd/P'
import './Testimonials.css'
import type Properties from './Testimonials.properties'
import Model from './Testimonials.model'

export default (props: Properties) => new Model(props).render(
	headline => <H2>{headline}</H2>,
	(mode, body) => <P mode={mode}>{body}</P>,
	(className, flow, items) => <Carousel class={className} flow={flow} controls>
		{items}
	</Carousel>,
	(classNames, active, testimonial) => <Item class={classNames.item} active={active} duration={testimonial.duration}>
		<div class={classNames.profile}>
			<Image class={classNames.image} {...testimonial.image} alt={testimonial.alt} />
		</div>
		<H3 class={classNames.headline} size={4}>{testimonial.headline}</H3>
		<H3 class={classNames.headline} size={6}><em>{testimonial.subline}</em></H3>
		<P class={classNames.body} mode="center">{testimonial.title}</P>
	</Item>
)
