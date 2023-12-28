import Row from '@abcd/Row'
import Introduction from './Introduction'
import Profile from './Profile'
import Model from './ABCD.model'
import './Top.css'

export default () => <Row class={Model.classNames.top}>
	<Introduction />
	<Profile />
</Row>
