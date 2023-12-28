import ABCD from './ABCD'
import type { Data, Message, Strimber } from './ABCD.types'
import type { ABCD as Lexicon } from '@i18n/ABCD.types'

/**
 * @description this class is used to provide useful functions
 * @since PM (23.09.2023)
 */
export default class Utils {

	static readonly umbrella = (suffix: string) => `${ABCD.umbrella}-${suffix}`

	/**
	 * this function is used to generate a HTML data attribute
	 * @param suffix 
	 * @param namespace 
	 * @returns 
	 */
	static readonly data =
		(suffix: string, namespace: string = ABCD.umbrella) => `data-${namespace}-${suffix}`

	static readonly date = (days: number = 365): Date => {
		const date = new Date()
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
		return date
	}

	static readonly dataset = (data: Data<Strimber>): Data<Strimber> => {
		const _data: Data<Strimber> = {}
		Object
			.keys(data)
			.forEach(suffix => _data[this.data(suffix)] = data[suffix])
		return _data
	}

	static huh = (term: string) => `?!${term}!?`

	/**
	 * @function identifier
	 * @param {string} prefix s.e.
	 * @returns {string} the random identifier
	 */
	static readonly identifier = (prefix: string): string => {
		//simple security measure
		const key = `${prefix}-${Date.now()}`
		if (key in this.identifierCounters) this.identifierCounters[key]++
		else this.identifierCounters[key] = 1

		return `${key}-${this.identifierCounters[key]}`
	}
	private static identifierCounters: Data<number> = {}



	/**
	 * @description This method is used to determine whether the page can be listed in the navigation or not.
	 * @param {Lexicon.Page} page @see Lexicon.Page
	 * @returns {boolean} TRUE if all conditions are met, otherwise FALSE.
	 */
	static readonly isPageVisible = (page: Lexicon.Page) => page.headline?.toString().trim() != ''

	/**
	 * @description This method is used to create a mailto URL.
	 * @param {string} email The email address.
	 * @param {Message} message The message.
	 * @returns {string} The URL.
	 */
	static readonly mailto = (email: string, message: Message) => [
		`mailto:${email.trim()}?`,
		`subject=${message.subject.trim()}&`,
		// `subject=${encodeURIComponent(message.subject.trim())}&`,
		`body=${message.body.trim()}`,
		// `body=${encodeURIComponent(message.body.trim())}`,
	].join('')

	/**
	 * 
	 * @returns 
	 */
	static readonly scheme = () => ({
		[this.umbrella('scheme-project-browser')]: ABCD.config.scheme.browser,
	})

	/**
	 * @description This method is used to create a sms URL.
	 * @see https://simpletexting.com/blog/how-to-create-a-link-that-sends-an-sms-text-message/
	 * @param {string} number The phone number.
	 * @param {Message} message The message.
	 * @returns {string} The URL.
	 */
	static readonly sms = (number: string, message: Message) => [
		`sms:${number.trim()}?`,
		// `sms:${encodeURIComponent(number.trim())}?`,
		`body=${message.subject.trim()}\n\n${message.body.trim()}`,
		// `body=${encodeURIComponent(`${message.subject.trim()}\n\n${message.body.trim()}`)}`,
	].join('')

	/**
	 * @description This method is used to create a tel URL.
	 * @see https://davidwalsh.name/demo/phone-link-protocol.php
	 * @param {string} number The phone number.
	 * @returns {string} The URL.
	 */
	static readonly tel = (number: string) =>
		`tel:${number.trim()}`
	// `tel:${encodeURIComponent(number.trim())}`

	/**
	 * @description This method is used to create a whatsapp URL.
	 * @see https://faq.whatsapp.com/5913398998672934
	 * @param {string} number The phone number.
	 * @param {Message} message The message.
	 * @returns {string} The URL.
	 */
	static readonly whatsapp = (number: string, message: Message) => [
		`https://wa.me/${number.trim().replace(/^\+/, '00').replace(/\D/g, '')}?`,
		`text=${message.subject.trim()}\n\n${message.body.trim()}`,
		// `text=${encodeURIComponent(`${message.subject.trim()}\n\n${message.body.trim()}`)}`,
	].join('')

	static get year() {
		return new Date().getFullYear()
	}
}