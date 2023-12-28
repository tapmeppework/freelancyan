import ABCD from '@bloc/ABCD'
import type { Data, Networks } from '@bloc/ABCD.types'
import Admin from '@bloc/Admin'
import CLASSES from '@bloc/CLASSES'
import Utils from '@bloc/Utils'
import type { Properties as _Properties, Snippet } from '@framework'
import type { ABCD as Lexicon } from '@i18n/ABCD.types'

/**
 * 
 */
export default abstract class Model0 {
	// static readonly slug: string
	static isDev = import.meta.env.DEV //CAN NOT be placed in @bloc because of webpack
	static readonly abcd = ABCD
	readonly abcd = ABCD
	static readonly classes = CLASSES
	readonly classes = CLASSES
	static readonly proportion = ABCD.proportion
	readonly proportion = ABCD.proportion


	get lexicon() { return Admin.lexicon }

	/**
	 * 
	 * @returns Snippet
	 */
	readonly renderNetworks = (
		networks: Networks,
		anchor: (className: string, network: Lexicon.Network, icon: Snippet) => Snippet,
		classNames: { primary: string, secondary: string, icon?: string } //DO NOT REMOVE
	): Snippet => {
		const lexicon = this.lexicon
		return Object
			.keys(lexicon.abcd.networks)
			.filter(key => (lexicon.abcd.networks[key as keyof Lexicon.Networks] as Lexicon.Network).href)
			.map((key, index) => {
				const
					network = lexicon.abcd.networks[key as keyof Lexicon.Networks] as Lexicon.Network,
					others = networks[key]
				if (!network.label) network.label = others?.[0]
				if (!network.title) network.title = others?.[0]

				return anchor(
					index == 0 ? classNames.primary : classNames.secondary,
					network,
					others?.[1](classNames.icon)
				)
			})
	}

	protected static umbrella = Utils.umbrella
	protected static identifier = Utils.identifier

	protected readonly pageHref = (page: Lexicon.PageAnonymous, key: string) => {
		if (page && page.href) {
			const href = page.href.trim()
			if (href) return href.replace(/^\//, '')
		}
		// DO NOT MERGE
		return key
	}
}

export abstract class Model<Properties extends _Properties = _Properties> extends Model0 {
	readonly properties: Properties
	// readonly children?: Snippet

	constructor(properties: Properties, basic: Data<any> = {}) {
		super()
		this.properties = { ...basic, ...properties }
	}

	readonly renderParagraphs = (
		className: string,
		paragraph: (className: string, content: Snippet) => Snippet,
		content: Snippet = this.properties.children,
	) => Array.isArray(content) ?
			content.map(content => content && paragraph(className, content)) :
			content && paragraph(className, content)
}
