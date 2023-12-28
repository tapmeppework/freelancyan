import type Properties from '@modules/ABCD.properties'

export default interface Section extends Properties {
	/**
	 * @description this is simply used to find myself during the development
	 */
	block?: string
}
