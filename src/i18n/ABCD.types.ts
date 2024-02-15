import type { Anonymous, Data, Dimensions, HeadlineMode, Link, Message, Metas, Progress, Strippet } from '@bloc/ABCD.types'
import type { Properties, Snippet } from '@framework'

export namespace ABCD {
	/**
	 * @typedef Header
	 * @description This object lists the pages that will be appearing in the navigation at the top of the website.
	 */
	export type Header = {
		/**
		 * @property {Page} index
		 * @description The homepage.
		 */
		index?: Page
		// ...
		/**
		 * @property {Page} gallery
		 * @description
		 * 	They say one picture is worth 1000 words. This page is the right place to prove that.
		 */
		gallery?: Page
		/**
		 * @property {Page} portfolio
		 * @description The page used to showcase your projects.
		 */
		portfolio?: Page
		/**
		 * @property {Page} pricing
		 * @description The page used to showcase your pricing.
		 */
		pricing?: Page
		/**
		 * @property {Page} resume
		 * @description The page used to present your career.
		 */
		resume?: Page
		/**
		 * @property {Page} services
		 * @description The page used to provide the list of services you offer.
		 */
		services?: Page
		/**
		 * @property {Page} team
		 * @description 
		 * 	The page used to provide a list of partners.
		 * 	TODO the team
		 */
		// team: Page
		/**
		 * @property {PageAnonymous} miscellaneous
		 * @description 
		 * 	You can of course add some pages of your own.
		 * 	Do not just forget to adequately set the layout.
		 */
		[key: string]: PageAnonymous
	}

	/**
	 * @typedef Footer
	 * @description This object lists the pages that will be appearing in the navigation at the bottom of the website.
	 */
	export type Footer = {
		/**
		 * @property {Page} contact
		 * @description
		 * 	Once the visitor of your website will be hooked, he will need a way to contact you.
		 * 	This page is reserved for that.
		 */
		contact?: Page
		/**
		 * @property {Page} privacy
		 * @description
		 * 	This page is reserved for your privacy policy.
		 * 	Depending on what you load and were you operate, privacy can be a serious matter.
		 * 	For us in Europe (specifically in Germany) the GDPR is not a laughing matter.
		 */
		privacy?: Page
		/**
		 * @property {Page} legal
		 * @description This page is for the legal claim(s) related to your business.
		 */
		legal?: Page
		/**
		 * @property {PageAnonymous} miscellaneous
		 * @description 
		 * 	You can of course add some pages of your own.
		 * 	Do not just forget to adequately set the layout.
		 */
		[key: string]: PageAnonymous
	}

	/**
	 * @typedef Phantom
	 * @description 
	 * 	This object lists the pages that will be appearing nowhere.
	 * 	They will only be accessible via the URL.
	 */
	export type Phantom = {
		/**
		 * @property {PagePhantom} _404
		 * @description  The 404 page not found notification.
		 */
		_404: PagePhantom
		/**
		 * @property {PagePhantom} tapmeppe
		 * @description The 'tapmeppe' page is used to support the work done by tapmeppe by promoting his business.
		 */
		// tapmeppe?: PagePhantom
		/**
		 * @property {PagePhantom} miscellaneous
		 * @description 
		 * 	You can of course add some pages of your own.
		 * 	Do not just forget to adequately set the layout.
		 */
		[key: string]: PagePhantom
	}

	/**
	 * 
	 */
	export type Pages = {
		/**
		 * @property {Header} header
		 * @description @see Header
		 */
		header: Header
		/**
		 * @property {Footer} footer
		 * @description @see Footer
		 */
		footer: Footer
		/**
		 * @property {Phantom} phantom
		 * @description @see Phantom
		 */
		phantom: Phantom
	}

	/**
	 * 
	 */
	export type Page = {
		/**
		 * @property {Snippet} headline
		 * @description The value of the element placed at the top of the page.
		 */
		headline: Snippet

		/**
		 * @property {Anonymous<string>} href
		 * @description 
		 * 	The value of the property corresponds 
		 *	however I intend to make SEO url in the respectful language based on this information 
		 */
		href?: string

		/**
		 * @property description
		 * @description The value of the meta tags related to the page description.
		 */
		description?: string

		/**
		 * @property {Snippet} preamble
		 * @description
		 * 	The first block.
		 * 	I did not want to use introduction to avoid a potential confusion with the Introduction type.
		 */
		preamble?: Snippet

		/**
		 * @see HeadlineMode
		 */
		mode?: HeadlineMode

		metas?: Metas
	}

	/**
	 * [Omit] means everything in 'Page' except 'href' must be defined.
	 */
	export type PageAnonymous = Anonymous<Page>

	/**
	 * [Omit] means everything in 'Page' except 'href' must be defined.
	 */
	type PagePhantom = Omit<Page, 'href'>

	export type Excerpt = {
		headline: {
			primary?: Snippet
			secondary?: Snippet
			tertiary?: Snippet
		}
		paragraphs: Snippet[]
		full?: boolean
		justify?: boolean
	}[][]

	export namespace Block {
		export type Entity = Properties & {
			/**
			 * @property {Anonymous<string>} id
			 * @description 
			 * 	The block :id. It is useful during cross references.
			 * 	If undefined the timeframe & headline will be used as id.
			 */
			id?: string
			/**
			 * @property {ABCD.Image} image
			 * @description The img path relative to the CONFIG.assets value.
			 */
			image: ABCD.Image
			/**
			 * @property {Anonymous<string>} string
			 * @description 
			 * 	The img:alt
			 * 	If undefined the timeframe & headline will be used as id.
			 */
			alt?: string
			/**
			 * @property {Snippet} headline
			 * @description s.e.
			 */
			headline: Snippet
			/**
			 * @property {Snippet} subline
			 * @description s.e.
			 */
			subline?: Snippet
			/**
			 * @property {Snippet} timeframe
			 * @description The timeframe in which the project took place.
			 */
			timeframe?: Snippet
			/**
			 * @property {Anonymous<string[]>} badges
			 * @description The badges should be used to highlight keywords such as skills.
			 */
			badges?: string[]
			/**
			 * 
			 */
			diashow?: Diashow
			/**
			 * @property {Anonymous<Link[]>} links
			 * @description The links to present at the bottom of the project.
			 */
			links?: Link[]
			/**
			 * @property {Anonymous<number>} threshold
			 * @description 
			 * 	The maximal amount of links to present inline. 
			 * 	If the total amount of links surpasses this threshold,
			 * 	they will be presented in a dropdown.
			 * 	If undefined '1' will be used as threshold.
			 */
			threshold?: number
		}

		/**
		 * @type Harmony
		 * @description 
		 * 	It used the exclusive [OR] operator in its structure definition.
		 * 	This means either the timeline or the grid is defined; not both at the same time.
		 */
		export type Harmony = {
			/**
			 * @property {Snippet} headline
			 * @description The harmonised section headline 
			 */
			headline?: Snippet
		} & (
				{
					/**
					 * @property {'grid' | 'timeline'} mode
					 * @description The harmony mode.
					 */
					mode: 'grid' | 'timeline',
					/**
					 * @property {Entity[]} content
					 * @description The content.
					 */
					content: Entity[],
				} |
				Wild
			)

		/**
		 * @description Almost everything goes for these modes.
		 */
		export type Wild = {
			/**
			 * @property {'segments' | 'paragraphs'} mode
			 * @description The wild modes.
			 */
			mode: 'segments' | 'paragraphs',
			/**
			 * @property {Snippet[]} content
			 * @description The content.
			 */
			content: Snippet[],
		}
	}

	/**
	 * @typedef Network
	 * @description The properties of a given network.
	 */
	export type Network = Omit<Link, 'label'> & {
		/**
		 * @property {Anonymous<string>} string
		 * @description The anchor label. It should be used to overwrite the default spelling.
		 */
		label?: string
		// target > default is '_blank'
	}

	/**
	 * @typedef Networks
	 * @description The networks list.
	 */
	export type Networks = {
		bitbucket?: Network
		discord?: Network
		codepen?: Network
		facebook?: Network
		github?: Network
		gitlab?: Network
		instagram?: Network
		linkedin?: Network
		mastodon?: Network
		medium?: Network
		messenger?: Network
		patreon?: Network
		pinterest?: Network
		quora?: Network
		reddit?: Network
		slack?: Network
		snapchat?: Network
		spotify?: Network
		stackExchange?: Network
		stackOverflow?: Network
		strava?: Network
		telegram?: Network
		twitch?: Network
		twitter?: Network
		whatsapp?: Network
		x?: Network
		xing?: Network
		youtube?: Network
	}

	export type Image = Dimensions & {
		/**
		 * @property {string} src
		 * @description This property is used to set the profile img[src] value.
		 */
		src: string
	}

	export type ImageAlt = Dimensions & {
		/**
		 * @property {string} alt
		 * @description This property is used to set the profile img[alt] value.
		 */
		alt: string
	}

	export type Diashow = Dimensions & (
		{
			mode: 'carousel',
			images: (string | DiashowImage)[]
		} |
		({ mode: 'video' } & DiashowVideo)
	)
	export type DiashowImage = {
		src: string,
		alt?: string
		duration?: number
	}
	export type DiashowVideo = {
		src: string
		alt?: string
	}

	export type Schemes = {
		auto: string
		dark: string
		light: string
	}
}

export namespace Contact {
	export type Location = {
		headline: Snippet
		zoom: number
		error: Strippet
		coordinates?: {
			latitude: number
			longitude: number
		}
		title?: Strippet
	}
}

/**
 * @namespace Gallery
 */
export namespace Gallery {
	export type ABCD = {
		/**
		 * @description 
		 * 	The intended amount of columns.
		 * 	It is solely used during the development to determine the column width
		 */
		columns?: number
		headline?: Snippet
		layout: Layout
		diashow: Data<Diashow>
	}
	export type Layout = string[][]
	export type Diashow = ABCD.Diashow & {
		/**
		 * @property {Snippet} heading
		 * @description self explanatory
		 */
		headline: Snippet
		/**
		 * @property {Strippet} title
		 * @description self explanatory
		 */
		title?: Strippet
	}
}

/**
 * @namespace Index
 * @description This namespace is used to configure the 'index' page.
 */
export namespace Index {
	/**
	 * @property {Object} About
	 * @description This property is used to configure the 'about me' section.
	 */
	export type About = {
		/**
		 * @property {string} headline
		 * @description The 'about me' headline.
		 */
		headline: Snippet
		/**
		 * @property {Anonymous<string>} body
		 * @description The 'about me' body.
		 */
		body?: Snippet
		/**
		 * @property {Anonymous<Strippet>} contact
		 * @description The 'about me' contact html[title].
		 */
		contact?: Strippet
	}
	/**
	 * @property {Object} Preamble
	 * @description 
	 * 	This property is used to configure the 'preamble' section.
	 * 	I did not want to use introduction to avoid a potential confusion with the Introduction type.
	 */
	export type Preamble = {
		/**
		 * @property {Snippet} heading
		 * @description self explanatory
		 */
		headline: Snippet
		/**
		 * @property {Anonymous<Snippet>} badge
		 * @description This property is used to set the badge text.
		 */
		badge?: Snippet
		/**
		 * @property {Anonymous<Snippet[]>} body
		 * @description 
		 * 	This property is used to set the body.
		 * 	It is important to note that in this case the body comes BEFORE the headline.
		 */
		body?: Snippet[]
		/**
		 * @property {Anonymous<Data<ABCD.Page>>} pages
		 * @description The list of the more important pages. I would recommend 2 pages.
		 */
		pages?: Data<ABCD.Page>
	}
	/**
	 * @property {Object} Profile
	 * @alias
	 */
	export type Profile = ABCD.ImageAlt

	/**
	 * @property {Object} Organisations
	 * @description This property is used to configure the 'organisations' section.
	 */
	export type Organisations<List = Organisation> = {
		/**
		 * @property {Snippet} heading
		 * @description self explanatory
		 */
		headline: Snippet
		/**
		 * @property {Snippet} body
		 * @description self explanatory
		 */
		body?: Snippet
		/**
		 * 
		 */
		list: List[]
	}

	export type Organisation<Body = Strippet> = {
		image: ABCD.Image
		/**
		 * @property {Anonymous<string>} alt
		 * @description This property is used to set the profile img[alt] value.
		 */
		alt?: string
		headline: Snippet
		title?: Body
	}

	/**
	 * @property {Object} Testimonials
	 * @description This property is used to configure the 'testimonials' section.
	 */
	export type Testimonials = Organisations<Testimonial>
	export type Testimonial = Organisation<Snippet> & {
		duration?: number
		subline: Snippet
	}
}

/**
 * @alias
 */
export type Portfolio = ABCD.Block.Harmony

/**
 * @namespace Resume
 * @description This namespace is used to configure the 'resume' page.
 */
export namespace Resume {
	/**
	 * @typedef ABCD
	 * @description This type is used to describe the resume.
	 */
	export type ABCD = (
		{
			/**
			 * @property {'single'} mode
			 * @description This property is used to signalise the single or full mode.
			 */
			mode: 'single',
			/**
			 * @property {ABCD.Block.Harmony} full
			 * @description @see ABCD.Block.Harmony
			 */
			full: ABCD.Block.Harmony,
		} |
		{
			/**
			 * @property {'double'} mode
			 * @description This property is used to signalise the double mode.
			 */
			mode: 'double',
			/**
			 * @property {Moderate} left
			 * @description @see Moderate
			 */
			left: Moderate,
			/**
			 * @property {Moderate} left
			 * @description @see Moderate
			 */
			right: Moderate,
		}
	)[]

	/**
	 * @typedef Moderate
	 * @description 
	 */
	export type Moderate = { headline: Snippet } & (
		{
			/**
			 * @property {'bars'} mode
			 * @description This property is used to signalise the bars mode.
			 */
			mode: 'bars',
			/**
			 * @property {(Item & Progress)[]} content
			 * @description This property is used to set the content.
			 */
			content: (Item & Progress)[],
		} |
		{
			/**
			 * @property {'list' | 'set'} mode
			 * @description This property is used to signalise the list or set mode.
			 */
			mode: 'list' | 'set',
			/**
			 * @property {Item[]} content
			 * @description This property is used to set the content.
			 */
			content: Item[],
		} | ABCD.Block.Wild //ordered list | unordered list
	)

	export type Item = {
		label: Snippet
		title?: Strippet
	}
}

/**
 * @namespace Services
 * @description This namespace is used to configure the 'services' page.
 */
export namespace Services {
	/**
	 * @property {Object} ABCD
	 * @description 
	 * 	It used the exclusive [OR] operator in its structure definition.
	 * 	This means either the grid or the columns is defined; not both at the same time
	 */
	export type ABCD = {
		/**
		 * @property {Grid} catalogue
		 * @description @see Grid
		 */
		catalogue: Grid
		pricing: {
			/**
			 * @property {'columns'} mode
			 * @description This property is used to signalise the columns mode.
			 */
			headline?: Snippet
			/**
			 * @property {Columns} catalogue
			 * @description @see Columns
			 */
			strategies: Columns
			flush?: boolean
		}

		/**
		 * @property {Object} miscellaneous
		 * @description ...
		 */
		miscellaneous: {
			/**
			 * @property {string} more
			 * @description The label of the 'learn more' button.
			 */
			more: string
			/**
			 * @property {(service: string) => Message} message
			 * @description The message to be proposed.
			 * @param {string} service The service headline.
			 * @returns {Message} @see Message
			 */
			message: (service: string) => Message
		}
	}

	export type Grid<Segment = Category> = Data<Segment> //DO NOT REMOVE the type parameter
	export type Category = {
		headline: Snippet
		list: Data<Details>
	}
	export type Details = Representative & {
		description: Snippet
	}

	export type Columns<Segment = Column> = Data<Segment>
	export type Column = Representative & {
		highlight?: string
		header?: Snippet
		items: Snippet[]
		footer?: Snippet
	}
	export type Representative = {
		/**
		 * @property illustration
		 * @description an image src as a string or <svg>, <image>, <video>
		 */
		illustration?: string | ((className?: string) => Snippet)
		alt?: string
		headline: Snippet
	}
}
