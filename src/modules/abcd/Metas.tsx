import ABCD from '@bloc/ABCD'
import type { Data } from '@bloc/ABCD.types'
import type Properties from './Metas.properties'
import Model from './Metas.model'

/**
 * @description this class is used manage the meta tags
 */
export default (props: Properties) => {
	const model = new Model(props)
	
	return <>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="author" content={`${ABCD.author.name}, ${ABCD.author.email}`} />
		<meta name="generator" content={`@${ABCD.umbrella}/${ABCD.project} v${ABCD.version}`} />
		{/* <meta name="generator" content={`@${ABCD.umbrella}/${ABCD.project} v${ABCD.version} - ${props.astro.generator}`} /> */}
		{/* 
			astro is not rendering the title properly
			<title>{ABCD.config.contact.business} &#10148; {props.page.headline}</title> 
		*/}
		{model.render(
			(rel, href, others: Data) => <link rel={rel} href={href} {...others} />,
			{
				names: (name, content) => <meta name={name} content={content} />,
				properties: (property, content) => <meta property={property} content={content} />
			}
		)}
	</>
}
