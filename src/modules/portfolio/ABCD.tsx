import HARMONY from '@abcd/Harmony'
import { H2 } from '@abcd/Headline'
import Section from '@abcd/Section'
import type Properties from './ABCD.properties'
import Model from './ABCD.model'

export default (props: Properties) => {
	const model = new Model(props)
	return <Section>
		{model.render(
			headline => <H2>{headline}</H2>,
			HARMONY.portions,
			HARMONY.assortments
		)}
	</Section>
}
