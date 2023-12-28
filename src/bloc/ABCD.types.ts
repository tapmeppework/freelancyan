import type { Snippet } from '@framework'

/**
 * @typedef _404
 * @description The _404 illustration type.
 */
export type _404 = 'ban' | 'barrier' | 'exclamation' | 'question' | 'signs' | Snippet

export type Anonymous<Type> = Type | undefined

export type Stroolean = 'true' | 'false'
export type Binoolean = '1' | '0' | 1 | 0

/**
 * @typedef Contact
 * @description This object is used to describe the individual behind the project.
 */
export type Contact = {
	/**
	 * @property {Anonymous<string>} business
	 * @description 
	 * 	It could be either your company name or your project name or your name,
	 * 	if you are a freelancer with no company.
	 */
	business?: string
	/**
	 * @property {Anonymous<string>} name
	 * @description Your name.
	 */
	name?: string
	/**
	 * @property {Anonymous<string>} address
	 * @description Your physical address or 'remote'.
	 */
	address?: string
	/**
	 * @property {Anonymous<string>} email
	 * @description Your email address.
	 */
	email?: string
	/**
	 * @property {Anonymous<string>} phone
	 * @description Your phone number.
	 */
	phone?: string
	/**
	 * @property {Anonymous<string>} sms
	 * @description Your sms number.
	 */
	sms?: string
	/**
	 * @property {Anonymous<string>} number
	 * @description 
	 * 	Your whatsapp number.
	 *  To create the URL the algorithm automatically replaces the '+' sign at the beginning by '00'
	 * 	and removes all non numbers. The label on the other hand remains untouched.
	 * 	So please test your number before moving to the next task.
	 * @see https://faq.whatsapp.com/5913398998672934
	 */
	whatsapp?: string
}

export type ContactKey = keyof Contact

export type Data<Value = string> = { [key: string]: Value }

export type Dimensions = {
	width?: number
	height?: number
}

/**
 * @typedef Grid
 * @description This object is used to determine the maximal amount of the columns in the grids.
 * @default 3
 */
export type Grid = 1 | 2 | 3

/**
 * @typedef HeadlineMode
 * @description 
 * 	This object is used to describe the headline mode.
 * 	- 'full' for 2 columns (default).
 * 	- 'center' for 1 column in the middle.
 * 	- _number_ for the automatic threshold between center & full as following: center <= _threshold_ < full .
 */
export type HeadlineMode = 'full' | 'center' | number

export type Link = {
	/**
	 * @property {string} href
	 * @description a[href]
	 */
	href: string
	/**
	 * @property {string} string
	 * @description The anchor label. It should be used to overwrite the default spelling.
	 */
	label: string
	/**
	 * @property {Anonymous<Strippet>} title
	 * @description a[title]. It should be used to provide additional information.
	 */
	title?: Strippet
	/**
	 * @property {Anonymous<string>} target
	 * @description a[target].
	 */
	target?: '_blank' | '_self'
	class?: string
}

/**
 * @typedef Message
 * @description This object is used to determine the content of the message to be proposed.
 */
export type Message = {
	/**
	 * @property {string} subject
	 * @description The email subject.
	 */
	subject: string
	/**
	 * @property {string} body
	 * @description The email body.
	 */
	body: string
}

/**
 * @typedef Metas
 * @description This type is used describe the meta elements that should be included in the HTML tree.
 */
export type Metas = {
	/**
	 * implicitly set: author, description, robots, theme-color, viewport
	 * recommended: keywords
	 */
	names?: Data

	/**
	 * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
	 * 
	 * article:
	 * implicitly set: author
	 * nice to have: published_time, modified_time
	 * 
	 * og:
	 * implicitly set: author, description, locale, title, type, url
	 * recommended: image, image:alt, image:type
	 * nice to have: image:height, image:width
	 * 
	 * twitter:
	 * implicitly set: author, description, title
	 * recommended: card, image, image:alt
	 * nice to have: creator, creator:id
	 */
	properties?: Data
}

/**
 * @type Networks
 * @property {Data<[string, callback]>} data [label, renderer]
 */
export type Networks = Data<[string, (className?: string) => Snippet]>

export type Progress = {
	animated?: boolean
	min?: ProgressInfo
	offset?: ProgressInfo
	rate?: ProgressInfo
	max?: ProgressInfo
	title?: string
}
export type ProgressInfo = {
	value: number
	label?: Strimber
}

export type Strimber = string | number

/**
 * @alias
 * @description 
 * 	Strippet =: STRIng + sniPPET
 * 	This property is used to signalise that HTML snippets can be used in a string.
 * @see https://getbootstrap.com/docs/5.3/components/tooltips/#options > name > html
 */
export type Strippet = string

/**
 * @alias
 * @description 
 * 	StringJSON =: String + JSON
 * 	This property is used to signalise that the string should be a valid JSON.
 */
export type StringJSON = string

export namespace Tag {
	export type Container = 'article' | 'div' | 'form' | 'section'
	export type Clickable = 'a' | 'button'
}

export namespace Scheme {
	export type Layout = {
		mode: 'auto' | 'dark' | 'light'
		/**
		 * @description The browser navigation color on mobile devices.
		 */
		browser: string
	}
}
