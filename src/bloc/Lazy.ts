/**
 * @deprecated Astro has an island approach by default when it comes to client side logic.
 * @description this class is used to lazily declare variables
 * 							it was inspired by the 'lazy' declaration type used in Scala: https://www.baeldung.com/scala/lazy-val
 */
export default class Lazy<DataType> {
	private _value?: DataType

	/**
	 * 
	 * @param getValue the anonymous function used to retrieve the value
	 */
	constructor(private getValue: () => DataType) { }
	
	get value(): DataType { return this._value ||= this.getValue() }
}
