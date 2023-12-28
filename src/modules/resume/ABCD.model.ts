import type { Snippet } from '@framework'
import type { ABCD as Lexicon, Resume } from '@i18n/ABCD.types'
import type Properties from '@modules/ABCD.properties'
import { Model } from '@modules/ABCD.model'
import type { Assortments } from '@abcd/Harmony.properties'
import ModelHarmony from '@abcd/Harmony.model'
import type { Portions } from '@modules/resume/ABCD.properties'

export default class ABCD extends Model<Properties> {
	static readonly slug = 'resume'
	static readonly classNames = {
		...ModelHarmony.classify(this.slug),
		row: `
			${this.classes.bootstrap.gutter.x.zyxw}
			${this.classes.bootstrap.gutter.y[5]}
		`,
		bars: `
			${this.umbrella(`${this.slug}-bars`)}
			${this.classes.abcd.margin.top.negative[3]}
		`,
		items: {
			list: `
				${this.classes.bootstrap.text.center} 
				${this.classes.bootstrap.list.group.abcd} 
				${this.classes.bootstrap.list.group.numbered}
			`,
			set: `
				${this.classes.bootstrap.text.center} 
				${this.classes.bootstrap.list.group.abcd}
			`,
			item: `
				${this.classes.bootstrap.list.group.item.abcd}
				${this.classes.bootstrap.background.transparent}
			`,
		}
	}

	readonly render = (
		section: (columns: Snippet) => Snippet,
		column: (
			classNames: {
				column: string,
			},
			headline: Snippet,
			children: Snippet,
		) => Snippet,
		portions: Portions,
		assortments: Assortments,
		items: {
			list: (className: string, units: Snippet) => Snippet,
			set: (className: string, units: Snippet) => Snippet,
			unit: (className: string, item: Resume.Item) => Snippet,
		},
	) => this.lexicon.resume.map(lexicon => {
		switch (lexicon.mode) {
			case 'single': return section(column(
				{
					column: this.classes.bootstrap.col[12],
				},
				lexicon.full.headline,
				this.renderFull(lexicon.full, portions, assortments)
			))
			case 'double': return section([
				column(
					{
						column: `${this.classes.bootstrap.col[12]} ${this.classes.bootstrap.col.medium[6]}`,
					},
					lexicon.left.headline,
					this.renderMedium(lexicon.left, portions, items)
				),
				column(
					{
						column: `${this.classes.bootstrap.col[12]} ${this.classes.bootstrap.col.medium[6]}`,
					},
					lexicon.right.headline,
					this.renderMedium(lexicon.right, portions, items)
				),
			])
			default: return section('')
		}
	})

	private renderFull = (
		block: Lexicon.Block.Harmony,
		portions: Portions,
		assortments: Assortments,
	): Snippet => {
		switch (block.mode) {
			case 'segments': return portions.container(
				ABCD.classNames.segments,
				block.content.map(segment => portions.container(ABCD.classNames.segment, segment))
			)
			case 'paragraphs': return portions.container(
				ABCD.classNames.paragraphs,
				block.content.map(paragraph => portions.paragraph(ABCD.classNames.paragraph, paragraph))
			)
			case 'timeline': return assortments.timeline(block.content)
			case 'grid': return assortments.grid(block.content)
			default: return ''
		}
	}
	private renderMedium = (
		block: Resume.Moderate,
		portions: Portions,
		items: {
			list: (className: string, units: Snippet) => Snippet,
			set: (className: string, units: Snippet) => Snippet,
			unit: (className: string, item: Resume.Item) => Snippet,
		},
	): Snippet => {
		switch (block.mode) {
			case 'segments': return portions.container(
				ABCD.classNames.segments,
				block.content.map(segment => portions.container(ABCD.classNames.segment, segment))
			)
			case 'paragraphs': return portions.container(
				ABCD.classNames.paragraphs,
				block.content.map(paragraph => portions.paragraph(ABCD.classNames.paragraph, paragraph))
			)
			case 'bars': return portions.container(
				ABCD.classNames.bars,
				block.content.map(bar => portions.bar({ ...bar, children: bar.label })),
			)
			case 'list': return items.list(
				ABCD.classNames.items.list,
				block.content.map(item => items.unit(ABCD.classNames.items.item, item)),
			)
			case 'set': return items.set(
				ABCD.classNames.items.set,
				block.content.map(item => items.unit(ABCD.classNames.items.item, item)),
			)
			default: return ''
		}
	}
}
