import { H2 } from '@abcd/Headline'
import Image from '@abcd/Image'
import Row from '@abcd/Row'
import Section from '@abcd/Section'
import Question from '@icons/Question'
import SignsPost from '@icons/SignsPost'
import ShareNodes from '@icons/ShareNodes'
import Sliders from '@icons/Sliders'
import Lightbulb from '@icons/Lightbulb'
import UserNinja from '@icons/UserNinja'
import Book from '@icons/Book'
import Hashtag from '@icons/Hashtag'
import ArrowsLeftRightToLine from '@icons/ArrowsLeftRightToLine'
import At from '@icons/At'
import Code from '@icons/Code'
import Database from '@icons/Database'
import BowlRice from '@icons/BowlRice'
import CartShopping from '@icons/CartShopping'
import RightLeft from '@icons/RightLeft'
import ShieldHalved from '@icons/ShieldHalved'
import ChartArea from '@icons/ChartArea'
import Gears from '@icons/Gears'
import GaugeHigh from '@icons/GaugeHigh'
import Bug from '@icons/Bug'
import GraduationCap from '@icons/GraduationCap'
import RankingStar from '@icons/RankingStar'
import Upload from '@icons/Upload'
import Shuffle from '@icons/Shuffle'
import Card from './Card'
import type Properties from './Grid.properties'
import Model from './Grid.model'

export default (props: Properties) => {
	const model = new Model(
		props,
		className => <Question class={className} style={Model.design['7.5']} />,
		{
			administration: {
				consulting: () => <SignsPost />,
				management: () => <ShareNodes style={Model.design['2.5']} />,
				requirements: () => <Sliders />,
				conceptualising: () => <Lightbulb style={Model.design[5]} />,
				mentoring: () => <UserNinja style={Model.design['2.5']} />,
				documentation: () => <Book style={Model.design['2.5']} />,
			},
			implementation: {
				website: () => <At />,
				applications: () => <Hashtag style={Model.design['2.5']} />,
				responsive: () => <ArrowsLeftRightToLine height={Model.height[640]} />,
				fullstack: () => <Code height={Model.height[640]} />,
				backend: () => <Code />,
				frontend: () => <Code />,
				database: () => <Database />,
				boilerplates: () => <BowlRice />,
				ecommerce: () => <CartShopping height={Model.height[576]} />,
				api: () => <RightLeft />,
			},
			optimisation: {
				automation: () => <Gears height={Model.height[640]} />,
				performance: () => <GaugeHigh />,
				security: () => <ShieldHalved />,
				seo: () => <RankingStar height={Model.height[640]} />,
				analytics: () => <ChartArea />,
			},
			delivery: {
				tests: () => <Bug />,
				training: () => <GraduationCap height={Model.height[640]} />,
				deployment: () => <Upload />,
				relocation: () => <Shuffle />,
			},
			miscellaneous: {
				miscellaneous: () => <Question style={Model.design['7.5']} />,
			},
			// maintenance: {},
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