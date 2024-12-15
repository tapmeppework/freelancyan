import ABCD from '@bloc/ABCD'
import type { Data } from '@bloc/ABCD.types'
import Admin from '@bloc/Admin'
import { Model } from '@modules/ABCD.model'
import type { Snippet } from '@framework'
import type Properties from './Metas.properties'
import type { Resolver, Defaults, Type } from './Metas.properties'

/**
 * 
 */
export default class Metas extends Model<Properties> {
	/**
	 * 
	 * @param meta 
	 * @returns 
	 */
	readonly render = (
		link: (rel: string, href: string, others: Data) => Snippet,
		meta: Resolver
	): Snippet => {
		const
			snippets: Snippet[] = [],
			contact = ABCD.config.contact,
			_author = `${this.properties.title}, ${contact.email || contact.phone || contact.sms || contact.whatsapp}`,
			author = () => _author,
			description = this.properties.page.description?.trim().replace(/\s+/g, ' ') || '',
			defaults: Defaults = {
				names: {
					author,
					description: () => description,
					keywords: () => 'tapmeppe, t@pm3pp3, tapmeppework, t@pm3pp3 w0rk, founder, freelancer, technical consultant, fullstack, backend, frontend',
					robots: () => 'index, follow',
					'theme-color': () => this.properties.color,
					viewport: () => 'width=device-width, initial-scale=1',
				},
				properties: {
					'article:author': author,
					'og:author': author,
					'og:description': () => description,
					'og:image': () => ABCD.assets.logo.header,
					'og:image:type': () => ABCD.assets.logo.type,
					'og:locale': () => this.properties.language,
					'og:title': () => `${this.properties.title}: ${this.properties.page.headline}`,
					'og:type': () => 'website',
					'og:url': () => this.properties.astro.url.href,
					'twitter:author': author,
					'twitter:description': () => description,
					'twitter:image': () => ABCD.assets.logo.header,
					'twitter:title': () => `${this.properties.title}: ${this.properties.page.headline}`,
				},
			}

		snippets.push(
			link('canonical', this.properties.astro.url.href, {}),
			link('icon', ABCD.assets.logo.header, { type: ABCD.assets.logo.type }),
			link('apple-touch-icon', ABCD.assets.logo.header, { type: ABCD.assets.logo.type }),
			...Admin.thesaurus.map(
				lexicon => link(
					'alternate',
					this.properties.astro.url.href.replace(
						new RegExp(`/${this.properties.language}(/|$)`),
						`/${lexicon.language}$1`
					),
					{ hreflang: lexicon.language }
				)
			)
		);

		(['names', 'properties'] as Type[]).forEach(type => {
			this.renderDefaults(snippets, defaults, type, meta)
			this.renderPage(snippets, type, meta)
			this.renderConfig(snippets, type, meta)
		})

		return snippets
	}

	/**
	 * @description 
	 * 	First the default metas are added to the list of snippets.
	 * 	They can be overwritten at the page level (prio 1) or at the configuration level (prio 2).
	 * @param {Snippet[]} snippets The list of snippets.
	 * @param {Defaults} defaults s.e.
	 * @param {keyof Defaults} type s.e.
	 * @param {Resolver} meta The meta snippet resolver.
	 */
	private renderDefaults = (snippets: Snippet[], defaults: Defaults, type: Type, meta: Resolver) => {
		snippets.push(...Object
			.keys(defaults[type])
			.map(key => {
				const content = this.properties.page.metas?.[type]?.[key] || ABCD.config.metas[type]?.[key] || defaults[type][key]()
				delete this.properties.page.metas?.[type]?.[key]
				delete ABCD.config.metas[type]?.[key]
				return meta[type](key, content)
			})
		)
	}

	/**
	 * @description Second the page specific meta are added to the list of snippets.
	 * @param {Snippet[]} snippets The list of snippets.
	 * @param {keyof Defaults} type s.e.
	 * @param {Resolver} meta The meta snippet resolver.
	 */
	private renderPage = (snippets: Snippet[], type: Type, meta: Resolver) => {
		if (this.properties.page.metas?.[type]) {
			const metas = this.properties.page.metas[type] as Data
			snippets.push(...Object
				.keys(metas)
				.map(key => {
					delete ABCD.config.metas[type]?.[key]
					return meta[type](key, metas[key])
				})
			)
		}
	}

	/**
	 * @description Finally the remaining configuration meta are added to the list of snippets.
	 * @param {Snippet[]} snippets The list of snippets.
	 * @param {keyof Defaults} type s.e.
	 * @param {Resolver} meta The meta snippet resolver.
	 */
	private renderConfig = (snippets: Snippet[], type: Type, meta: Resolver) => {
		if (ABCD.config.metas[type]) {
			const metas = ABCD.config.metas[type] as Data
			snippets.push(...Object
				.keys(metas)
				.map(key => meta[type](key, metas[key]))
			)
		}
	}
}