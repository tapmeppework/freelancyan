import type { Snippet } from '@framework'
import { H2 } from '@abcd/Headline'
import NETWORKS from '@abcd/Networks'
import At from '@icons/At'
import Model from './About.model'

export default () => {
	const model = new Model;

	return <>
		<H2>{model.texts.headline}</H2>
		{model.render(
			NETWORKS,
			className => <At class={className} />,
			(className: string, snippet: Snippet) => <p class={className}>{snippet}</p>,
			(className, network, icon) => <a
				class={className}
				href={network.href}
				title={network.title}
				target={network.target || '_blank'}
			>{icon}</a>
		)}
	</>
}
