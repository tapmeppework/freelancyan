import type Properties from './Excerpt.properties'
import Model from './Excerpt.model'
import { H2, H3, H4 } from './Headline'
import P from './P'
import Row, { Col } from './Row'
import Section from './Section'

export default (props: Properties) => new Model(props).render(
	(className, content) => <Section>
		<Row class={className}>{content}</Row>
	</Section>,
	(className, content) => <Col class={className}>{content}</Col>,
	{
		primary: content => <H2>{content}</H2>,
		secondary: content => <H3>{content}</H3>,
		tertiary: content => <H4>{content}</H4>,
	},
	{
		justify: (className, content) => <P class={className}>{content}</P>,
		regular: (className, content) => <p class={className}>{content}</p>,
	},
)