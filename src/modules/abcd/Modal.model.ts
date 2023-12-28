import ABCD from '@bloc/ABCD'
import Bootstrap from '@bloc/Bootstrap'
import type { HTMLAttributesABCD, HTMLAttributesButton, Snippet } from '@framework'
import type PropertiesIcon from '@abcd/Icon.properties'
import _Model, { Model } from '@modules/ABCD.model'
import type { H as PropertiesH } from './Headline.properties'
import type Properties from './Modal.properties'
import type { Button as PropertiesButton } from './Modal.properties'

/**
 * 
 */
export default class Modal extends Model<Properties> {
	static readonly slug = 'modal'
	static readonly classNames = {
		abcd: `
			${this.classes.abcd.modal.abcd}
			${this.classes.bootstrap.modal.abcd}
			${this.classes.bootstrap.fade}
		`,
		dialog: `
			${this.classes.bootstrap.modal.dialog.abcd} 
			${this.classes.bootstrap.modal.dialog.centered} 
			${this.classes.bootstrap.modal.dialog.scrollable}
		`,
		content: this.classes.bootstrap.modal.content,
		header: this.classes.bootstrap.modal.header,
		heading: this.classes.bootstrap.modal.title,
		footline: this.classes.bootstrap.modal.footer,
		body: this.classes.bootstrap.modal.body,
		close: {
			button: `
				${this.umbrella(`${this.slug}-close`)}
				${this.classes.abcd.button.aside}
			`,
			icon: this.classes.bootstrap.line.height[1],
		}
	}

	readonly render = (
		aside: (attributes: HTMLAttributesABCD, headline: Snippet, button: Snippet, body: Snippet, footline: Snippet) => Snippet,
		headline: (attriutes: PropertiesH, label: Snippet) => Snippet,
		button: (attriutes: HTMLAttributesButton, icon: PropertiesIcon) => Snippet,
		body: (className: string, children: Snippet) => Snippet,
		footline: (className: string, snippet: Snippet) => Snippet,
	): Snippet => {
		const
			id = this.properties.id || Model.identifier(Modal.slug),
			label = `${id}-label`

		return aside(
			{
				class: `
					${Modal.classNames.abcd} 
					${Modal.classes.bootstrap.modal[this.properties.mode || 'basic']} ${this.properties.class}
				`,
				id,
				tabindex: -1,
				'aria-labelledby': label,
				'aria-hidden': 'true',
				...(this.properties.static ? Bootstrap.dataset({ //@see https://getbootstrap.com/docs/5.3/components/modal/#static-backdrop
					backdrop: 'static',
					keyboard: 'false',
				}) : {})
			},
			headline(
				{
					class: Modal.classNames.heading,
					id: label,
					size: 4,
				},
				this.properties.headline,
			),
			button(
				{
					class: Modal.classNames.close.button,
					type: 'button',
					'aria-label': this.lexicon.abcd.navigation.modal.close,
					[Bootstrap.data(Bootstrap.keywords.dismiss)]: Bootstrap.keywords.modal,
				},
				{
					class: Modal.classNames.close.icon,
				}
			),
			body(Modal.classNames.body, this.properties.children),
			this.properties.footline && footline(Modal.classNames.footline, this.properties.footline),
		)
	}
}

/**
 * 
 */
export class Button extends Model<PropertiesButton> {
	readonly attributes = {
		type: 'button' as 'button',
		class: `${this.classes.bootstrap.button.abcd} ${this.properties.class}`,
		...Bootstrap.dataset({
			[Bootstrap.keywords.toggle]: Bootstrap.keywords.modal,
			[Bootstrap.keywords.target]: this.properties.target,
		}),
	}
}

export class LanguagesSwitch extends _Model {
	private readonly modal = this.lexicon.abcd.navigation.modal.languages

	readonly render = (
		modal: (
			ids: { modal: string, list: string },
			attributes: Properties,
			body: Snippet
		) => Snippet
	): Snippet => modal(
		ABCD.wonder.languages,
		{
			mode: 'basic',
			static: true,
			headline: this.modal.headline,
		},
		this.modal.body
	)
}