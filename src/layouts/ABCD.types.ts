import type { Anonymous } from '@bloc/ABCD.types'
import type { ABCD } from '@i18n/ABCD.types'
import type { AstroCookies } from 'astro'

/**
 * @description this interface is used to design the 'Astro' property
 */
export default interface Astro {
	params: { language: Anonymous<string> }
	props: { identifier: string }
	url: URL
	generator: string
	cookies: AstroCookies
	// redirect: (target: string) => void //@see https://docs.astro.build/en/core-concepts/routing/#dynamic-redirects
}

/**
 * @see https://youtu.be/9i38FPugxB8?si=Bahj6GsLvoo9mId7
 */
export type Layout =
	{ category: 'header', page: keyof ABCD.Header } |
	{ category: 'footer', page: keyof ABCD.Footer } |
	{ category: 'phantom', page: keyof ABCD.Phantom }
