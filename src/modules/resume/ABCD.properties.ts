import type { Snippet } from '@framework'
import type { Resume } from '@i18n/ABCD.types'
// import type Properties from '@modules/ABCD.properties'
import type { Portions as _Portions } from '@abcd/Harmony.properties'
import type Progress from '@abcd/Progress.properties'

export type Portions = _Portions & {
	bar: (progress: Progress) => Snippet,
}
