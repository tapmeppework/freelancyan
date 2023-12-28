import type Lexicon from '@i18n/Lexicon'
import Thesaurus from '@thesaurus'
import type { ABCD as LexiconTypes } from '@i18n/ABCD.types'
import type Astro from '@layouts/ABCD.types'
import type { Layout } from '@layouts/ABCD.types'
import ABCD from './ABCD'
import type { Data } from './ABCD.types'
import Utils from './Utils'
import Bootstrap from './Bootstrap'
import CLASSES from './CLASSES'
import type { Snippet } from './framework'

export default class Admin {
	private static _layout: Layout
	private static _astro: Astro
	private static _thesaurus: Thesaurus
	private static _page: LexiconTypes.Page
	private static scheme = (mode: string) => ({
		mode,
		attributes: {
			[Utils.data(ABCD.keywords.schemes.abcd)]: mode,
			[Bootstrap.data('theme')]: mode,
		},
	})
	private static _data = {
		classes: {
			html: '',
			header: CLASSES.bootstrap.sticky.top,
			main: `
					${CLASSES.bootstrap.margin.top.zyxw}
					${CLASSES.bootstrap.margin.bottom[5]}
				`,
			footer: `${CLASSES.abcd.scrollbar.with} ${CLASSES.bootstrap.visually.hidden}`,
		},
		ids: {
			body: Utils.identifier('body'),
			main: Utils.identifier('main'),
			modal: ABCD.wonder.modal,
		},
		language: ABCD.config.language,
		scheme: this.scheme(ABCD.config.scheme.mode),
		color: ABCD.config.scheme.browser,
		demo: false,
		// page: this.page, CAN NOT be set here without try/catch
	}

	/**
	 * @description this method is used to start the process
	 * @param astro 
	 * @param layout 
	 */
	static readonly start = (astro: Astro, layout: Layout): string => {
		try {
			const path = this.ini(
				astro,
				thesaurus => {
					const page = thesaurus.lexicon.abcd.pages[layout.category][layout.page]
					if (page) return page as LexiconTypes.Page
					else throw new Error("Page unset error.")
				},
				`
				${Utils.umbrella(`category-${layout.category}`)}
				${Utils.umbrella(`page-${layout.page}`)}
			`
			)
			this._layout = layout
			return path
		} catch (error) { //Page unset error
			console.log(error)
			return `/${this._data.language}/${ABCD.keywords._404}` //redirect to the 404 page
		}
	}

	static readonly ini = (
		astro: Astro,
		page: (thesaurus: Thesaurus) => LexiconTypes.Page,
		className: string
	): string => {
		const
			cookies = astro.cookies,
			keywords = ABCD.keywords,
			options = {
				path: '/',
				expires: Utils.date(),
			},
			url = astro.url.pathname.split('/')
		this._astro = astro
		this._page = page(this._thesaurus = new Thesaurus(
			astro.params.language || url[1]
		))
		this._data.demo = url.includes(ABCD.keywords.zyxw)

		if (Utils.isPageVisible(this._page)) {
			this._data.classes.html = className

			const vocabulary = {
				language: (this._data.language = this._thesaurus.lexicon.language).toLowerCase(),
				lexicons: {} as Data,
			}
			this._thesaurus.lexicons.forEach(
				lexicon => vocabulary.lexicons[lexicon.language.toLowerCase()] = lexicon.label
			)
			cookies.set( //the vocabulary is cached here to transmit server side dynamic values to the client
				keywords.vocabulary,
				JSON.stringify(vocabulary),
				options
			)

			// @see https://docs.astro.build/en/guides/server-side-rendering/#cookies
			// the cookie expiry date is updated on the client side
			const scheme = keywords.schemes.abcd
			if (cookies.has(scheme)) this._data.scheme = this.scheme(cookies.get(scheme)?.value as string)

			return ''
		} else return `/${this._data.language}/${keywords._404}` //redirect to the 404 page
		// } else return this._data.demo ? '' : `/${this._data.language}/${keywords._404}` //redirect to the 404 page
	}


	// getter

	static get astro(): Astro { return this._astro }
	static get layout(): Layout { return this._layout }
	static get thesaurus(): Thesaurus { return this._thesaurus }
	static get lexicon(): Lexicon { return this._thesaurus.lexicon }
	static get language(): string { return this._thesaurus.lexicon.language }
	static get page(): LexiconTypes.Page { return this._page }
	static get data() { return this._data }


	// others


	/**
	 * @description This method is a third party wrapper. DO NOT MOVE it to Utils
	 * @param snippet 
	 * @returns 
	 */
	static readonly thirdParty = (snippet: () => Snippet): Snippet => {
		const
			cookies = Admin.astro.cookies,
			key = ABCD.keywords.third.party.key
		// cookies.has(key) && cookies.get(key)
		return cookies.get(key)?.value == ABCD.keywords.third.party.yes && snippet()
	}
}