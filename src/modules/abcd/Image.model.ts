// import sizeOf from 'image-size' 
// @see https://www.npmjs.com/package/image-size
// @see https://github.com/calipersjs/calipers
import { Model } from '@modules/ABCD.model'
import type Properties from './Image.properties'

/**
 * TODO in the next project, loading=lazy|intersection|background
 * 
 * @see https://youtu.be/345V2MU3E_w?si=xsQGabaiJe9VwbeI
 * @see https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading
 * @see https://imagekit.io/blog/lazy-loading-images-complete-guide/
 */
export default class Image extends Model<Properties> {
	constructor(properties: Properties) {
		super(properties, { loading: 'lazy' })
		this.properties.class = `${this.classes.bootstrap.image.fluid} ${properties.class}`
		this.properties.height = this.properties.height || this.properties.width

		// https://github.com/nodejs/help/issues/2907#issuecomment-757446568
		// console.log(__dirname)

		// const dimensions = sizeOf(`http://localhost:4321/${properties.src}`)
		// console.log(dimensions)
	}
}
