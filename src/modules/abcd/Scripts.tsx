import Model from './Scripts.model'

export default () => new Model().render(
	(type, defer, src) => <script type={type} defer={defer} src={src} />
)