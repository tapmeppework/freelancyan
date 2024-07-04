import type { Data, Strimber } from './ABCD.types'
import Utils from './Utils'

/**
 * @description this class is used to map the bootstrap framework
 * @see https://getbootstrap.com
 * @since PM (23.09.2023)
 */
export default class Bootstrap {
	static readonly keywords = {
		collapse: 'collapse',
		container: 'container',
		dismiss: 'dismiss',
		dropdown: 'dropdown',
		interval: 'interval',
		modal: 'modal',
		parent: 'parent',
		slide: {
			abcd: 'slide',
			to: 'slide-to',
		},
		target: 'target',
		toggle: 'toggle',
		tooltip: 'tooltip',
	}

	/**
	 * this object lists the bootstrap classes used in the project
	 */
	private static _styles = {
		dropdown: {
			menu: `${this.keywords.dropdown}-menu`,
		},
		zyxw: 4, //zyxw: standard
	}
	static classes = {
		accordion: {
			abcd: 'accordion',
			body: 'accordion-body',
			button: 'accordion-button',
			collapse: 'accordion-collapse',
			flush: 'accordion-flush',
			header: 'accordion-header',
			item: 'accordion-item',
		},
		active: 'active',
		alert: {
			abcd: 'alert',
			danger: 'alert-danger',
		},
		align: {
			items: {
				center: 'align-items-center',
			}
		},
		background: {
			body: {
				primary: 'bg-body-secondary',
				secondary: 'bg-body-secondary',
				tertiary: 'bg-body-tertiary',
			},
			transparent: 'bg-transparent',
		},
		badge: 'badge',
		border: {
			abcd: 'border',
			1: 'border-1',
			2: 'border-2',
			3: 'border-3',
			4: 'border-4',
			5: 'border-5',
			primary: 'border-primary',
			secondary: 'border-secondary',
			start: 'border-start',
		},
		bottom: {
			0: 'bottom-0',
			50: 'bottom-50',
			100: 'bottom-100',
		},
		button: {
			abcd: 'btn',
			close: 'btn-close',
			group: 'btn-group',
			// ...
			primary: 'btn-primary',
			secondary: 'btn-secondary',
			tertiary: 'btn-tertiary',
			// ...
			outline: {
				primary: 'btn-outline-primary',
				secondary: 'btn-outline-secondary',
				tertiary: 'btn-outline-tertiary',
			},
		},
		card: {
			abcd: 'card',
			body: 'card-body',
			footer: 'card-footer',
			header: 'card-header',
			image: {
				top: 'card-img-top',
			},
			text: 'card-text',
			title: 'card-title',
		},
		carousel: {
			abcd: 'carousel',
			control: {
				previous: {
					abcd: 'carousel-control-prev',
					icon: 'carousel-control-prev-icon',
				},
				next: {
					abcd: 'carousel-control-next',
					icon: 'carousel-control-next-icon',
				},
			},
			indicators: 'carousel-indicators',
			inner: 'carousel-inner',
			item: 'carousel-item',
		},
		col: {
			abcd: 'col',
			auto: 'col-auto',
			0: 'col-0',
			1: 'col-1',
			2: 'col-2',
			3: 'col-3',
			4: 'col-4',
			5: 'col-5',
			6: 'col-6',
			7: 'col-7',
			8: 'col-8',
			9: 'col-9',
			10: 'col-10',
			11: 'col-11',
			12: 'col-12',
			// ...
			huge: {
				0: 'col-xl-0',
				1: 'col-xl-1',
				2: 'col-xl-2',
				3: 'col-xl-3',
				4: 'col-xl-4',
				5: 'col-xl-5',
				6: 'col-xl-6',
				7: 'col-xl-7',
				8: 'col-xl-8',
				9: 'col-xl-9',
				10: 'col-xl-10',
				11: 'col-xl-11',
				12: 'col-xl-12',
			},
			enormous: {
				0: 'col-xxl-0',
				1: 'col-xxl-1',
				2: 'col-xxl-2',
				3: 'col-xxl-3',
				4: 'col-xxl-4',
				5: 'col-xxl-5',
				6: 'col-xxl-6',
				7: 'col-xxl-7',
				8: 'col-xxl-8',
				9: 'col-xxl-9',
				10: 'col-xxl-10',
				11: 'col-xxl-11',
				12: 'col-xxl-12',
			},
			large: {
				0: 'col-lg-0',
				1: 'col-lg-1',
				2: 'col-lg-2',
				3: 'col-lg-3',
				4: 'col-lg-4',
				5: 'col-lg-5',
				6: 'col-lg-6',
				7: 'col-lg-7',
				8: 'col-lg-8',
				9: 'col-lg-9',
				10: 'col-lg-10',
				11: 'col-lg-11',
				12: 'col-lg-12',
			},
			medium: {
				0: 'col-md-0',
				1: 'col-md-1',
				2: 'col-md-2',
				3: 'col-md-3',
				4: 'col-md-4',
				5: 'col-md-5',
				6: 'col-md-6',
				7: 'col-md-7',
				8: 'col-md-8',
				9: 'col-md-9',
				10: 'col-md-10',
				11: 'col-md-11',
				12: 'col-md-12',
			},
		},
		collapse: {
			abcd: this.keywords.collapse,
		},
		collapsed: {
			abcd: 'collapsed',
		},
		column: {
			gap: { //@see https://getbootstrap.com/docs/5.3/utilities/spacing/#column-gap
				0: 'column-gap-0',
				1: 'column-gap-1',
				2: 'column-gap-2',
				3: 'column-gap-3',
				4: 'column-gap-4',
				5: 'column-gap-5',
				6: 'column-gap-6',
				zyxw: `column-gap-${this._styles.zyxw}`,
			}
		},
		container: { //@see https://getbootstrap.com/docs/5.3/layout/containers/
			fluid: 'container-fluid',
			large: 'container-lg', //the standard container
		},
		display: {
			block: 'd-block',
			flex: 'd-flex',
			grid: 'd-grid',
			inline: {
				block: 'd-inline-block',
				flex: 'd-inline-flex',
			},
			none: 'd-none',
			// ...
			large: {
				block: 'd-lg-block',
			},
			medium: {
				block: 'd-md-block',
				grid: 'd-md-grid',
				none: 'd-md-none',
			},
			small: {
				block: 'd-sm-block',
				grid: 'd-sm-grid',
				none: 'd-sm-none',
			},
		},
		dropdown: {
			abcd: this.keywords.dropdown,
			item: `${this.keywords.dropdown}-item`,
			menu: {
				abcd: this._styles.dropdown.menu,
				end: `${this._styles.dropdown.menu}-end`,
				//@see https://getbootstrap.com/docs/5.3/components/dropdowns/#responsive-alignment
			},
			toggle: `${this.keywords.dropdown}-${this.keywords.toggle}`,
		},
		dropstart: 'dropstart',
		end: {
			0: 'end-0',
			50: 'end-50',
			100: 'end-100',
		},
		fade: 'fade',
		fixed: {
			bottom: 'fixed-bottom',
			top: 'fixed-top',
		},
		flex: {
			column: 'flex-column',
			row: {
				abcd: 'flex-row',
				reverse: 'flex-row-reverse',
			},
			// ...
			grow: { //@see https://getbootstrap.com/docs/5.3/utilities/flex/#grow-and-shrink
				0: 'flex-grow-0',
				1: 'flex-grow-1',
			},
			shrink: {
				0: 'flex-shrink-0',
				1: 'flex-shrink-1',
			},
			// ...
			small: {
				column: 'flex-sm-column',
				row: 'flex-sm-row',
				// ...
				grow: {
					0: 'flex-sm-grow-0',
					1: 'flex-sm-grow-1',
				},
				shrink: {
					0: 'flex-sm-shrink-0',
					1: 'flex-sm-shrink-1',
				},
			},
			medium: {
				column: 'flex-md-column',
				row: 'flex-md-row',
				// ...
				grow: {
					0: 'flex-md-grow-0',
					1: 'flex-md-grow-1',
				},
				shrink: {
					0: 'flex-md-shrink-0',
					1: 'flex-md-shrink-1',
				},
			},
			wrap: 'flex-wrap',
		},
		font: {
			size: { //@see https://getbootstrap.com/docs/5.3/utilities/text/#font-size
				1: 'fs-1',
				2: 'fs-2',
				3: 'fs-3',
				4: 'fs-4',
				5: 'fs-5',
				6: 'fs-6',
			},
			style: {
				italic: 'fst-italic',
				normal: 'fst-normal',
			},
			weight: { //@see https://getbootstrap.com/docs/5.3/utilities/text/#font-weight-and-italics
				bold: 'fw-bold',
				bolder: 'fw-bolder',
				light: 'fw-light',
				lighter: 'fw-lighter',
				medium: 'fw-medium',
				normal: 'fw-normal',
				semibold: 'fw-semibold',
			},
		},
		gap: { //@see https://getbootstrap.com/docs/5.3/utilities/spacing/#gap; also row-gap, column-gap
			0: 'gap-0',
			1: 'gap-1',
			2: 'gap-2',
			3: 'gap-3',
			4: 'gap-4',
			5: 'gap-5',
			zyxw: `gap-${this._styles.zyxw}`,
		},
		gutter: {
			0: 'g-0',
			1: 'g-1',
			2: 'g-2',
			3: 'g-3',
			4: 'g-4',
			5: 'g-5',
			zyxw: `g-${this._styles.zyxw}`,
			// ...
			large: {
				0: 'g-lg-0',
				1: 'g-lg-1',
				2: 'g-lg-2',
				3: 'g-lg-3',
				4: 'g-lg-4',
				5: 'g-lg-5',
			},
			x: {
				0: 'gx-0',
				1: 'gx-1',
				2: 'gx-2',
				3: 'gx-3',
				4: 'gx-4',
				5: 'gx-5',
				zyxw: `gx-${this._styles.zyxw}`,
				large: {
					0: 'gx-lg-0',
					1: 'gx-lg-1',
					2: 'gx-lg-2',
					3: 'gx-lg-3',
					4: 'gx-lg-4',
					5: 'gx-lg-5',
				},
			},
			y: {
				0: 'gy-0',
				1: 'gy-1',
				2: 'gy-2',
				3: 'gy-3',
				4: 'gy-4',
				5: 'gy-5',
				zyxw: `gy-${this._styles.zyxw}`,
				large: {
					0: 'gy-lg-0',
					1: 'gy-lg-1',
					2: 'gy-lg-2',
					3: 'gy-lg-3',
					4: 'gy-lg-4',
					5: 'gy-lg-5',
					zyxw: `gy-lg-${this._styles.zyxw}`,
				},
			},
		},
		grid: {
			abcd: 'grid',
		},
		head: {
			1: 'h1',
			2: 'h2',
			3: 'h3',
			4: 'h4',
			5: 'h5',
			6: 'h6',
		},
		height: {
			100: 'h-100',
		},
		justify: {
			content: {
				between: 'justify-content-between',
				center: 'justify-content-center',
				evenly: 'justify-content-evenly',
				// ...
				large: {
					start: 'justify-content-lg-start',
				},
				small: {
					center: 'justify-content-sm-center',
				},
			},
		},
		image: {
			fluid: 'img-fluid',
		},
		invisible: 'invisible', //@see https://getbootstrap.com/docs/5.3/utilities/visibility/
		line: {
			height: { //@see https://getbootstrap.com/docs/5.3/utilities/text/#line-height
				1: 'lh-1',
				small: 'lh-sm',
				base: 'lh-base',
				medium: 'lh-base',
				large: 'lh-lg',
			}
		},
		link: { //@see https://getbootstrap.com/docs/5.3/utilities/link
			body: {
				emphasis: 'link-body-emphasis',
			},
		},
		list: {
			group: {
				abcd: 'list-group',
				flush: 'list-group-flush',
				item: {
					abcd: 'list-group-item',
					action: 'list-group-item-action',
				},
				numbered: 'list-group-numbered',
			},
			unstyled: 'list-unstyled',
		},
		margin: {
			0: 'm-0',
			1: 'm-1',
			2: 'm-2',
			3: 'm-3',
			4: 'm-4',
			5: 'm-5',
			auto: 'm-auto',
			zyxw: `m-${this._styles.zyxw}`,
			// ...
			large: {
				0: 'm-lg-0',
				1: 'm-lg-1',
				2: 'm-lg-2',
				3: 'm-lg-3',
				4: 'm-lg-4',
				5: 'm-lg-5',
				auto: 'm-lg-auto',
			},
			medium: {
				0: 'm-md-0',
				1: 'm-md-1',
				2: 'm-md-2',
				3: 'm-md-3',
				4: 'm-md-4',
				5: 'm-md-5',
				auto: 'm-md-auto',
			},
			// ...
			bottom: {
				0: 'mb-0',
				1: 'mb-1',
				2: 'mb-2',
				3: 'mb-3',
				4: 'mb-4',
				5: 'mb-5',
				auto: 'mb-auto',
				zyxw: `mb-${this._styles.zyxw}`,
			},
			end: {
				0: 'me-0',
				1: 'me-1',
				2: 'me-2',
				3: 'me-3',
				4: 'me-4',
				5: 'me-5',
				auto: 'me-auto',
				zyxw: `me-${this._styles.zyxw}`,
				// ...
				medium: {
					0: 'me-md-0',
					zyxw: `me-md-${this._styles.zyxw}`,
				},
			},
			start: {
				0: 'ms-0',
				1: 'ms-1',
				2: 'ms-2',
				3: 'ms-3',
				4: 'ms-4',
				5: 'ms-5',
				auto: 'ms-auto',
				zyxw: `ms-${this._styles.zyxw}`,
				// ...
				medium: {
					0: 'ms-md-0',
					zyxw: `ms-md-${this._styles.zyxw}`,
				},
			},
			top: {
				0: 'mt-0',
				1: 'mt-1',
				2: 'mt-2',
				3: 'mt-3',
				4: 'mt-4',
				5: 'mt-5',
				auto: 'mt-auto',
				zyxw: `mt-${this._styles.zyxw}`,
				// ...
				large: {
					0: 'mt-lg-0',
				},
			},
			x: {
				0: 'mx-0',
				1: 'mx-1',
				2: 'mx-2',
				3: 'mx-3',
				4: 'mx-4',
				5: 'mx-5',
				auto: 'mx-auto',
				zyxw: `mx-${this._styles.zyxw}`,
			},
			y: {
				0: 'my-0',
				1: 'my-1',
				2: 'my-2',
				3: 'my-3',
				4: 'my-4',
				5: 'my-5',
				auto: 'my-auto',
				zyxw: `my-${this._styles.zyxw}`,
			},
		},
		modal: { //@see https://getbootstrap.com/docs/5.3/components/modal/
			abcd: 'modal',
			body: 'modal-body',
			content: 'modal-content',
			dialog: {
				abcd: 'modal-dialog',
				centered: 'modal-dialog-centered',
				scrollable: 'modal-dialog-scrollable',
			},
			header: 'modal-header',
			footer: 'modal-footer',
			title: 'modal-title',
			// ...
			basic: '', //simple placeholder
			small: 'modal-sm',
			large: 'modal-lg',
			huge: 'modal-xl',
		},
		nav: {
			item: 'nav-item',
			link: 'nav-link',
		},
		navbar: { //@see https://getbootstrap.com/docs/5.3/components/navbar/
			abcd: 'navbar',
			brand: 'navbar-brand',
			collapse: `${this.keywords.collapse} navbar-${this.keywords.collapse}`,
			expand: {
				large: 'navbar-expand-lg',
				medium: 'navbar-expand-md',
				small: 'navbar-expand-sm',
			},
			nav: 'navbar-nav',
			toggler: {
				abcd: 'navbar-toggler',
				icon: 'navbar-toggler-icon',
			},
		},
		overflow: { //@see https://getbootstrap.com/docs/5.3/utilities/overflow/#overflow
			auto: 'overflow-auto',
			hidden: 'overflow-hidden',
			visible: 'overflow-visible',
			scroll: 'overflow-scroll',
			// ...
			y: { //@see https://getbootstrap.com/docs/5.3/utilities/overflow/#overflow-y
				auto: 'overflow-y-auto',
				hidden: 'overflow-y-hidden',
				visible: 'overflow-y-visible',
				scroll: 'overflow-y-scroll',
			},
		},
		padding: {
			0: 'p-0',
			1: 'p-1',
			2: 'p-2',
			3: 'p-3',
			4: 'p-4',
			5: 'p-5',
			zyxw: `p-${this._styles.zyxw}`,
			// ...
			bottom: {
				0: 'pb-0',
				1: 'pb-1',
				2: 'pb-2',
				3: 'pb-3',
				4: 'pb-4',
				5: 'pb-5',
				auto: 'pb-auto',
				zyxw: `pb-${this._styles.zyxw}`,
			},
			end: {
				0: 'pe-0',
				1: 'pe-1',
				2: 'pe-2',
				3: 'pe-3',
				4: 'pe-4',
				5: 'pe-5',
				auto: 'pe-auto',
				zyxw: `pe-${this._styles.zyxw}`,
			},
			start: {
				0: 'ps-0',
				1: 'ps-1',
				2: 'ps-2',
				3: 'ps-3',
				4: 'ps-4',
				5: 'ps-5',
				auto: 'ps-auto',
				zyxw: `ps-${this._styles.zyxw}`,
			},
			top: {
				0: 'pt-0',
				1: 'pt-1',
				2: 'pt-2',
				3: 'pt-3',
				4: 'pt-4',
				5: 'pt-5',
				auto: 'pt-auto',
				zyxw: `pt-${this._styles.zyxw}`,
				// ...
				large: {
					0: 'pt-lg-0',
				},
			},
			x: {
				0: 'px-0',
				1: 'px-1',
				2: 'px-2',
				3: 'px-3',
				4: 'px-4',
				5: 'px-5',
				auto: 'px-auto',
				zyxw: `px-${this._styles.zyxw}`,
			},
			y: {
				0: 'py-0',
				1: 'py-1',
				2: 'py-2',
				3: 'py-3',
				4: 'py-4',
				5: 'py-5',
				auto: 'py-auto',
				zyxw: `py-${this._styles.zyxw}`,
			},
		},
		pointer: {
			events: {
				auto: 'pe-auto',
				none: 'pe-none',
			}
		},
		position: { //@see https://getbootstrap.com/docs/5.3/utilities/position/#position-values
			absolute: 'position-absolute',
			fixed: 'position-fixed',
			relative: 'position-relative',
		},
		progress: { //@see https://getbootstrap.com/docs/5.3/components/progress/
			abcd: 'progress',
			bar: {
				abcd: 'progress-bar',
				animated: 'progress-bar-animated',
				striped: 'progress-bar-striped',
			},
			stacked: 'progress-stacked',
		},
		ratio: {
			abcd: 'ratio',
			'1x1': 'ratio-1x1',
			'4x3': 'ratio-4x3',
			'16x9': 'ratio-16x9',
			'21x9': 'ratio-21x9',
		},
		rounded: { //@see https://getbootstrap.com/docs/5.3/utilities/borders/#radius
			abcd: 'rounded',
			0: 'rounded-0',
			1: 'rounded-1',
			2: 'rounded-2',
			3: 'rounded-3',
			4: 'rounded-4',
			5: 'rounded-5',
			// ...
			top: 'rounded-top',
			end: {
				abcd: 'rounded-end',
				0: 'rounded-end-0',
				1: 'rounded-end-1',
				2: 'rounded-end-2',
				3: 'rounded-end-3',
				4: 'rounded-end-4',
				5: 'rounded-end-5',
			},
			bottom: 'rounded-bottom',
			start: {
				abcd: 'rounded-start',
				0: 'rounded-start-0',
			},
			circle: 'rounded-circle',
			pill: 'rounded-pill',
		},
		row: {
			abcd: 'row',
			cols: {
				1: 'row-cols-1',
				2: 'row-cols-2',
				3: 'row-cols-3',
				4: 'row-cols-4',
				5: 'row-cols-5',
				6: 'row-cols-6',
				7: 'row-cols-7',
				8: 'row-cols-8',
				9: 'row-cols-9',
				10: 'row-cols-10',
				11: 'row-cols-11',
				12: 'row-cols-12',
				// ...
				large: {
					1: 'row-cols-lg-1',
					2: 'row-cols-lg-2',
					3: 'row-cols-lg-3',
					4: 'row-cols-lg-4',
					5: 'row-cols-lg-5',
					6: 'row-cols-lg-6',
					7: 'row-cols-lg-7',
					8: 'row-cols-lg-8',
					9: 'row-cols-lg-9',
					10: 'row-cols-lg-10',
					11: 'row-cols-lg-11',
					12: 'row-cols-lg-12',
				},
				medium: {
					1: 'row-cols-md-1',
					2: 'row-cols-md-2',
					3: 'row-cols-md-3',
					4: 'row-cols-md-4',
					5: 'row-cols-md-5',
					6: 'row-cols-md-6',
					7: 'row-cols-md-7',
					8: 'row-cols-md-8',
					9: 'row-cols-md-9',
					10: 'row-cols-md-10',
					11: 'row-cols-md-11',
					12: 'row-cols-md-12',
				},
				small: {
					1: 'row-cols-sm-1',
					2: 'row-cols-sm-2',
					3: 'row-cols-sm-3',
					4: 'row-cols-sm-4',
					5: 'row-cols-sm-5',
					6: 'row-cols-sm-6',
					7: 'row-cols-sm-7',
					8: 'row-cols-sm-8',
					9: 'row-cols-sm-9',
					10: 'row-cols-sm-10',
					11: 'row-cols-sm-11',
					12: 'row-cols-sm-12',
				},
			},
			gap: { //@see https://getbootstrap.com/docs/5.3/utilities/spacing/#row-gap
				0: 'row-gap-0',
				1: 'row-gap-1',
				2: 'row-gap-2',
				3: 'row-gap-3',
				4: 'row-gap-4',
				5: 'row-gap-5',
				6: 'row-gap-6',
				zyxw: `row-gap-${this._styles.zyxw}`,
			}
		},
		show: 'show',
		slide: 'slide',
		spinner: {
			border: 'spinner-border',
			grow: 'spinner-grow',
		},
		start: {
			0: 'start-0',
			50: 'start-50',
			100: 'start-100',
		},
		sticky: {
			bottom: 'sticky-bottom',
			top: 'sticky-top',
			// ...
			medium: {
				bottom: 'sticky-md-bottom',
			},
			large: {
				bottom: 'sticky-lg-bottom',
			},
		},
		text: {
			center: 'text-center',
			start: 'text-start',
			end: 'text-end',
			// ...
			muted: 'text-muted',
			nowrap: `text-nowrap`, //@see https://getbootstrap.com/docs/5.3/utilities/text/#text-wrapping-and-overflow
			truncate: 'text-truncate', //@see https://getbootstrap.com/docs/5.3/helpers/text-truncation/
			uppercase: 'text-uppercase',
			wrap: 'text-wrap',
			// ...
			// @see https://getbootstrap.com/docs/5.3/utilities/colors/#colors
			primary: 'text-primary',
			secondary: 'text-secondary',
			warning: 'text-warning',
			// ...
			body: {
				secondary: 'text-body-secondary', //@see https://getbootstrap.com/docs/5.3/migration/#utilities-2
			},
			huge: {
				start: 'text-xl-start',
			},
			enormous: {
				start: 'text-xxl-start',
			},
			large: {
				start: 'text-lg-start',
			},
			// ...
			opacity: {
				25: 'text-opacity-25',
				50: 'text-opacity-50',
				75: 'text-opacity-75',
			},
		},
		top: {
			0: 'top-0',
			50: 'top-50',
			100: 'top-100',
		},
		translate: { //@see https://getbootstrap.com/docs/5.3/utilities/position/
			middle: {
				abcd: 'translate-middle',
				x: 'translate-middle-x',
				y: 'translate-middle-y',
			},
		},
		vertical: {
			rule: 'vr', //@see https://getbootstrap.com/docs/5.3/helpers/vertical-rule/
		},
		visible: 'visible', //@see https://getbootstrap.com/docs/5.3/utilities/visibility/
		visually: {
			hidden: 'visually-hidden',
		},
		width: {
			100: 'w-100',
		},
	}

	static readonly data = (suffix: string) => Utils.data(suffix, 'bs')

	static readonly dataset = (data: Data<Strimber>): Data<Strimber> => {
		const _data: Data<Strimber> = {}
		Object
			.keys(data)
			.forEach(suffix => _data[this.data(suffix)] = data[suffix])
		return _data
	}
}