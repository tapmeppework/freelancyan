import ABCD from '@bloc/ABCD'
import type { Anonymous } from '@bloc/ABCD.types'
import Admin from '@bloc/Admin'
import Utils from '@bloc/Utils'
import type { HTMLAttributesAnchor, Snippet } from '@framework'
import type { ABCD as LexiconTypes } from '@i18n/ABCD.types'
import type Lexicon from '@i18n/Lexicon'
import Model from '@modules/ABCD.model'
import type { Navigation as Properties } from './Navigation.properties'
import type { DropdownClass } from './Dropdown.properties'

export default class Navigation extends Model {
	static readonly slug = ABCD.keywords.navigation
	static readonly classNames = {
		abcd: (className: string, position: Properties.Position) => `
			${className} 
			${this.umbrella(this.slug)} 
			${this.umbrella(this.slug)}-${position} 
			${this.classes.bootstrap.background.body.tertiary}
		`,
		logo: `
			${this.umbrella(`${this.slug}-logo`)} 
			${this.classes.bootstrap.navbar.brand}
		`,
		bars: {
			button: `
				${this.umbrella(`${this.slug}-bars`)} 
				${this.classes.abcd.display.flex.center}
				${this.classes.bootstrap.display.medium.none}
				${this.classes.bootstrap.padding.y[2]}
				${this.classes.bootstrap.navbar.toggler.abcd}
			`,
			icon: this.classes.bootstrap.navbar.toggler.icon,
		},
		footer: `
			${this.classes.bootstrap.flex.column}
			${this.classes.bootstrap.justify.content.between}
			${this.classes.bootstrap.align.items.center}
			${this.classes.bootstrap.flex.medium.row}
			${this.classes.abcd.font.size[7]}
		`,
		col: this.classes.bootstrap.col.auto,
		nav: `
			${this.classes.bootstrap.navbar.nav}
			${this.classes.bootstrap.margin.start.auto}
			${this.classes.bootstrap.flex.column}
			${this.classes.bootstrap.flex.small.row}
			${this.classes.bootstrap.column.gap.zyxw}
			${this.classes.bootstrap.row.gap[0]}
			${this.classes.bootstrap.text.center}
		`,
		scroller: {
			button: `
				${this.umbrella(`${this.slug}-scroller`)}
				${this.classes.abcd.button.aside}
				${this.classes.bootstrap.position.fixed}
				${this.classes.bootstrap.bottom[0]}
				${this.classes.bootstrap.end[0]}
				${this.classes.bootstrap.margin.zyxw}
				${this.classes.bootstrap.margin.medium[5]}
				${this.classes.bootstrap.display.none}
			`,
			icon: this.classes.bootstrap.line.height[1],
		},
	}

	constructor(protected readonly position: Properties.Position) {
		super()
	}

	readonly renderPages = (
		item: (className: string, aria: Properties.AriaCurrent, page: LexiconTypes.Page) => Snippet
	): Snippet[] => {
		const
			lexicon = this.lexicon,
			pages = lexicon.abcd.pages[this.position],
			page0 = Admin.page
		return Object
			.keys(pages)
			// @ts-ignore pages[key]
			.filter(key => Utils.isPageVisible(pages[key])) //only present the non empty pages
			.map(key => {
				const
					// @ts-ignore pages[key]
					page = pages[key] as ABCD.Page,
					href = this.pageHref(page, key),
					[className, aria] = page0.href == href ?
						[`${this.classes.bootstrap.nav.link} ${this.classes.bootstrap.font.weight.bold}`, 'page'] :
						[this.classes.bootstrap.nav.link, undefined]
				return item(
					className,
					aria as Properties.AriaCurrent,
					{
						...page,
						href: this.href(href, lexicon),
					},
				)
			})
	}

	readonly renderPageEndorsement = (
		item: (className: string, aria: Properties.AriaCurrent, page: LexiconTypes.Page & { title: string }) => Snippet,
	): Snippet => {
		const
			lexicon = this.lexicon,
			page = lexicon.abcd.pages.phantom.tapmeppe,
			page0 = Admin.page,
			href = this.abcd.project,
			[className, aria] = page0.href == href ?
				[this.classes.bootstrap.font.weight.bold, 'page'] :
				['', undefined]
		return item(
			`
				${Model.umbrella(`${Navigation.slug}-endorsement`)}
				${className} 
				${this.classes.bootstrap.nav.link} 
			`,
			aria as Properties.AriaCurrent,
			{
				href: this.href(href, lexicon),
				title: `
					From the idea 💡,<br/>
					to the implementation 💻,<br/>
					and finally deploying 🚀.<br/>
					<strong>Do not click 🔗</strong> here to know who we are.
				`,
				headline: page?.headline || '🔖🌟🏅👍📣', //👍🏿 bites the navy blue background
			},
		)
	}

	readonly renderDropdowns = (
		divider: Snippet,
		dropdown: (classNames: DropdownClass, label: Snippet, items: Snippet) => Snippet,
		item: (attributes: HTMLAttributesAnchor, label: Snippet) => Snippet,
		icons: {
			language: Snippet,
			auto: Snippet,
			dark: Snippet,
			light: Snippet,
		},
	): Snippet => {
		const
			classNames = {
				button: this.classes.bootstrap.nav.link,
				menu: this.classes.bootstrap.dropdown.menu.end,
			},
			dropdowns = [divider]
		if (Admin.thesaurus.lexicons.length > 1) { //add the languages dropdown
			const href = Admin.page.href
			dropdowns.push(dropdown(
				classNames,
				[icons.language, ' ', this.lexicon.label],
				Admin.thesaurus.map(
					lexicon => item(
						{
							class: Model.umbrella(`${Navigation.slug}-language-${lexicon.language}`),
							href: this.href(href, lexicon),
						},
						lexicon.label,
					)
				)
			))
		}
		if (this.abcd.config.scheme.mode == 'auto') {
			const
				lexicon = this.lexicon.abcd.navigation.schemes,
				schemes = ABCD.keywords.schemes,
				scheme0 = Admin.data.scheme.mode as keyof LexiconTypes.Schemes,
				_item = (scheme: string) => item(
					{
						[Utils.data(schemes.abcd)]: scheme,
						class: `
							${this.classes.abcd.pointer.abcd}
							${scheme0 == scheme && this.classes.bootstrap.display.none}
						`,
					},
					[icons[scheme as keyof LexiconTypes.Schemes], ' ', lexicon[scheme as keyof LexiconTypes.Schemes]],
				)
			dropdowns.push(dropdown( //add the scheme dropdown
				classNames,
				[icons[scheme0], ' ', lexicon[scheme0]],
				[
					_item(schemes.auto),
					_item(schemes.dark),
					_item(schemes.light),
				]
			))
		}

		return dropdowns
	}

	readonly renderLanguages = (item: (href: string, label: string) => Snippet): Snippet[] => {
		const href = Admin.page.href
		return Admin.thesaurus.map(
			lexicon => item(
				this.href(href, lexicon),
				lexicon.label
			)
		)
	}

	readonly renderScroller = (
		button: (classNames: { button: string, icon: string }, id: string, title: string) => Snippet
	): Snippet => button(
		Navigation.classNames.scroller,
		ABCD.wonder.scroller,
		this.lexicon.abcd.navigation.scroll.top,
	)

	private href = (href: Anonymous<string>, lexicon: Lexicon) =>
		href == undefined || href == ABCD.keywords._404 || href == ABCD.keywords.index ?
			`/${lexicon.language}` :
			`/${lexicon.language}/${href}`
	// `/${lexicon.language}` : `./${href}`, //> DO NOT USE this line; the astro:transition won't work otherwise
}
