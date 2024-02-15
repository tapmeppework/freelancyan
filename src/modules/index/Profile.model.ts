import type { Index } from '@i18n/ABCD.types'
import Model from './ABCD.model'

export default class Profile extends Model<Index.Profile> {
	static readonly slug = 'profile'
	static readonly classifications = {
		abcd: `
			${this.classes.bootstrap.col[12]}
			${this.classes.bootstrap.col[this.proportion][7]} 
			${this.classes.bootstrap.display.flex} 
			${this.classes.bootstrap.justify.content.center} 
			${this.classes.bootstrap.position.relative}
		`,
		container: `
			${this.umbrella(this.slug)}
			${this.classes.abcd.gradient.background}
			${this.classes.abcd.aspect.ratio[1]}
			${this.classes.bootstrap.margin.top[5]}
			${this.classes.bootstrap.rounded[5]}
		`,
		image: `
			${this.classes.bootstrap.position.absolute} 
			${this.classes.bootstrap.bottom[0]} 
			${this.classes.bootstrap.start[50]} 
			${this.classes.bootstrap.translate.middle.x}
		`,
	}
	readonly texts: Index.Profile = this.lexicon.index.profile
}
