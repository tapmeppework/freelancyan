import ABCD from '@bloc/ABCD'
import type { Anonymous, Link } from '@bloc/ABCD.types'
import Admin from '@bloc/Admin'
import Bootstrap from '@bloc/Bootstrap'
import Utils from '@bloc/Utils'
import type { Snippet } from '@framework'
import type { ABCD as Lexicon } from '@i18n/ABCD.types'
import { Model } from '@modules/ABCD.model'
import type Properties from './Harmony.properties'

/**
 * 
 */
export default class Harmony extends Model<Properties> {
	readonly id: string
	readonly image: Lexicon.Image
	readonly alt: string

	static readonly slug = 'harmony'
	static readonly dataSetReader = () => Utils.dataset({
		[Bootstrap.keywords.toggle]: Bootstrap.keywords.modal,
		[ABCD.keywords.error]: Admin.lexicon.abcd.harmony.error,
	})

	constructor(properties: Properties) {
		super(properties, { threshold: 1 })
		this.id = properties.id || `${properties.timeframe}--${properties.headline}`.replace(/[\W\s]+/g, '-').toLowerCase()
		this.image = {
			...properties.image,
			src: `${this.abcd.config.assets}/${Admin.layout.page}/${properties.image.src}`
		}
		this.alt = properties.alt || `${properties.timeframe} > ${properties.headline}`
	}

	static readonly harmonise = (slug: string) => {
		return {
			abcd: this.umbrella(this.slug),
			content: `
				${this.umbrella(ABCD.keywords.paragraphs)}
				${this.umbrella(`${slug}-content`)}
				${this.classes.bootstrap.margin.bottom[3]}
				${ABCD.config.full && this.classes.bootstrap.show}
			`,
			reader: `
				${this.classes.abcd.button.primary}
				${this.umbrella(ABCD.keywords.reader)}
			`,
			others: {
				ellipsis: `
					${this.umbrella(ABCD.keywords.ellipsis.tag)}
					${this.classes.abcd.margin.top.negative[3]}
					${this.classes.bootstrap.margin.bottom[3]}
					${ABCD.config.full && this.classes.bootstrap.show}
					${this.classes.bootstrap.display.none}
				`,
				anchor: this.classes.abcd.button.secondary,
				dropdown: `
					${this.classes.abcd.button.secondary}
					${this.classes.bootstrap.rounded.start[0]}
				`,
			},
		}
	}

	static readonly classify = (slug: string) => {
		return {
			segment: `
			${this.umbrella(`${slug}-segments`)}
			${this.classes.bootstrap.margin.top[3]}
		`,
			segments: `
			${this.umbrella(`${slug}-segments`)}
			${this.classes.bootstrap.margin.top.zyxw}
		`,
			paragraph: this.umbrella(`${slug}-paragraph`),
			paragraphs: `
			${this.umbrella(`${slug}-paragraphs`)}
			${this.classes.bootstrap.margin.top.zyxw}
		`,
		}
	}

	static readonly renderBadges = (
		badges: Anonymous<string[]>,
		badge: (className: string, content: Snippet) => Snippet
	): Snippet => {
		if (badges) {
			const
				last = badges.length - 1,
				className = `${this.classes.bootstrap.rounded.pill} ${this.classes.bootstrap.margin.bottom[1]} ${this.classes.bootstrap.padding[2]}`
			return badges.map(
				(content, index) => badge(
					index != last ?
						`${className} ${this.classes.bootstrap.margin.end[1]}` :
						className
					,
					content
				)
			)
		} else return ''
	}

	readonly sanitiseLink = (link: Link): Link => ({
		...link,
		target: link.target || '_blank',
	});
}
