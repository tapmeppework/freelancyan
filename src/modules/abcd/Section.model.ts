import Model from '@modules/ABCD.model'

export default class Section extends Model {
	static readonly slug = 'section'
	static readonly class = `${this.umbrella(this.slug)} ${Model.classes.bootstrap.padding.y.zyxw}`
}
