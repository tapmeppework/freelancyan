import ABCD from '@bloc/ABCD'
import type { Data, HeadlineMode } from '@bloc/ABCD.types'
import Admin from '@bloc/Admin'
import type { Snippet } from '@framework'
import type { ABCD as ABCD1 } from '@i18n/ABCD.types'
import { Model } from '@modules/ABCD.model'
import type Properties from './Headline.properties'
import type { H as PropertiesH, Size } from './Headline.properties'

export default class Headline extends Model<Properties> {
	static readonly slug = 'headline'
	readonly classNames = {
		section: `
			${Headline.umbrella(Headline.slug)}
			${this.classes.bootstrap.text.center}
			${this.classes.bootstrap.padding.top[0]}
			${this.properties.class}
		`,
	}
	private readonly page: ABCD1.Page
	private readonly center: boolean

	constructor(properties: Properties) {
		super(properties, { mode: ABCD.config.headline })

		const mode = properties.mode as HeadlineMode
		this.page = Admin.page
		switch (mode) {
			case 'center':
				this.center = true
				break;
			case 'full':
				this.center = false
				break;
			default:
				this.center = this.page.preamble != undefined && this.page.preamble.toString().length <= mode
				break;
		}
	}

	readonly render = (
		head: (headline: Snippet) => Snippet,
		paragraph: (center: boolean, preamble: Snippet) => Snippet,
	): Snippet => [
			head(this.page.headline),
			this.page.preamble && paragraph(this.center, this.page.preamble),
		]
}

export class H extends Model<PropertiesH> {
	readonly attributes: Data<any>
	static readonly classNames = {

	}

	constructor(properties: PropertiesH, size: Size) {
		super(properties, { size })

		this.attributes = {
			class: `
				${this.classes.abcd.gradient.text} 
				${this.classes.abcd.width.content} 
				${this.classes.bootstrap.display.block} 
				${this.classes.bootstrap.text.truncate} 
				${this.classes.bootstrap.font.weight.bolder}
				${this.classes.bootstrap.font.size[properties.size || size]} 
				${properties.class || Model.classes.abcd.headline.zyxw}
			`,
			title: properties.title || properties.children,
		}
	}
}
