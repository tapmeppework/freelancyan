import CLASSES from '@bloc/CLASSES'
import Utils from '@bloc/Utils'
import ChevronUp from '@icons/ChevronUp'
import Model from './Navigation.model'
import navigation from './Navigation'
import Row, { Col } from './Row'

/**
 * @see https://getbootstrap.com/docs/5.3/components/navbar
 */
export default navigation(
	CLASSES.bootstrap.padding.y[2],
	'footer',
	model => <Row class={Model.classNames.footer}>
		<Col class={Model.classNames.col}>
			<span>{model.lexicon.abcd.navigation.footer.copyright(<>&copy;</>, Utils.year)}</span>
		</Col>
		<Col class={Model.classNames.col}>
			<div class={Model.classNames.nav}>
				{model.renderPages(
					(className, aria, page) => <a
						class={className}
						aria-current={aria}
						href={page.href}
					>{page.headline}</a>
				)}
				{model.renderPageEndorsement(
					(className, aria, page) => <a
						class={className}
						aria-current={aria}
						href={page.href}
						title={page.title}
					>{page.headline}</a>,
				)}
				{model.renderScroller(
					(classNames, id, title) => <button
						class={classNames.button}
						id={id}
						title={title}
						type="button"
					><ChevronUp class={classNames.icon} /></button>
				)}
			</div>
		</Col>
	</Row>
)
