import type Properties from '@modules/ABCD.properties'

export default interface P extends Properties {
	mode?: Mode
}

export type Mode = 'basic' | 'center' | 'light'
