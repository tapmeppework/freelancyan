import type { Data } from '@bloc/ABCD.types'
import type { Snippet } from '@framework'
import type { ABCD } from '@i18n/ABCD.types'
import type Astro from '@layouts/ABCD.types'
import type Properties from '@modules/ABCD.properties'

export default interface Metas extends Properties {
	language: string
	title?: string
	page: ABCD.Page
	/**
	 * @description The browser navigation color on mobile devices.
	 */
	color: string
	astro: Astro
}

export type Defaults = {
	names: Data<() => string>,
	properties: Data<() => string>
}

export type Type = keyof Defaults

export type Resolver = {
	names: (name: string, content: string) => Snippet,
	properties: (property: string, content: string) => Snippet,
}