import type { Data } from './ABCD.types'

type Resolver<Information> = (information: Information) => void
type Failure = (error: any) => void
type Listeners<Information> = { resolver: Resolver<Information>, failure?: Failure }
type Type = ''

/**
 * @classdesc Observer
 * @description This class is my interpretation of the observer pattern
 */
export default class Observer {
	private static readonly listeners: Data<Data<Listeners<any>>> = {}
	private static readonly information: Data<any> = {}



	/**
	 * @description This method is used to add a listener from the listeners list.
	 * @param {Type} type The listener type.
	 * @param {Resolver} resolver The listener resolver.
	 * @param {Failure | undefined} failure The listener error handler.
	 * @returns {string} The listener identifier.
	 */
	static readonly subscribe = <Information>(
		type: Type,
		resolver: Resolver<Information>,
		failure?: Failure,
	) => {
		this.listeners[type] ||= {} //set if not exists
		const identifier = Buffer.from(resolver.toString()).toString('base64')
		this.listeners[type][identifier] = { resolver, failure }

		if (this.information[type]) {
			try { resolver(this.information[type] as Information) } //sandbox
			catch (error) { if (failure) failure(error) }
		}

		return identifier
	}

	/**
	 * @description This method is used to remove a listener from the listeners list.
	 * @param {Type} type The listener type.
	 * @param {Resolver} resolver The listener resolver. This one MUST be identical to the one used during the subscription.
	 * @returns {boolean} TRUE if the listener is no longer available in the list, otherwise FALSE.
	 */
	static readonly unsubscribe = <Information>(type: Type, resolver: Resolver<Information>) => this.remove(
		type,
		Buffer.from(resolver.toString()).toString('base64')
	)

	/**
	 * @description This method is used to remove a listener from the listeners list.
	 * @param {Type} type The listener type.
	 * @param {string} identifier The listener identifier. It is generated during the subscription.
	 * @returns {boolean} TRUE if the listener is no longer available in the list, otherwise FALSE.
	 */
	static readonly remove = (type: Type, identifier: string) =>
		!(type in this.listeners) || !(identifier in this.listeners[type]) || delete this.listeners[type][identifier]

	/**
	 * @description This method is used to update the listeners with the new information.
	 * @param {Type} type The listener type.
	 * @param {Information} information The new information.
	 */
	static readonly update = <Information>(type: Type, information: Information) => {
		this.information[type] = information
		if (this.listeners[type]) Object.values<Listeners<Information>>(this.listeners[type]).forEach(({ resolver, failure }) => {
			try { resolver(information) } //sandbox
			catch (error) { if (failure) failure(error) }
		})
	}
}
