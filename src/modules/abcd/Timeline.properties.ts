import type Properties from '@modules/ABCD.properties'
import type Harmony from './Harmony.properties'

export default interface Timeline extends Properties {
	steps: Harmony[]
}

export type Align = 'inherit' | 'justify' | 'justify-large'
