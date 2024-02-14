import ABCD0 from '@bloc/ABCD'
import type { Message, Strippet } from '@bloc/ABCD.types'
import CLASSES from '@bloc/CLASSES'
import type { Snippet } from '@framework'
import type { ABCD, Contact, Gallery, Index, Portfolio, Resume, Services } from './ABCD.types'

export default abstract class Lexicon<Miscellaneous = any> {
	/**
	 * @property {Object} utilities
	 */
	protected static readonly utilities = {
		/**
		 * @property {Object} abcd
		 * @description 
		 */
		abcd: ABCD0,
		/**
		 * @property {Object} assets
		 * @description The functions used to access the assets.
		 */
		// assets: {
		// 	portfolio: (name: string) => `${ABCD0.assets.portfolio}/${name}`,
		// 	resume: (name: string) => `${ABCD0.assets.resume}/${name}`,
		// 	gallery: (name: string) => `${ABCD0.assets.gallery}/${name}`,
		// },
		/**
		 * @property {Object} classes
		 * @description The CSS classes.
		 */
		classes: CLASSES,
		/**
		 * @property {Object} config
		 * @description The configuration object.
		 */
		config: ABCD0.config,
		/**
		 * @property {string} contact
		 * @description The relative URL to the contact page.
		 */
		contact: `./${ABCD0.keywords.contact}`,
		portfolio: `./${ABCD0.keywords.portfolio}`,

		/**
		 * @property {Date} date
		 * @description The current date.
		 */
		date: new Date(),
		/**
		 * @property {Object} modes
		 * @description (1)
		 * 	This is a bugfix to prevent a false positive linting warning when
		 * 	setting the actual mode value.
		 */
		modes: {
			bars: 'bars' as 'bars',
			carousel: 'carousel' as 'carousel',
			columns: 'columns' as 'columns',
			double: 'double' as 'double',
			grid: 'grid' as 'grid',
			list: 'list' as 'list',
			set: 'set' as 'set',
			single: 'single' as 'single',
			timeline: 'timeline' as 'timeline',
			video: 'video' as 'video',
		},

		image: (src: string, width: number, height?: number): ABCD.Image => ({
			src,
			width,
			height
		})
	}


	// ## abstract

	/**
	 * @property {Object} _404
	 * @description 
	 * 	The 404 page not found notification. It uses the [Omit] and the [AND] operators in its structure definition.
	 * 	- [Omit] means everything in 'ABCD.Page' except 'href' must be defined,
	 * 	- [AND] means additionally 'action' must be defined.
	 */
	abstract _404: {
		/**
		 * @property {string} action
		 * @description The 'go to index' button.
		 */
		action: string
	}

	/**
	 * @property {Object} abcd
	 * @description
	 * 	#mandatory
	 * 	This object is used on two or more pages.
	 */
	abstract abcd: {
		/**
		 * @property {Object} harmony
		 * @description This object is used by the grid and the timeline.
		 */
		harmony: {
			/**
			 * @property {Strippet} error
			 * @description This property is used in case the 'read more' button fires an error.
			 */
			error: Strippet
			/**
			 * @property {string} more
			 * @description The 'read more' button label.
			 */
			more: string
			/**
			 * @property {string} more
			 * @description The 'read less' button label.
			 */
			less: string
			/**
			 * @property {string} others
			 * @description 
			 * 	The 'others' button label.
			 * 	This button appears once the number of anchors exceeds the threshold.
			 */
			others: string
			/**
			 * @property {string} processing
			 * @description The 'processing' button label.
			 */
			processing: string
			/**
			 * @property {string} diashow
			 * @description The diashow button label.
			 */
			diashow: string
		}
		/**
		 * @property {Object} navigation
		 * @description This object is used by the navigation.
		 */
		navigation: {
			/**
			 * @property {Object} header
			 * @description This object is used by the navigation at the top.
			 */
			header: {
				/**
				 * @property {string} logo
				 * @description This logo HTML:img:alt value.
				 */
				logo: ABCD.ImageAlt
				/**
				 * @property {string} aria
				 * @description This element:aria-label of the mobile navigation.
				 */
				aria: string
			}
			/**
			 * @property {Object} footer
			 * @description This object is used by the navigation at the bottom.
			 */
			footer: {
				/**
				 * 
				 * @param {Snippet} copy The HTML copyright symbol.
				 * @param {number} year The current year.
				 * @returns {Snippet} An HTML element or a string. 
				 */
				copyright: (copy: Snippet, year: number) => Snippet
			}
			/**
			 * 
			 */
			carousel: {
				previous: string
				next: string
				slide: string
			}
			/**
			 * @property {Object} modal
			 * @description This object is used by the modal.
			 */
			modal: {
				/**
				 * @property {string} close
				 * @description This modal close button aria-label.
				 */
				close: string
				/**
				 * @property {Object} languages
				 * @description The introduction text used on the languages detector modal.
				 */
				languages: {
					headline: Snippet
					body: Snippet
				}
				/**
				 * @property {Object} third.party
				 * @description The introduction text used on the languages detector modal.
				 */
				third: {
					party: {
						headline: Snippet
						body: Snippet
						accept: string
					}
				}
			}

			schemes: ABCD.Schemes

			scroll: {
				top: string
			}
		}
		/**
		 * @property {ABCD.Networks} networks
		 * @description @see ABCD.Networks
		 */
		networks: ABCD.Networks
		/**
		 * @property {ABCD.Pages} pages
		 * @description This object lists the website pages.
		 */
		pages: ABCD.Pages
	}

	/**
	 * @property {Object} contact
	 * @description 
	 * 	#mandatory
	 * 	This object is used on the contact page.
	 */
	abstract contact: {
		/**
		 * @property {Message} message
		 * @description @see Message
		 */
		message: Message
		/**
		 * @property {Object} office
		 * @description The office hours.
		 */
		office?: {
			/**
			 * @property {Snippet} headline
			 * @description The office hours headline.
			 */
			headline: Snippet
			/**
			 * @property {Snippet} content
			 * @description The office hours content.
			 */
			content: Snippet
		}
		/**
		 * @property {string} me
		 * @description The 'about me' headline.
		 */
		me: string
		/**
		 * @property {string} networks
		 * @description The networks headline.
		 */
		networks: string
		/**
		 * @see Contact.Location
		 */
		location?: Contact.Location
	}

	/**
	 * @property {Object} index
	 * @description 
	 * 	#mandatory
	 * 	This object is used on the index page.
	 */
	abstract index: {
		/**
		 * @property {Index.About} about
		 * @description @see Index.About
		 */
		about: Index.About
		/**
		 * @property {Index.Preamble} preamble
		 * @description @see Index.Preamble
		 */
		preamble: Index.Preamble
		/**
		 * @property {Index.Profile} profile
		 * @description @see Index.Profile
		 */
		profile: Index.Profile

		/**
		 * @property {Anonymous<Index.Organisations>} organisations
		 * @description @see Index.Organisations
		 */
		organisations?: Index.Organisations

		/**
		 * @property {Anonymous<Index.Testimonials>} testimonials
		 * @description @see Index.Testimonials
		 */
		testimonials?: Index.Testimonials
	}

	// ## optional

	/**
	 * @property {Object} gallery
	 * @description This object is used on the gallery page.
	 */
	gallery: Gallery.ABCD = {
		columns: 8,
		layout: [],
		diashow: {},
	}

	/**
	 * @property {ABCD.Excerpt} legal
	 * @description This object is used on the legal page.
	 */
	legal: ABCD.Excerpt = []

	/**
	 * @property {Portfolio} portfolio
	 * @description This object is used on the portfolio page.
	 */
	portfolio: Portfolio = {
		headline: '',
		mode: Lexicon.utilities.modes.grid,
		content: [],
	}

	/**
	 * @property {ABCD.Excerpt} legal
	 * @description This object is used on the privacy page.
	 */
	privacy: ABCD.Excerpt = []

	/**
	 * @property {Resume.ABCD} resume
	 * @description This object is used on the resume page.
	 */
	resume: Resume.ABCD = []

	/**
	 * @property {Object} services
	 * @alias Services.ABCD
	 */
	services: Services.ABCD = {
		catalogue: {},
		pricing: {
			headline: '',
			offers: {},
		},
		miscellaneous: {
			more: '',
			message: (service: string) => ({
				subject: '',
				body: '',
			}),
		}
	}

	/**
	 * @property miscellaneous
	 * @description 
	 * 	This property is used to extend the content of the basic- and custom pages.
	 * 	In order to fully take advantage of the IDE intellisense & linting functionalities 
	 * 	of your IDE it is recommended to adjust the 'Miscellaneous' type to your specific needs.
	 * 	By default the type 'Miscellaneous' is equal to `any`.
	 */
	zyxw: Miscellaneous = {} as any

	// ...

	readonly _ = {
		demonstration: 'This is a demo',
	}

	/**
	 * @constructor
	 * @param {string} language The language key. This value is placed in the URLs.
	 * @param {string} label The language label. This value is placed in the HTML elements.
	 */
	constructor(readonly language: string, readonly label: string) { }
}
