import type Properties from './Headline.properties'
import type { H as PropertiesH } from './Headline.properties'
import Model, { H as ModelH } from './Headline.model'
import P from './P'
import Section from './Section'

export default (props: Properties) => {
	const model = new Model(props)
	return <Section class={model.classNames.section}>
		{model.render(
			headline => <H1>{headline}</H1>,
			(center, preamble) => <P mode={center ? 'center' : 'basic'}>{preamble}</P>
		)}
		{props.children}
	</Section>
}

export const H1 = (props: PropertiesH) => <h1 {...new ModelH(props, 1).attributes}>
	{props.children}
</h1>
export const H2 = (props: PropertiesH) => <h2 {...new ModelH(props, 2).attributes}>
	{props.children}
</h2>
export const H3 = (props: PropertiesH) => <h3 {...new ModelH(props, 3).attributes}>
	{props.children}
</h3>
export const H4 = (props: PropertiesH) => <h4 {...new ModelH(props, 4).attributes}>
	{props.children}
</h4>
export const H5 = (props: PropertiesH) => <h5 {...new ModelH(props, 5).attributes}>
	{props.children}
</h5>
export const H6 = (props: PropertiesH) => <h6 {...new ModelH(props, 6).attributes}>
	{props.children}
</h6>
