import ABCD from '@bloc/ABCD'
import Image from '@abcd/Image'
import { Col } from '@abcd/Row'
import './Profile.css'
import Model from './Profile.model'

export default () => {
	const model = new Model

	return <Col class={Model.classifications.abcd}>
		<div class={Model.classifications.container}>
			<Image class={Model.classifications.image} src={ABCD.assets.profile} {...model.texts} />
		</div>
	</Col>
}
