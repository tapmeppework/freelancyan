import Utils from '@bloc/Utils'
import Lexicon0 from './Lexicon'

/**
 * 
 */
export default abstract class Lexicon<Miscellaneous = any> extends Lexicon0<Miscellaneous> {
	protected static readonly tapmeppe = {
		contact: {
			me: 'Me Moi Meins',
			zoom: 15,
			coordinates: {
				latitude: 49.4366884,
				longitude: 8.8090874,
			},
		},
		diashow: {
			sigmasport: {
				aura: `sigmasport/aura-series.mp4`,
				compatibility: `sigmasport/compatibility.mp4`,
				eox: `sigmasport/eox-series.mp4`,
				gpx: `sigmasport/gpx.mp4`,
				reviews: `sigmasport/rox12-reviews.mp4`,
				sharing: `sigmasport/sharing.mp4`,
			},
		},
		images: {
			demo1: Lexicon.utilities.image('demo-1.png', 422),
			demo2: Lexicon.utilities.image('demo-2.png', 422),
			demo3: Lexicon.utilities.image('demo-3.png', 422),
			demo4: Lexicon.utilities.image('demo-4.png', 422),

			portfolio: {
				freelancyan: Lexicon.utilities.image(`${Lexicon.utilities.abcd.umbrella}-${Lexicon.utilities.abcd.project}.png`, 500),
				wormsyd: Lexicon.utilities.image(`${Lexicon.utilities.abcd.umbrella}-wormsyd.png`, 500),
				sigmasport: {
					logo: Lexicon.utilities.image(`sigmasport-logo.png`, 500),
					newsletter: Lexicon.utilities.image(`sigmasport-newsletter-form-framework.png`, 500),
					cyclecomputing: Lexicon.utilities.image(`sigmasport-cyclecomputing.png`, 500),
					website: Lexicon.utilities.image(`sigmasport-website-main.png`, 500),
					sharing: Lexicon.utilities.image(`sigmasport-sharing.png`, 500),
					reviews: Lexicon.utilities.image(`sigmasport-rox12-reviews.png`, 500),
					gpx: Lexicon.utilities.image(`sigmasport-gpx.png`, 500),
					aura: Lexicon.utilities.image(`sigmasport-aura-series.png`, 500),
					eox: Lexicon.utilities.image(`sigmasport-eox-series.png`, 500),
					compatibility: Lexicon.utilities.image(`sigmasport-compatibility.png`, 500),
					shop: Lexicon.utilities.image(`sigmasport-shop.png`, 500),

				},
				pagecon: Lexicon.utilities.image(`pagecon-logo.png`, 500),
				bloom: Lexicon.utilities.image(`bloom-s.png`, 500),
				motec: Lexicon.utilities.image(`motec-wheels.png`, 500),
				alpha: Lexicon.utilities.image('alpha-test-logo.png', 500),
				celsius37: Lexicon.utilities.image('celsius37-logo.png', 500),
				intera: Lexicon.utilities.image('intera-logo.jpg', 200),
				bergemann: Lexicon.utilities.image('bergemann-hoehne-logo.png', 370),
				kemitnsure: Lexicon.utilities.image('kemit-n-sure-sarl-logo.png', 256),
				albion: Lexicon.utilities.image('albion-academy-logo.png', 512),
				afroshops: Lexicon.utilities.image('afroshops-logo.png', 500),
			},
			resume: {
				tapmeppe: Lexicon.utilities.image('tapmeppe-work.png', 470, 180),
				intera: Lexicon.utilities.image('intera-gmbh.png', 470, 180),
				sigmasport: Lexicon.utilities.image('sigma-elektro-gmbh.png', 470, 180),
				pagecon: Lexicon.utilities.image('pagecon-gmbh.png', 470, 180),
				alpha: Lexicon.utilities.image('alpha-test-gmbh.png', 470, 180),
				celsius37: Lexicon.utilities.image('celsius37-ag.png', 470, 180),
			},
		},
		legal: {
			tax: '',
		},
		logo: (alt: string) => ({ alt, width: 500, }),
		profile: (alt: string) => ({ alt }),
		networks: {
			github: 'https://github.com/tapmeppe-work',
			linkedin: 'https://www.linkedin.com/in/patrick-meppe',
		},
		office: {
			url: 'https://calendly.com/patrick-meppe-tapmeppe/conference-call',
		},
		resume: {
			min: {
				value: 2010,
			},
			max: {
				value: Utils.year,
			},
			faas: 'Freelancer as a Service',
			badges: {
				intera: [
					'Docker',
					'Gitlab',
					'Vue.js',
					'Symfony',
				],
				sigmasport: [
					'e-Commerce',
					'MySQL',
					'PHP',
					'WordPress',
					'WooCommerce',
					'Joomla',
					'PrestaShop',
					'Symfony',
					'JavaScript',
					'jQuery',
					'TypeScript',
					'Node.js',
					'React.js',
					'Bootstrap',
					'Matomo',
					'Gitlab',
					'REST APIs',
				],
				pagecon: [
					'e-Commerce',
					'MySQL',
					'PHP',
					'WordPress',
					'Joomla',
					'PrestaShop',
					'Typo3',
					'JavaScript',
					'jQuery',
					'TypeScript',
					'Node.js',
					'Matomo',
					'REST APIs',
				],
				alpha: [
					'MySQL',
					'PHP',
					'WordPress',
					'Typo3',
					'JavaScript',
					'jQuery',
				],
				celsius: [
					'GIT',
					'MySQL',
					'Linux bash',
					'PHP',
					'JavaScript',
					'jQuery',
				],
			},
		},
	}
}
