import type { _404, Contact, Grid, HeadlineMode, Metas, Scheme } from './ABCD.types'
// const env = import.meta.env

/**
 * @description 
 * 	this class represents the part of the configuration that can be modified in the 'theme'
 * 	'class' has been chosen over -a simple object and -a JSON script
 * 	- to enable modification with the most minimal effort via extension
 * 	- while enforcing a specific data structure
 */
export default class Config {
	/**
	 * @property {_404} _404
	 * @description @see _404
	 */
	readonly _404: _404 = 'signs'

	/**
	 * @property {string} assets
	 * @description 
	 * 	This property is used to determine the assets directory.
	 * 	It is the public directory in which all standard illustrations should be stored.
	 */
	readonly assets: string = '/assets'

	/**
	 * @see Contact
	 */
	readonly contact: Contact = {}

	/**
	 * @property {boolean} full
	 * @description TRUE deactivates the collapse & modal functionalities it be can be helpful during the content writing.
	 */
	readonly full: boolean = false

	/**
	 * @property {Grid} grid
	 * @description @see Grid
	 */
	readonly grid: Grid = 3

	/**
	 * @property {HeadlineMode} headline
	 * @description This object is used to set the default headline mode.
	 */
	readonly headline: HeadlineMode = 'full'

	/**
	 * @property {string} language
	 * @description This object represents the default language.
	 */
	readonly language: string = 'en'

	/**
	 * @see Metas
	 */
	readonly metas: Metas = {}

	/**
	 * @property theme
	 * @description This property is used to specify the colors of the web page.
	 */
	readonly scheme: Scheme.Layout = {
		mode: 'auto',
		browser: '#172328', //blueish navy
	}

	/**
	 * @property {boolean} scroll
	 * @description 
	 * 	This object is used to determine the functionality that should be provided for overflowing texts.
	 * 	TRUE for the 'More'-button and the scrollbar, FALSE for the 'More'-button ONLY.
	 */
	readonly scroll: boolean = false

	/**
	 * @property {Anonymous<boolean>} secondary {false}
	 */
	readonly secondary: { full: boolean, aside: boolean } = {
		/**
		 * @description TRUE if the secondary buttons should be full.
		 */
		full: false,
		/**
		 * @description TRUE if the secondary color should be used for the navigation buttons in the <main>.
		 */
		aside: false,
	}

	/**
	 * @property site
	 * @description This property is used during the build process to generate the sitemap files.
	 * @see https://docs.astro.build/en/reference/configuration-reference/#site
	 */
	readonly site: string = 'https://tapmeppe.work/'

	/**
	 * @property third.party
	 * @description TRUE if there is a third party. E.g. google analytics.
	 */
	readonly third = {
		party: false
	}
}
