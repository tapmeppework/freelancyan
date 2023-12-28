import type { Snippet } from '@framework'
import type { Services } from '@i18n/ABCD.types'
import type _Properties from '@modules/ABCD.properties'
import { Model } from '@modules/ABCD.model'

export default class ABCD<Properties extends _Properties, Icons> extends Model<Properties> {
	static readonly design = {
		'2.5': { padding: '0 2.5px' },
		5: { padding: '0 5px' },
		'7.5': { padding: '0 7.5px' },
	}
	static readonly icon = {
		// ${this.umbrella(`${this.slug}-icon`)}
		abcd: `
			${this.classes.bootstrap.display.inline.flex}
			${this.classes.abcd.line.height[0]}
			${this.classes.abcd.gradient.background}
			${this.classes.abcd.aspect.ratio[1]}
			${this.classes.abcd.rounded}
			${this.classes.bootstrap.margin.x.auto}
			${this.classes.bootstrap.margin.top.zyxw}
			${this.classes.bootstrap.margin.bottom[2]}
			${this.classes.bootstrap.padding.zyxw}
			${this.classes.bootstrap.font.size[1]}
			${this.classes.bootstrap.display.flex}
		`,
		span: this.classes.bootstrap.margin.auto,
	}
	protected readonly placeholder: () => Snippet

	constructor(
		properties: Properties,
		placeholder: (className: string) => Snippet,
		protected readonly icons: Icons
	) {
		super(properties)
		this.placeholder = () => placeholder(Model.classes.bootstrap.text.warning)
	}

	protected readonly illustration = (
		representative: Services.Representative,
		image: (className: string, src: string, alt?: string) => Snippet,
		icon: (classNames: { abcd: string, span: string }, svg: Snippet) => Snippet,
		placeholder?: () => Snippet
	) => {
		if (typeof representative.illustration == 'string') return image(
			this.classes.bootstrap.card.image.top,
			representative.illustration,
			representative.alt || representative.headline?.toString()
		); else if (representative.illustration) return representative.illustration(this.classes.bootstrap.card.image.top)
		else return icon(ABCD.icon, (placeholder || this.placeholder)())
	}
}