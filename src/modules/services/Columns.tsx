import Row from '@abcd/Row'
import Image from '@abcd/Image'
import Question from '@icons/Question'
import Briefcase from '@icons/Briefcase'
import EarthAfrica from '@icons/EarthAfrica'
import EarthEurope from '@icons/EarthEurope'
import Building from '@icons/Building'
import Card from './Card'
import './Columns.css'
import type Properties from './Columns.properties'
import Model from './Columns.model'
import Section from '@abcd/Section'
import { H2 } from '@abcd/Headline'

export default (props: Properties) => <Section>
	{new Model(
		props,
		className => <Question class={className} style={Model.design['7.5']} />,
		{
			africa: () => <EarthAfrica />,
			europe: () => <EarthEurope />,
			project: () => <Briefcase />,
			business: () => <Building style={{ padding: '0 5px' }} />,
		}
	).render(
		headline => <H2>{headline}</H2>,
		(className, columns) => <Row class={className}>{columns}</Row>,
		(className, content) => <div class={className}>{content}</div>,
		(className, identifier, illustration, details) => <Card
			class={className}
			identifier={identifier}
			details={details}
			div
		>{illustration}</Card>,
		(className, src, alt) => <Image class={className} src={src} alt={alt} />,
		(classNames, svg) => <div class={classNames.abcd}>
			<span class={classNames.span}>{svg}</span>
		</div>,
		(className, content) => <ul class={className}>{content}</ul>,
		(className, content) => <li class={className}>
			{content}
		</li>,
	)}
</Section>
