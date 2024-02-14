// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ABCD from './ABCD.ts'
import CLASSES from './CLASSES.ts'
import Bootstrap from './Bootstrap.ts'
import Utils from './Utils.ts'

/**
 * @description 
 * 	As its name suggests, 
 * 	this script does wonderful things on the client side of the application.
 * @see https://docs.astro.build/en/guides/client-side-scripts/
 * <script is:inline src={...} defer></script>
 */
(html => {
	// if (!html) return;

	const
		timers = {
			gallery: NaN,
			diashow: { video: NaN, images: NaN },
			modifications: NaN,
			listeners: { resize: NaN, astro: NaN },
		},
		keywords = ABCD.keywords,
		wonder = ABCD.wonder,
		origin = window.location.origin.toLowerCase(),
		terms = {
			dismiss: `[${Bootstrap.data(Bootstrap.keywords.dismiss)}="${Bootstrap.keywords.modal}"]`,
			gallery: Utils.umbrella(`${keywords.gallery}-${keywords.diashow}`),
			illustrator: Utils.data('illustrator'),
			images: Utils.data('src'),
		},
		/**
		 * @see https://www.w3schools.com/js/js_cookies.asp
		 */
		cookies = {
			set: (name, value) => document.cookie = `${name}=${value};expires=${Utils.date().toUTCString()};path=/`,
			get: (name) => {
				const
					flag = `${name}=`,
					cookies = decodeURIComponent(document.cookie),
					list = cookies.split(';');
				for (let i = 0; i < list.length; i++) {
					const entry = list[i].replace(/^ +/g, '') //trim left
					// let entry = list[i];
					// while (entry.charAt(0) == ' ') {
					// 	entry = entry.substring(1);
					// }
					if (entry.indexOf(flag) == 0) return entry.substring(flag.length, entry.length)
				}
				return ''
			}
		},
		astros = {
			thirdParty: () => {
				const thirdParty = keywords.third.party
				if (
					ABCD.config.third.party &&
					cookies.get(thirdParty.key) === '' &&
					bootstrap
				) {
					const
						modal = html.querySelector(`#${wonder.third.party.modal}`),
						button = html.querySelector(`#${wonder.third.party.button}`)
					if (modal) {
						modal
							.querySelectorAll(terms.dismiss)
							.forEach(closer => closer.addEventListener(
								'click',
								() => cookies.set(thirdParty.key, thirdParty.no)
							))
						if (button) button.addEventListener(
							'click',
							() => {
								cookies.set(thirdParty.key, thirdParty.yes)
								window.location.reload(true) //reload from the server to get the trackers
							}
						)

						new bootstrap.Modal(modal).show()
					}
				}
			}
		},
		resizers = {
			window: {},
			html: {},
		},
		modifications = {},
		delay = 500, //in [ms]
		/**
		 * @description 
		 * 	This function is used to get the closest relative of the given element
		 *  matching the given query
		 * @param {HTMLElement} element
		 * @param {string} query
		 */
		getParent = (element, query) => {
			let parent = element
			// let parent = element.parentElement //> getParentOnly instead of getParent
			while (parent != null && !parent.matches(query)) parent = parent.parentElement
			return parent
		},
		/**
		 * @see https://stackoverflow.com/questions/49820013/javascript-scrollintoview-smooth-scroll-and-offset
		 */
		scrollIntoView = element => {
			// element.scrollIntoView({ behavior: 'auto', block: 'start' })
			window.scrollTo({
				top: element.getBoundingClientRect().top + window.scrollY - wonder.offset,
				behavior: "smooth"
			})
		},
		diashow = {
			/**
			 * @see https://stackoverflow.com/a/47745758/2652918
			 * `loaded data` most likely too late
			 * @param {VideoElement} video 
			 * @param {(container: Element) => {}} onReady 
			 */
			video: (video, onReady) => {
				clearInterval(timers.diashow.video) //DO NOT remove; lock process
				timers.diashow.video = setInterval(
					video => {
						if (video.readyState > 2) { //3 or 4 > loaded
							clearInterval(timers.diashow.video)
							onReady()
						}
					},
					delay,
					video
				)
			},
			images: (container, onReady) => {
				clearTimeout(timers.diashow.images)
				timers.diashow.images = setTimeout( // images
					container => {
						const images = container.querySelectorAll(`[${terms.images}]`)
						let counter = images.length
						if (counter) images.forEach(image => {
							image.addEventListener('load', () => {
								counter--
								if (counter == 0) onReady() //TRUE if all illustrations have been loaded
							})
							image.setAttribute('src', image.getAttribute(terms.images)) //load the illustration
							image.removeAttribute(terms.images) //set the intermediary lock
						}); else onReady() //TRUE if all illustrations have ALREADY been loaded
					},
					delay,
					container
				)
			}
		}

	/**
	 * @description The language detector and the cookies consenter
	 * @see https://www.geeksforgeeks.org/how-to-detect-the-browser-language-preference-using-javascript/
	 */
	setTimeout(
		() => {
			if (bootstrap) { //bootstrap has been previously loaded by the 'Scripts' module
				const lock = 1
				if (localStorage.getItem(keywords.language) == lock) return astros.thirdParty(); //the language selection had previously been made
				localStorage.setItem(keywords.language, lock) //language selection is done

				let timer = NaN
				const handler = () => {
					try {
						const
							vocabulary = JSON.parse(cookies.get(keywords.vocabulary)), //already in lower case; not always available from the start
							label = vocabulary.lexicons[vocabulary.language]
						if (label) {
							clearInterval(timer)
							const
								languages = [navigator.language, navigator.userLanguage, ...navigator.languages]
									.filter(language => language != undefined) //clean the list
									.map(language => language.toLowerCase())
							if (languages.includes(vocabulary.language)) return astros.thirdParty() //end of the road because the active language is supported by the browser

							const
								modal = html.querySelector(`#${wonder.languages.modal}`),
								list = html.querySelector(`#${wonder.languages.list}`)
							if (modal && list) {
								const
									alternatives = [...new Set([ //the set is used to ensure that each entry is unique
										...languages.map(language => language.split('-')[0]), //locales to languages
										...languages,
									])].filter(language => vocabulary.language != language && vocabulary.lexicons[language]) //the matching list of alternative available languages
								if (alternatives.length) {
									const url = window.location.pathname
									list.innerHTML = alternatives
										.map(language => `<li>
											<a href="${url.replace(/^\/[^\/]+/, `/${language}`)}">${vocabulary.lexicons[language]}</a>
										</li>`)
										.join('')

									modal
										.querySelectorAll(terms.dismiss)
										.forEach(closer => closer.addEventListener('click', astros.thirdParty))
									return new bootstrap.Modal(modal).show()
								}
							}
						}
						astros.thirdParty() //third party consenter
					} catch (error) {
						console.error(error)
					}
				}
				timer = setInterval(handler, 1000)
				handler()
			}
		},
		0
	)

	/**
	 * @description background block
	 * 	This block is used to set function that should run in the background once the page has been loaded and 
	 * 	all JS functionalities have been activated.
	 */
	setTimeout(
		() => {
			// cookie scheme
			const scheme = cookies.get(keywords.schemes.abcd)
			if (scheme) cookies.set(keywords.schemes.abcd, scheme) //update the expiry date
		},
		delay
	)

	/**
	 * global click handler
	 */
	html.addEventListener('click', event => {
		const element = event.target

		if (element.matches('a[href^="#"]')) { //anchor click
			event.preventDefault()
			const target = html.querySelector(element.getAttribute('href'))
			if (target) scrollIntoView(target)
		} else if (getParent(element, `#${wonder.scroller}`)) window.scrollTo({ top: 0, behavior: 'smooth' }) //scroll to top
		else {
			const
				data = Utils.data(keywords.schemes.abcd),
				anchor = getParent(element, `a[${data}]`)
			if (anchor) { //schemes dropdown
				const scheme = anchor.getAttribute(data)
				html.setAttribute(data, scheme) //update the scheme
				cookies.set(keywords.schemes.abcd, scheme)

				const
					li = anchor.parentElement,
					ul = li.parentElement,
					button = ul.previousElementSibling,
					className = CLASSES.bootstrap.display.none
				button.innerHTML = anchor.innerHTML
				ul.querySelector(`li.${className}`).classList.remove(className) //visualise the previously active option
				li.classList.add(className) //hidden the active option
			}
		}
	})

	/**
	 * scroller event listener
	 */
	const onScroll = () => {
		const scroller = html.querySelector(`#${wonder.scroller}`)
		if (scroller) {
			if (html.scrollTop < wonder.offset) scroller.classList.add(CLASSES.bootstrap.display.none)
			else scroller.classList.remove(CLASSES.bootstrap.display.none)
		}
	}
	document.addEventListener('scrollend', onScroll)
	onScroll()

	/**
	 * observers
	 * @see https://docs.astro.build/en/guides/view-transitions/#astroafter-swap
	 */
	const listeners = {
		astro: () => Object.values(astros).forEach(callback => callback()),
		window: () => Object.values(resizers.window).forEach(callback => callback()),
		html: () => Object.values(resizers.html).forEach(callback => callback()),
	}
	document.addEventListener('astro:after-swap', listeners.astro)
	window.addEventListener('resize', listeners.window) //window observer
	new ResizeObserver(listeners.html).observe(html) //DOM observer

	/**
	 * modifications observer
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
	 */
	new MutationObserver(mutations => {
		if (mutations.filter(mutation => mutation.addedNodes.length > 0).length) { //TRUE if at least one node has been added to the DOM
			clearTimeout(timers.modifications) //USED to delay the update below
			timers.modifications = setTimeout(
				() => Object.values(modifications).forEach(callback => callback()),
				delay
			)
		}
	}).observe(
		html,
		{
			attributes: false,
			childList: true,
			subtree: true,
		}
	)
	// observer.disconnect()

	/**
	 * diashow observer
	 */
	new MutationObserver(mutations => {
		const modals = mutations.filter(mutation =>
			mutation.target.matches(`.${CLASSES.abcd.modal.abcd}.${CLASSES.abcd.diashow.abcd}.${CLASSES.bootstrap.show}:not(.${CLASSES.abcd.ready})`)
		)
		if (modals.length) {
			const
				modal = modals[0].target,
				video = modal.querySelector('video[src]')
			if (video) diashow.video(video, () => setTimeout( //additional delay to hide the default loader
				modal => {
					modal.querySelector(`.${CLASSES.abcd.mask.abcd}`).remove() //remove the mask
					modal.classList.add(CLASSES.abcd.ready) //set the final lock
				},
				delay * 2,
				modal
			)); else diashow.images(modal, () => {
				modal.querySelector(`.${CLASSES.abcd.mask.abcd}`).remove() //remove the mask
				modal.classList.add(CLASSES.abcd.ready) //set the final lock
			})
		}
	}).observe(
		html,
		{
			attributes: true,
			childList: false,
			subtree: true,
		}
	)

	/**
	 * footer
	 * @see https://stackoverflow.com/questions/2146874/detect-if-a-page-has-a-vertical-scrollbar
	 * 			window.innerHeight > document.documentElement.clientHeight -> works well on desktop only
	 */
	let classList = html.querySelector('body > footer').classList
	resizers.window.footer = resizers.html.footer = () => {
		const
			[remove, add] = html.scrollHeight > html.clientHeight ? //TRUE if scrollbar
				[CLASSES.abcd.scrollbar.without, CLASSES.abcd.scrollbar.with] :
				[CLASSES.abcd.scrollbar.with, CLASSES.abcd.scrollbar.without]
		classList.replace(remove, add)
		classList.remove(CLASSES.bootstrap.visually.hidden)
	}
	resizers.window.footer()
	astros.footer = () => {
		classList = html.querySelector('body > footer').classList //update the classList because the footer has been replaced in the DOM
		resizers.window.footer()
	}

	/**
	 * @description The anchor target determination.
	 */
	astros.anchors = modifications.anchors = () => {
		html
			.querySelectorAll('a:not([target])[href^="https://"], a:not([target])[href^="http://"]')
			.forEach(anchor => {
				const href = anchor.getAttribute('href')
				if (!href.toLowerCase().startsWith(origin)) anchor.setAttribute('target', '_blank')
			})
	}
	astros.anchors()

	/**
	 * @description Placing the masks appropriately.
	 */
	astros.masks = () => document
		.querySelectorAll(`.${CLASSES.abcd.mask.abcd}`)
		.forEach(element => {
			const parent = element.parentElement
			if (parent) {
				const position = window.getComputedStyle(parent).getPropertyValue('position')
				if (!position.includes('relative')) parent.classList.add(
					CLASSES.abcd.ready,
					CLASSES.bootstrap.position.relative,
				)
			}
		})
	astros.masks()

	/**
	 * cards content
	 */
	if (!ABCD.config.full) {
		astros.cards = resizers.window.cards = () => {
			const classNames = {
				card: Utils.umbrella(keywords.card),
				step: Utils.umbrella(keywords.step),
				paragraphs: Utils.umbrella(keywords.paragraphs),
				ellipsis: Utils.umbrella(keywords.ellipsis.tag),
				reader: Utils.umbrella(keywords.reader),
			}
			html
				.querySelectorAll(`.${classNames.paragraphs}`)
				.forEach(element => {
					const
						ellipsis = element.nextElementSibling,
						reader = getParent(element, `.${classNames.card},.${classNames.step}`)?.querySelector(`.${classNames.reader}`)
					if (ellipsis && ellipsis.classList.contains(classNames.ellipsis)) {
						//clone the element
						const clone = element.cloneNode(true)
						clone.classList.add(CLASSES.bootstrap.invisible, CLASSES.bootstrap.position.absolute)
						element.insertAdjacentElement('afterend', clone)
						// element.parentElement.appendChild(clone)
						if (clone.scrollHeight > clone.clientHeight) { //is overflowing
							ellipsis.classList.remove(CLASSES.bootstrap.display.none)
							if (reader) reader.disabled = false //enable
						} else {
							ellipsis.classList.add(CLASSES.bootstrap.display.none)
							if (reader) reader.disabled = true //disable
						}
						clone.remove()
						// element.parentElement.removeChild(clone)
					}
				})
		}
		astros.cards()
	}

	/**
	 * bootstrap
	 */
	if (bootstrap) { //bootstrap has been previously loaded by the 'Scripts' module
		// tooltips
		const
			toggle = Bootstrap.data(Bootstrap.keywords.toggle),
			backup = Utils.data('title'),
			/**
			 * @see https://getbootstrap.com/docs/5.3/components/tooltips/#options
			 * @param {HTMLElement} element
			 */
			setTooltip = (element) => {
				new bootstrap.Tooltip(element, {
					customClass: CLASSES.abcd.tooltip.abcd,
					delay: { show: delay, hide: delay },
					html: true,
					placement: 'auto',
					// trigger: 'hover focus', //> hover for desktop, focus for mobile
				})
				// element.classList.add(CLASSES.abcd.tooltip.processed) //measure taken to increase the performance of the next round
			}

		/**
			 * title to tooltip
			 * @see https://getbootstrap.com/docs/5.3/components/tooltips/#enable-tooltips
			 */
		modifications.tooltips = () => html
			.querySelectorAll(`[title]`)
			// .querySelectorAll(`[title]:not(.${CLASSES.abcd.tooltip.processed})`)
			.forEach(element => {
				const title = element.title = element.title // sanitize the title
					.replace(/,?\[object Object\],?/g, '')
					.replace(/ {2,}/g, ' ')
					.trim()
				if (title) { //TRUE if title non empty
					element.setAttribute(backup, title)
					if (element.hasAttribute(toggle)) {
						// DO NOT MERGE
						if (element.getAttribute(toggle) == Bootstrap.keywords.tooltip) setTooltip(element)
						else element.title = '' //prevent the default title box
					} else {
						element.setAttribute(toggle, Bootstrap.keywords.tooltip)
						setTooltip(element)
					}
				}
			})
		modifications.tooltips()

		/**
		 * bootstrap related click event handler
		 */
		html.addEventListener('click', event => {
			const element = event.target

			/**
			 * grid modal
			 * @see https://getbootstrap.com/docs/5.3/components/modal/#via-javascript
			 */
			if (element.matches(`.${Utils.umbrella(keywords.reader)}:not([${Bootstrap.data(Bootstrap.keywords.toggle)}])`)) {
				const card = getParent(
					element,
					`.${Utils.umbrella(keywords.card)},.${Utils.umbrella(keywords.step)}`
				)
				if (card) {
					const
						title = card.querySelector(`.${CLASSES.abcd.modal.title}`),
						content = card.querySelector(`.${CLASSES.abcd.modal.content}`)
					// title = card.querySelector(`.${CLASSES.bootstrap.card.body} > .${CLASSES.abcd.modal.title}`),
					// content = card.querySelector(`.${CLASSES.bootstrap.card.body} > .${CLASSES.abcd.modal.content}`)
					if (title && content) {
						const modal = html.querySelector(`#${wonder.modal}`)
						if (modal) {
							const
								_title = modal.querySelector(`.${CLASSES.bootstrap.modal.title}`),
								_content = modal.querySelector(`.${CLASSES.bootstrap.modal.body}`)
							if (_title && _content) {
								card.classList.add(CLASSES.abcd.active)
								scrollIntoView(card)
								_title.innerHTML = title.innerHTML
								_content.innerHTML = content.innerHTML
								_content
									.querySelectorAll(`[${toggle}=${Bootstrap.keywords.tooltip}]`)
									.forEach(element => {
										element.title = element.getAttribute(backup)
										setTooltip(element)
									})

								new bootstrap.Modal(modal).show()
							}
						}
					}
				}
			} else {
				/**
				 * timeline collapse
				 * @see https://getbootstrap.com/docs/5.3/components/collapse/
				 */
				const
					element2 = element.parentElement,
					query = `[${Bootstrap.data(Bootstrap.keywords.toggle)}=${Bootstrap.keywords.collapse}]`
				if (
					element.matches(query) ||
					(element2 && element2.matches(query))
				) {
					const step = getParent(element, `.${Utils.umbrella(keywords.step)}`)
					if (step) scrollIntoView(step)
				}
			}
		})

		/**
		 * on modal close
		 * @see https://getbootstrap.com/docs/5.3/components/modal/#events
		 */
		html.addEventListener('hidden.bs.modal', event => {
			// undo the unit activation
			const unit = html.querySelector([
				`main .${Utils.umbrella(keywords.card)}.${CLASSES.abcd.active}`,
				`main .${Utils.umbrella(keywords.step)}.${CLASSES.abcd.active}`,
			].join(', '))
			if (unit) unit.classList.remove(CLASSES.abcd.active)

			// pause the video
			const
				modal = event.target,
				video = modal.querySelector(`.${CLASSES.bootstrap.modal.body} > video`)
			if (video) video.pause()

			// clear timer if necessary
			clearInterval(timers.diashow.video)
			clearTimeout(timers.diashow.images)
		})

		/**
		 * on mouse over for the gallery
		 */
		html.addEventListener('mousemove', event => {
			// console.log(event.target)
			clearTimeout(timers.gallery)
			timers.gallery = setTimeout( //used to slow down the handler
				() => {
					const element = event.target
					if (element.matches(`.${CLASSES.abcd.mask.abcd}`)) {
						const container = element.parentElement
						if (container && container.matches(`.${terms.gallery}`)) {
							const illustrator = container.firstElementChild
							if (illustrator) {
								// DO NOT MERGE
								if (illustrator.matches('video')) diashow.video(illustrator, () => {
									const stop = event => {
										illustrator.pause()
										illustrator.currentTime = 0 //back to the beginning
										container.removeEventListener('mouseleave', stop) //self destruction
									}
									illustrator.muted = true
									illustrator.loop = true
									illustrator.play()
									container.addEventListener('mouseleave', stop)
								}); else diashow.images(container, () => {
									const
										carousel = new bootstrap.Carousel(illustrator, { interval: 2000 }),
										stop = event => {
											carousel.pause()
											carousel.to(0) //back to the beginning
											// carousel.dispose()
											container.removeEventListener('mouseleave', stop) //self destruction
										}
									carousel.cycle()
									container.addEventListener('mouseleave', stop)
								})
							}
						}
					}
				},
				delay
			)
		})
	}
})(document.documentElement) // document.documentElement =: document.querySelector('html')
