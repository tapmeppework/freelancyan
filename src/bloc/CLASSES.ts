import ABCD from './ABCD'
import Bootstrap from './Bootstrap'
import Utils from './Utils'

const
	bootstrap = Bootstrap.classes,
	abcd = {
		aspect: {
			ratio: {
				1: Utils.umbrella('aspect-ratio-1'),
			},
		},
		button: {
			primary: `${bootstrap.button.abcd} ${bootstrap.button.primary}`,
			secondary: `
				${bootstrap.button.abcd} 
				${ABCD.config.secondary.full ? bootstrap.button.secondary : bootstrap.button.outline.secondary}
			`,
		},
		display: {
			flex: {
				center: `
					${bootstrap.display.flex}
					${bootstrap.justify.content.center}
					${bootstrap.align.items.center}
				`,
			}
		},
		line: {
			center: `
				${bootstrap.margin.start.auto}
				${bootstrap.margin.end.auto}
			`,
		},
		negative: Utils.umbrella('margin-top-negative'),
		opacity: Utils.umbrella('font-opacity'),
		paragraph: Utils.umbrella('paragraph'),
	}

/**
 * @description this object is used to map the CSS used in the entire project
 */
export default Object.freeze({
	abcd: {
		...abcd,
		active: Utils.umbrella('active'),
		demonstration: `
			${Utils.umbrella(ABCD.keywords.demonstration)}
			${bootstrap.alert.abcd}
			${bootstrap.alert.danger}
			${bootstrap.position.fixed}
			${bootstrap.margin.zyxw}
			${bootstrap.top[0]}
			${bootstrap.start[0]}
		`,
		button: {
			...abcd.button,
			aside: `
				${ABCD.config.secondary.aside ? abcd.button.secondary : abcd.button.primary}
				${abcd.display.flex.center}
				${abcd.aspect.ratio[1]}
				${bootstrap.font.size[3]}
				${bootstrap.rounded.circle}
				${bootstrap.button.abcd}
			`,
		},
		container: Utils.umbrella('container'),
		diashow: {
			abcd: Utils.umbrella(ABCD.keywords.diashow),
		},
		disabled: {
			abcd: `${bootstrap.text.muted} ${bootstrap.pointer.events.none}`,
			light: bootstrap.text.muted,
		},
		flip: {
			horizontal: Utils.umbrella('flip-horizontal'),
		},
		font: {
			opacity: {
				25: `${abcd.opacity}-25`,
				50: `${abcd.opacity}-50`,
				75: `${abcd.opacity}-75`,
			},
			size: {
				...bootstrap.font.size,
				7: Utils.umbrella('font-size-7'),
				8: Utils.umbrella('font-size-8'),
			},
		},
		gradient: {
			background: Utils.umbrella('gradient-background'),
			text: Utils.umbrella('gradient-text'),
		},
		harmony: {
			scroll: `${Utils.umbrella('harmony-scroll')} ${bootstrap.padding.end[2]}`,
		},
		headline: {
			abcd: `
				${abcd.line.center}
				${bootstrap.text.nowrap}
			`,
			zyxw: `
				${abcd.line.center}
				${bootstrap.text.nowrap}
				${bootstrap.margin.bottom.zyxw}
			`,
		},
		image: {
			profile: `
				${Utils.umbrella('image-profile')}
				${bootstrap.border.abcd}
				${bootstrap.border.primary}
				${bootstrap.width[100]}
			`,
		},
		line: {
			center: abcd.line.center,
			height: {
				...bootstrap.line.height,
				0: Utils.umbrella('line-height-0'),
			}
		},
		loader: {
			abcd: Utils.umbrella('loader'),
			large: Utils.umbrella('loader-large'),
		},
		margin: {
			top: {
				...bootstrap.margin.top,
				negative: {
					1: `${abcd.negative}-1`,
					2: `${abcd.negative}-2`,
					3: `${abcd.negative}-3`,
					4: `${abcd.negative}-4`,
				},
			},
		},
		mask: {
			abcd: Utils.umbrella('mask'),
			full: Utils.umbrella('mask-full'),
		},
		modal: {
			abcd: Utils.umbrella('modal'),
			content: Utils.umbrella('modal-content'),
			title: Utils.umbrella('modal-title'),
		},
		paragraph: {
			abcd: abcd.paragraph,
			center: `${abcd.paragraph} ${abcd.paragraph}-small ${abcd.line.center}`,
			light: `${bootstrap.font.size[5]} ${bootstrap.text.center}`,
			// light: `${bootstrap.font.size[5]} ${bootstrap.font.weight.light} ${bootstrap.text.center}`,
		},
		pointer: {
			...bootstrap.pointer,
			abcd: Utils.umbrella('pointer'),
		},
		ready: Utils.umbrella('ready'),
		rounded: Utils.umbrella('rounded'),
		scrollbar: {
			with: bootstrap.sticky.medium.bottom,
			without: bootstrap.fixed.bottom,
		},
		text: {
			...bootstrap.text,
			justify: Utils.umbrella('text-justify'),
		},
		todo: Utils.umbrella('todo'),
		tooltip: {
			abcd: Utils.umbrella(Bootstrap.keywords.tooltip),
			// processed: Utils.umbrella(`${Bootstrap.keywords.tooltip}-processed`),
		},
		width: {
			content: Utils.umbrella('width-content'),
		},
	},
	bootstrap,
})
