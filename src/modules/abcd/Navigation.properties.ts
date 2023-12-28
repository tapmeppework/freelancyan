import type { Anonymous } from '@bloc/ABCD.types'

export namespace Navigation {
	export type Position = 'header' | 'footer'
	export type AriaCurrent = Anonymous<'page'>
}
