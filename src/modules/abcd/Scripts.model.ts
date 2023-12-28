import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js?url'
import wonder from '@bloc/wonder.js?url'
import type { Snippet } from '@framework'
import Model from '@modules/ABCD.model'

export default class Scripts extends Model {
	/**
	 * @description this method is used to dynamically load .js scripts
	 * @see https://docs.astro.build/en/reference/api-reference/#astroglob
	 * @see https://vitejs.dev/guide/features.html#glob-import
	 * @returns 
	 */
	readonly render = (script: (type: string, defer: boolean, src: string) => Snippet): Snippet => {
		const scripts = [
			script('module', true, bootstrap),
			// DO NOT CHANGE the order
			script('module', true, wonder),
		]

		/**
		 * @see https://docs.astro.build/en/reference/configuration-reference
		 * @see https://docs.astro.build/en/reference/integrations-reference/
		 * @deprecated enabling custom logic
		 * 	the block below in the development environment but not after the build;
		 * 	for the time being I do not have valid reason to invest that much effort into making it build compatible;
		 * 	if however the community signals interest for such a functionality, 
		 * 	I will surely take a closer look
		 * @since PM (14.10.2023)
		 */
		// if (ABCD.isDev) {
		// 	try {
		// 		const modules = import.meta.glob('../../theme/bloc/index.js', { as: 'url' })
		// 		scripts.push(Object.keys(modules).length > 0 && script(`/src/theme/bloc/index.js`))
		// 	} catch (error) { }
		// } else {}

		return scripts
	}
}
