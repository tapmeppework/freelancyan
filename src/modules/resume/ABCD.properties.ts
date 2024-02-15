import type { Snippet } from '@framework'
import type { Portions as _Portions } from '@abcd/Harmony.properties'
import type Progress from './Progress.properties'

export type Portions = _Portions & {
	bar: (progress: Progress) => Snippet,
}
