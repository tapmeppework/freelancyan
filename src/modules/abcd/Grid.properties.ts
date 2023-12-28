import type Properties from '@modules/ABCD.properties'
import type Harmony from './Harmony.properties'

export default interface Grid extends Properties {
	cards: Harmony[]
}
