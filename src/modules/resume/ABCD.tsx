import type Properties from '@modules/ABCD.properties'
import HARMONY from '@abcd/Harmony'
import { H2 } from '@abcd/Headline'
import Row, { Col } from '@abcd/Row'
import Section from '@abcd/Section'
import Model from '@modules/resume/ABCD.model'
import Progress from '@modules/resume/Progress'

/**
 * @see https://getbootstrap.com/docs/5.3/components/progress/
 */
export default (props: Properties) => <>
	{new Model(props).render(
		columns => <Section>
			<Row class={Model.classNames.row}>
				{columns}
			</Row>
		</Section>,
		(classNames, headline, block) => <Col class={classNames.column}>
			<H2>{headline}</H2>
			{block}
		</Col>,
		{
			...HARMONY.portions,
			bar: progress => <Progress {...progress} />,
		},
		HARMONY.assortments,
		{
			list: (className, units) => <ol class={className}>{units}</ol>,
			set: (className, units) => <ul class={className}>{units}</ul>,
			unit: (className, item) => <li class={className}>
				<span title={item.title}>{item.label}</span>
			</li>,
		},
	)}
</>
