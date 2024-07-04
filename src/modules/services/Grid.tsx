import { H2 } from '@abcd/Headline'
import Image from '@abcd/Image'
import Row from '@abcd/Row'
import Section from '@abcd/Section'
import Question from '@icons/Question'
import SignsPost from '@icons/SignsPost'
import ShareNodes from '@icons/ShareNodes'
import Sliders from '@icons/Sliders'
import Lightbulb from '@icons/Lightbulb'
import Hashtag from '@icons/Hashtag'
import Upload from '@icons/Upload'
import Card from './Card'
import type Properties from './Grid.properties'
import Model from './Grid.model'

export default (props: Properties) => {
	const model = new Model(
		props,
		className => <Question class={className} style={Model.design['7.5']} />,
		{
			consulting: {
				requirements: () => <Sliders />,
				consulting: () => <SignsPost />,
				management: () => <ShareNodes style={Model.design['2.5']} />,
			},
			implementation: {
				conceptualising: () => <Lightbulb style={Model.design[5]} />,
				applications: () => <Hashtag style={Model.design['2.5']} />,
				deployment: () => <Upload />,
			},
		}
	)
	return model.render(
		(id, headline, cards) => <Section id={id} block={`${Model.slug}-${id}`}>
			<H2>{headline}</H2>
			<Row class={model.classNames.row}>
				{cards}
			</Row>
		</Section>,
		(className, src, alt) => <Image class={className} src={src} alt={alt} />,
		(classNames, svg) => <div class={classNames.abcd}>
			<span class={classNames.span}>
				{svg}
			</span>
		</div>,
		(identifier, illustration, details) => <Card
			identifier={identifier}
			details={details}
		>{illustration}</Card>
	)
}