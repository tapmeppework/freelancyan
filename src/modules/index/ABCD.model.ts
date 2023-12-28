import Model from '@modules/ABCD.model'

export default abstract class ABCD<Vocabulary> extends Model {
	readonly abstract texts: Vocabulary
	static readonly classNames = {
		top: `
			${this.umbrella('top')}
			${this.classes.bootstrap.align.items.center}
			${this.classes.bootstrap.gutter.x[0]} ${this.classes.bootstrap.gutter.y[5]} 
			${this.classes.bootstrap.gutter.x[Model.proportion][5]} 
			${this.classes.bootstrap.gutter.y[Model.proportion][0]} 
		`,
		about: this.classes.bootstrap.text.center,
		organisations: '',
		testimonials: '',
	}
}