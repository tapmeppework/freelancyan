import Buttons from '@abcd/Buttons'
import { H2 } from '@abcd/Headline'
import NETWORKS from '@abcd/Networks'
import Row, { Col } from '@abcd/Row'
import Section from '@abcd/Section'
import Model from '@modules/contact/Basics.model'
import At from '@icons/At'
import CommentSms from '@icons/CommentSms'
import House from '@icons/House'
import LocationDot from '@icons/LocationDot'
import Phone from '@icons/Phone'
import Signature from '@icons/Signature'
import Whatsapp from '@icons/Whatsapp'
import './Basics.css'

export default () => {
	const model = new Model
	return <Section>
		<Row class={model.classNames.abcd}>
			<Col class={Model.classNames.columns}>
				<H2>{model.lexicon.contact.me}</H2>
				{model.renderContact(
					(className, icon, information) => <div class={className.container}>
						<div class={className.icon}>{icon}</div>
						<div>{information}</div>
					</div>,
					(href, label) => <a href={href} target="_blank">{label}</a>,
					{
						business: (className?: string) => <House class={className} />,
						name: (className?: string) => <Signature class={className} />,
						address: (className?: string) => <LocationDot class={className} />,
						email: (className?: string) => <At class={className} />,
						phone: (className?: string) => <Phone class={className} />,
						sms: (className?: string) => <CommentSms class={className} />,
						whatsapp: (className?: string) => <Whatsapp class={className} />,
					},
				)}
			</Col>
			{model.renderOffice((className, headline, content) => <Col class={className}>
				<H2>{headline}</H2>
				<div>{content}</div>
			</Col>)}
			<Col class={Model.classNames.columns}>
				<H2>{model.lexicon.contact.networks}</H2>
				<Buttons>
					{model.renderNetworks(
						NETWORKS,
						(className, network, icon) => <a
							class={className}
							href={network.href}
							title={network.title}
							target="_blank"
						>
							{icon}
							{network.label}
						</a>,
						Model.classNames.networks,
					)}
				</Buttons>
			</Col>
		</Row>
	</Section>
}
