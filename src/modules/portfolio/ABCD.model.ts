import ABCD0 from '@bloc/ABCD'
import type { Snippet } from '@framework'
import { Model } from '@modules/ABCD.model'
import type { Portions, Assortments } from '@abcd/Harmony.properties'
import ModelHarmony from '@abcd/Harmony.model'
import type Properties from './ABCD.properties'

export default class ABCD extends Model<Properties> {
	static readonly slug = ABCD0.keywords.portfolio
	static readonly classNames = ModelHarmony.classify(this.slug)

	readonly render = (
		headline: (headline: Snippet) => Snippet,
		portions: Portions,
		assortments: Assortments
	): Snippet => {
		const
			portfolio = this.properties.portfolio,
			snippets = [
				portfolio.headline && headline(portfolio.headline),
			]
		switch (portfolio.mode) {
			case 'segments': 
				snippets.push(portions.container(
					ABCD.classNames.segments,
					portfolio.content.map(segment => portions.container(ABCD.classNames.segment, segment))
				))
				break
			case 'paragraphs': 
				snippets.push(portions.container(
					ABCD.classNames.paragraphs,
					portfolio.content.map(paragraph => portions.paragraph(ABCD.classNames.paragraph, paragraph))
				))
				break
			case 'timeline': 
				snippets.push(assortments.timeline(portfolio.content))
				break
			case 'grid': 
				snippets.push(assortments.grid(portfolio.content))
				break
			// default: return ''
		}

		return snippets
	}
}
