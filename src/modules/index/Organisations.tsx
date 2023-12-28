import { H2, H3 } from '@abcd/Headline'
import Image from '@abcd/Image'
import Mask from '@abcd/Mask'
import P from '@abcd/P'
import './Organisations.css'
import type Properties from './Organisations.properties'
import Model from './Organisations.model'

export default (props: Properties) => new Model(props).render(
	headline => <H2>{headline}</H2>,
	(mode, body) => <P mode={mode}>{body}</P>,
	(className, items) => <div class={className}>{items}</div>,
	(classNames, organisation) => <div class={classNames.item}>
		<Image class={classNames.image} {...organisation.image} alt={organisation.alt} />
		<Mask class={classNames.container}>
			<H3 class={classNames.headline} size={4} title={organisation.title}>{organisation.headline}</H3>
		</Mask>
	</div>
)
