// @see https://youtu.be/345V2MU3E_w?si=xsQGabaiJe9VwbeI
// miscellaneous 
// @see https://docs.astro.build/en/guides/images/
// @see https://docs.astro.build/en/guides/images/#image--astroassets
// @see https://youtu.be/hJ7Rg1821Q0?si=vZtPeuE9VXijg9nr
// @see https://medium.com/@abhishekmicosoft/handling-img-fallback-307653b2f30
// @alternative https://vitejs.dev/guide/assets.html
// - 2 img instead of div>img & object>img 
// these 2 would be hard to generally handle CSS-wise

import './Image.css'
import type Properties from './Image.properties'
import Model from './Image.model'
// import { Image } from 'astro:assets' //@see https://docs.astro.build/en/guides/images/ not working

export default (props: Properties) => <img {...new Model(props).properties} />
