import Modal from './Modal';
import Model from './ThirdParty.model';
import TrackersModule from '@trackersModule'

export default () => new Model().render(
	(defer, trackersModel) => <aside>
		<script defer={defer} src={trackersModel} />
		<TrackersModule />
	</aside>,
	(attributes, body) => <Modal {...attributes}>{body}</Modal>,
	(className, id, label) => <button class={className} id={id}>{label}</button>,
)
