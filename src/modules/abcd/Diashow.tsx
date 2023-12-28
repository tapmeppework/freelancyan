import type Properties from './Diashow.properties'
import type { Modal as PropertiesModal } from './Diashow.properties'
import Model, { Modal as ModelModal } from './Diashow.model'
import Modal0 from './Modal'
import Carousel, { Item } from './Carousel'
import Image from './Image'
import Mask from './Mask'
import Loader from './Loader'

const Diashow = (props: Properties) => {
	const model = new Model(props)
	return model.render(
		(className, items, full) => <>
			<Carousel 
				class={className}
				controls={model.properties.controls}
			>{items}</Carousel>
			<Mask full={full}>
				{props.children}
			</Mask>
		</>,
		(active, image, dimensions, others) => <Item duration={image.duration} active={active}>
			<Image {...image} {...dimensions} {...others}></Image>
		</Item>,
		(className, attributes, full) => <>
			<video
				class={className}
				src={attributes.src}
				width={attributes.width}
				height={attributes.height || attributes.width}
				preload='metadata'
				controls={model.properties.controls}
			/>
			<Mask full={full}>
				{props.children}
			</Mask>
		</>,
		(ellipsis, full) => <Mask full={full}>{ellipsis}</Mask>,
	)
}
export default Diashow;

export const Modal = (props: PropertiesModal) => new ModelModal(props).render(
	(className, diashow) => <Modal0
		class={className}
		id={props.id}
		headline={props.headline}
		mode='large'
	>
		<Diashow diashow={diashow} full={true}>
			<Loader large />
		</Diashow>
	</Modal0>
)
