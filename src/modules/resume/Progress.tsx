import Utils from '@bloc/Utils'
import './Progress.css'
import type Properties from './Progress.properties'
import Model from './Progress.model'

export default (props: Properties) => {
	const model = new Model(props)

	return new Model(props).render((
		classAnimated,
		limit,
		offset,
		rate
	) => <div
		class={Model.classNames.abcd}
		{...Utils.dataset(limit)}
	>
			<div class={Model.classNames.stacked}>
				<div
					class={Model.classNames.outer}
					role="progressbar"
					aria-label=""
					aria-valuenow={offset.now} aria-valuemin={limit.min} aria-valuemax={limit.max}
					style={`width: ${offset.now}%`}
					{...Utils.dataset({ label: offset.label })}
				>
					<div class={Model.classNames.offset}></div>
				</div>
				<div
					class={Model.classNames.outer}
					role="progressbar"
					aria-label={rate.label}
					aria-valuenow={rate.now} aria-valuemin={limit.min} aria-valuemax={limit.max}
					style={`width: ${rate.now}%`}
					{...Utils.dataset({ label: rate.label })}
				>
					<div class={`${Model.classNames.rate} ${classAnimated}`} title={props.title}>
						<div class={Model.classNames.label}>
							{props.children}
						</div>
					</div>
				</div>
			</div>
			<span class={Model.classNames.legend} style={`left: ${offset.now}%`}>{offset.label}</span>
			<span class={Model.classNames.legend} style={`left: ${rate.legend}%`}>{rate.label}</span>
		</div>)
}
