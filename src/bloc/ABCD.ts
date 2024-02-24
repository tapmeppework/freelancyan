//@see https://docs.astro.build/en/guides/environment-variables/#default-environment-variables
// const isDev = import.meta.env.DEV //works fine; it is however not compatible with webpack

import Config from '@config'

const
	config = new Config,
	abcd = {
		diashow: 'diashow',
		index: 'index',
		error: 'error',
		portfolio: 'portfolio',
		navigation: 'navigation',
		organisations: 'organisations',
		testimonials: 'testimonials',
	}
export default Object.freeze({
	// get isDev(){ return import.meta.env.DEV }, > does not work in webpack either
	config,

	author: {
		name: 'Patrick Meppe',
		email: 'patrick.meppe@tapmeppe.work',
		website: 'https://tapmeppe.work',
	},
	umbrella: 'tapmeppe',
	project: 'freelancyan',
	keywords: {
		_404: '_404',
		contact: 'contact',
		cookies: 'cookies',
		card: 'card',
		demonstration: 'demonstration',
		diashow: abcd.diashow,
		ellipsis: {
			tag: 'ellipsis',
			value: '...',
		},
		email: 'email',
		error: abcd.error,
		gallery: 'gallery',
		index: abcd.index,
		language: 'language',
		navigation: abcd.navigation,
		organisations: abcd.organisations,
		paragraphs: 'paragraphs',
		phone: 'phone',
		portfolio: abcd.portfolio,
		reader: 'reader',
		schemes: {
			abcd: 'scheme',
			auto: 'auto',
			dark: 'dark',
			light: 'light',
		},
		service: 'service',
		sms: 'sms',
		step: 'step',
		testimonials: abcd.testimonials,
		third: {
			party: {
				key: 'third-party',
				no: '0',
				yes: '1',
			}
		},
		vocabulary: 'vocabulary',
		whatsapp: 'whatsapp',
		zyxw: 'zyxw',
	},
	proportion: 'large', //the standard proportion
	assets: {
		logo: {
			favicon: `${config.assets}/abcd/icon.ico`,
			header: `${config.assets}/abcd/icon.png`, //the resolution should be as low as low resolution
			type: 'image/png',
		},
		diashow: `${config.assets}/${abcd.diashow}`,
		index: `${config.assets}/${abcd.index}`,
		profile: `${config.assets}/${abcd.index}/profile.png`,
		testimonials: `${config.assets}/${abcd.index}/${abcd.testimonials}`,
		organisations: `${config.assets}/${abcd.index}/${abcd.organisations}`,
		portfolio: `${config.assets}/${abcd.portfolio}`,
		resume: `${config.assets}/resume`,
		gallery: `${config.assets}/gallery`,
	},
	version: "0.21.16", //DO NOT update this value; update its package.json equivalent instead
	wonder: {
		third: {
			party: { //the third party consenter modal ids
				modal: `modal_third_party_pUOJ7o3pH24krfmTKamg`,
				button: `modal_third_party_7uqpNTi5G5iShFy7m5Yi`,
			},
		},
		languages: { //the ids of the LanguagesSwitcher modal
			modal: `modal_languages_bleo7kO7SV4KcVyA8QIk`,
			list: `modal_languages_nDwVZGiDc8xZ2zicuebX`,
		},
		modal: `modal_general_qGyE7zhLmRJd5mwd78cD`, //the general modal id
		offset: 100, //offset with respect to the header; used in JS & CSS
		scroller: `scroller_5YsrS7aBBSYnpl6wFQGc`, //the scroller id
	},
})
