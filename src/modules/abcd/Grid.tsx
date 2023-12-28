import Bootstrap from '@bloc/Bootstrap'
import type Properties from './Grid.properties'
import Model, { Card as ModelCard } from './Grid.model'
import type Harmony from './Harmony.properties'
import _Card from './Card'
import Dropdown, { Item } from './Dropdown'
import Image from './Image'
import Row from './Row'
import { H3 } from './Headline'
import { Modal as Diashow } from './Diashow'
import { Button } from './Modal'

/**
 * @see https://startbootstrap.com/previews/agency
 */
export default (props: Properties) => {
	const model = new Model(props)

	return <Row class={model.classNames.row}>
		{model.render(card => <Card {...card} />)}
	</Row>
}

export const Card = (props: Harmony) => {
	const model = new ModelCard(props)

	return <_Card
		class={props.class}
		id={model.id}
		illustration={<Image class={Model.classNames.image} {...model.image} alt={model.alt}></Image>}
		headline={<>
			<H3 class={Model.classNames.headline.modal} size={4}>{props.headline}</H3>
			{model.renderSublines(subline => <H3 class={Model.classNames.headline.regular} size={6}>
				<em>{subline}</em>
			</H3>)}
		</>}
		badges={props.badges}
		footer={model.renderFooter(
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
	>{props.children}</_Card>
}
