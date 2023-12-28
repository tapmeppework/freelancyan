import type { Snippet } from '@framework'
import type { ABCD } from '@i18n/ABCD.types'
import P from './P'
import Timeline from './Timeline'
import Grid from './Grid'

export default {
	portions: {
		container: (className: string, content: Snippet) => <div class={className}>{content}</div>,
		paragraph: (className: string, paragraph: Snippet) => <P class={className}>{paragraph}</P>,
	},
	assortments: {
		timeline: (steps: ABCD.Block.Entity[]) => <Timeline steps={steps} />,
		grid: (cards: ABCD.Block.Entity[]) => <Grid cards={cards} />,
	},
}
