
import type { Snippet } from '@framework'
import Model from '@modules/ABCD.model'
import type { _404 as Properties } from './404.properties'

export default class _404 extends Model {
	static readonly classNames = {
		container: `${this.classes.abcd.text.center} ${this.classes.bootstrap.margin.top.zyxw}`,
		action: `${this.classes.bootstrap.button.abcd} ${this.classes.bootstrap.button.primary}`,
		icon: `${this.classes.bootstrap.font.size[1]} ${this.classes.bootstrap.text.secondary}`,
	}
	readonly page = this.lexicon._404

	readonly renderAction = (
		anchor: (className: string, href: string, label: string) => Snippet
	): Snippet => anchor(
		_404.classNames.action,
		`/${this.lexicon.language}`,
		// `./`, //> DO NOT USE this line; the astro:transition won't work otherwise
		this.page.action
	)

	readonly renderIllustration = (
		ban: (icon: Properties.Icon) => Snippet,
		barrier: (icon: Properties.Icon) => Snippet,
		exclamation: (icon: Properties.Icon) => Snippet,
		question: (icon: Properties.Icon) => Snippet,
		signs: (icon: Properties.Icon) => Snippet,
	): Snippet => {
		const icon = {
			class: _404.classNames.icon,
			height: '3em',
		}
		switch (this.abcd.config._404) {
			case 'ban': return ban(icon)
			case 'barrier': return barrier(icon)
			case 'exclamation': return exclamation(icon)
			case 'question': return question(icon)
			case 'signs': return signs(icon)
			default: return this.abcd.config._404
		}
	}
}
