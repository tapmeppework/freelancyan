import type { Snippet } from '@framework'
import Badge from '@abcd/Badge'
import { H1 } from '@abcd/Headline'
import { Col } from '@abcd/Row'
import Model from './Introduction.model'

/**
 * 
 */
export default () => {
	const model = new Model
	return <Col class={model.classNames.abcd}>
		{model.render(
			badge => <div class={model.classNames.badge.outer}>
				<Badge class={model.classNames.badge.inner}>
					{badge}
				</Badge>
			</div>,
			(className, snippet) => <div class={className}>{snippet}</div>,
			(className, headline) => <H1 class={className}>{headline}</H1>,
			(className, href: string, headline: Snippet) => <a class={className} href={href}>
				{headline}
			</a>
		)}
	</Col>
}
