import ABCD from '@bloc/ABCD'
import Utils from '@bloc/Utils'
import type { Data, Dimensions } from '@bloc/ABCD.types'
import type { Snippet } from '@framework'
import type { ABCD as Lexicon } from '@i18n/ABCD.types'
import { Model } from '@modules/ABCD.model'
import type Properties from './Diashow.properties'
import type { Modal as PropertiesModal } from './Diashow.properties'

export default class Diashow extends Model<Properties> {
	static readonly slug = ABCD.keywords.diashow
	static readonly classNames = {
		diashow: `${this.classes.abcd.diashow.abcd} ${this.classes.bootstrap.width[100]}`,
	}

	constructor(properties: Properties) {
		super(properties, { controls: true })
	}

	readonly render = (
		carousel: (className: string, items: Snippet, full?: boolean) => Snippet,
		item: (active: boolean, carousel: Data<any>, dimensions: Dimensions, others: Data) => Snippet,
		video: (className: string, attributes: Data<any>, full?: boolean) => Snippet,
		other: (ellipsis: Snippet, full?: boolean) => Snippet,
	): Snippet => {
		const
			diashow = this.properties.diashow,
			dataSrc = Utils.data('src')
		switch (diashow.mode) {
			case 'carousel': return carousel(
				`${Diashow.classNames.diashow} ${this.properties.class}`,
				diashow.images.map((image0, index) => {
					const
						active = index == 0,
						image = typeof image0 == 'object' ? image0 : { src: image0 }
					return item(
						active,
						active ? {
							src: `${ABCD.assets.diashow}/${image.src}`,
							alt: image.alt,
							duration: image.duration,
						} : {
							src: ABCD.assets.logo.header,
							alt: image.alt,
							duration: image.duration,
							[dataSrc]: `${ABCD.assets.diashow}/${image.src}`,
						},
						{
							width: diashow.width,
							height: diashow.height,
						},
						{
							class: this.classes.bootstrap.width[100],
						}
					)
				}),
				this.properties.full,
			)
			case 'video': return video(
				`${Diashow.classNames.diashow} ${this.properties.class}`,
				{
					...diashow,
					src: `${ABCD.assets.diashow}/${diashow.src}`,
				},
				this.properties.full,
			)
			default: return other(this.abcd.keywords.ellipsis.value, this.properties.full)
		}
	}
}

/**
 * 
 */
export class Modal extends Model<PropertiesModal> {
	readonly render = (
		modal: (className: string, diashow: Lexicon.Diashow) => Snippet,
	): Snippet => modal(Diashow.classNames.diashow, this.properties.diashow)
}
