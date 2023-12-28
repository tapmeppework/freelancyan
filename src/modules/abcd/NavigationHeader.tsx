import ABCD from '@bloc/ABCD'
import Admin from '@bloc/Admin'
import Bootstrap from '@bloc/Bootstrap'
import CLASSES from '@bloc/CLASSES'
import Bars from '@icons/Bars'
import CircleHalfStroke from '@icons/CircleHalfStroke'
import Language from '@icons/Language'
import Moon from '@icons/Moon'
import Sun from '@icons/Sun'
import Dropdown, { Item } from './Dropdown'
import Image from './Image'
import navigation, { Divider } from './Navigation'
import Model from './Navigation.model'

/**
 * @see https://getbootstrap.com/docs/5.3/components/navbar
 * TODO move html:classes to model
 */
export default navigation(
	`${CLASSES.bootstrap.navbar.abcd} ${CLASSES.bootstrap.navbar.expand.medium}`,
	'header',
	(model: Model) => <>
		<a href={`/${Admin.language}`} class={Model.classNames.logo}>
			<Image class={CLASSES.bootstrap.image.fluid}
				src={ABCD.assets.logo.header}
				{...model.lexicon.abcd.navigation.header.logo}
			/>
		</a>
		<button
			class={Model.classNames.bars.button}
			type="button"
			aria-controls={Model.slug}
			aria-expanded='false'
			aria-label={model.lexicon.abcd.navigation.header.aria}
			{...Bootstrap.dataset({
				[Bootstrap.keywords.toggle]: Bootstrap.keywords.collapse,
				[Bootstrap.keywords.target]: `#${Model.slug}`,
			})}
		><Bars class={Model.classNames.bars.icon} /></button>
		<div class={CLASSES.bootstrap.navbar.collapse} id={Model.slug}>
			<div class={`${CLASSES.bootstrap.navbar.nav} ${CLASSES.bootstrap.margin.start.auto}`}>
				{model.renderPages(
					(className, aria, page) => <a
						class={className}
						aria-current={aria}
						href={page.href}
					>{page.headline}</a>
				)}
				{model.renderDropdowns(
					<Divider />,
					(classNames, label, items) => <Dropdown
						class={classNames}
						label={label}
					>{items}</Dropdown>,
					(attributes, label) =>
						<Item {...attributes}>{label}</Item>,
					{
						language: <Language height={`1.5em`} />,
						auto: <CircleHalfStroke />,
						dark: <Moon />,
						light: <Sun />,
					},
				)}
			</div>
		</div>
	</>
)
