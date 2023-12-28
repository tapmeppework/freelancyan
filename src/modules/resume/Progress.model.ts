import type { Strimber } from '@bloc/ABCD.types'
import type { Snippet } from '@framework'
import { Model } from '@modules/ABCD.model'
import type Properties from './Progress.properties'

export default class Progress extends Model<Properties> {
	static readonly slug = 'progress'
	static readonly classNames = {
		abcd: `
			${this.umbrella(this.slug)} 
			${this.classes.bootstrap.position.relative} 
			${this.classes.bootstrap.margin.y[1]} 
			${this.classes.bootstrap.padding.y[3]}
			${this.classes.bootstrap.overflow.hidden}
		`,
		stacked: `${this.umbrella('stacked')} ${this.classes.bootstrap.progress.stacked}`,
		outer: this.classes.bootstrap.progress.abcd,
		offset: `${this.umbrella('offset')} ${this.classes.bootstrap.progress.bar.abcd} ${this.classes.bootstrap.background.transparent}`,
		rate: `
			${this.classes.bootstrap.progress.bar.abcd} 
			${this.classes.bootstrap.progress.bar.striped}
			${this.classes.bootstrap.padding.x[2]}
		`,
		label: `
			${this.classes.abcd.text.truncate} 
			${this.classes.bootstrap.display.block}
		`,
		legend: `
			${this.umbrella('legend')} 
			${this.classes.abcd.font.size[8]}
			${this.classes.abcd.font.opacity[50]}
			${this.classes.bootstrap.position.absolute} 
			${this.classes.bootstrap.bottom[0]} 
			${this.classes.bootstrap.translate.middle.x}
		`,
	}

	readonly render = (skeleton: (
		classAnimated: string,
		limit: { min: Strimber, max: Strimber, },
		offset: { now: number, label: string },
		rate: { now: number, legend: number, label: string },
	) => Snippet) => {
		const
			ratio = 100,
			min = this.properties.min || { value: 0 },
			offset = this.properties.offset || min,
			max = this.properties.max || { value: min.value + ratio },
			rate = this.properties.rate || max,
			range = max.value - min.value

		return skeleton(
			this.properties.animated ? this.classes.bootstrap.progress.bar.animated : '',
			{
				min: min.label || min.value,
				max: max.label || max.value,
			},
			{
				now: (offset.value - min.value) * ratio / range,
				label: `${offset.label || offset.value}`,
			},
			{
				now: (rate.value - offset.value) * ratio / range,
				legend: (rate.value - min.value) * ratio / range,
				label: `${rate.label || rate.value}`,
			},
		)
	}
}
