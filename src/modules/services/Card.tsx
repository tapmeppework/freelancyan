import Admin from '@bloc/Admin'
import _Card from '@abcd/Card'
import { H3 } from '@abcd/Headline'
import type Properties from './Card.properties'
import Model from './Card.model'

/**
 * @note 
 * 	I am not really happy with children used for illustration.
 * 	I need to find a better solution.
 */
export default (props: Properties) => {
	const model = new Model(props)
	
	return <_Card
		class={props.class}
		id={model.id}
		illustration={props.children}
		headline={<H3 class={Model.classNames.headline} size={4}>{props.details.headline}</H3>}
		footer={<a
			class={Model.classNames.more}
			href={model.href}
		>{Admin.lexicon.services.miscellaneous.more}</a>}
		div={props.div}
	>{props.details.description}</_Card>
}
