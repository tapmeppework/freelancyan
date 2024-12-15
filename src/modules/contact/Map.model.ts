// import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type { LatLngExpression } from 'leaflet'
import { Model } from '@modules/ABCD.model'
import Mask from '@abcd/Mask.model'
import type Properties from './Map.properties'
import type { Strimber, Strippet } from '@bloc/ABCD.types'
import Utils from '@bloc/Utils'

export default class Map extends Model<Properties> {
	static readonly slug = 'map'
	static readonly id = `${this.slug}_qgH7fRx8ciVM2vgtDnyf`
	static readonly className = {
		abcd: Model.umbrella(Map.slug),
		inner: this.classes.bootstrap.rounded[2],
		marker: Model.umbrella(`${Map.slug}-marker`),
		popup: Model.umbrella(`${Map.slug}-popup`),
	}

	/**
	 * @see https://leafletjs.com/reference.html#divicon
	 * @see https://leafletjs.com/examples/extending/extending-3-controls.html custom button
	 * @see https://nominatim.org/release-docs/develop/api/Search/
	 * @param {Properties} properties 
	 */
	constructor(properties: Properties) {
		super(properties)

		const element = document.getElementById(Map.id)
		if (element) {
			const container = element
			import('leaflet').then(L => {
				if (properties.coordinates) this.drawMap(
					container,
					'coordinates',
					properties.coordinates.latitude,
					properties.coordinates.longitude,
					L,
				); else {
					const address = localStorage.getItem(Map.slug)
					if (address) {
						try {
							const cache = JSON.parse(address)
							if (
								cache.expiry &&
								new Date().getTime() < Number(cache.expiry) && //less than a year old
								cache.latitude &&
								cache.longitude
							) return this.drawMap(container, 'cache', cache.latitude, cache.longitude, L)
						} catch (error) { }
					}
					// DO NOT MERGE
					if (this.abcd.config.contact.address) fetch(`https://nominatim.openstreetmap.org/search?q=${this.abcd.config.contact.address}&format=json&limit=1`)
						// fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(this.abcd.config.contact.address)}&format=json&limit=1`)
						.then(response => response.json())
						.then(response => {
							const information = response[0]
							if (information && information.lat && information.lon) {
								localStorage.setItem(Map.slug, JSON.stringify({ //store the cache for future accesses
									latitude: information.lat,
									longitude: information.lon,
									expiry: Utils.date().getTime(), //expiry date
								}))
								this.drawMap(container, 'information', information.lat, information.lon, L)
							}
						})
						.catch(reason => {
							if (reason instanceof Error) reason = reason.message
							this.renderError(container, reason)
						})
					else this.renderError(container, this.properties.error)
				}
			})
		}
	}


	private readonly drawMap = (container: HTMLElement, mode: string, latitude: Strimber, longitude: Strimber, L: any) => {
		container.setAttribute(Utils.data('mode'), mode)

		// set the map
		const
			location = [latitude, longitude] as LatLngExpression,
			map = L.map(container).setView(location, this.properties.zoom),
			icon = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" role="img" focusable="true" aria-hidden="true">
				<path
					fill="currentColor"
					d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
				/>
			</svg>`
		L.tileLayer(
			'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
			{
				maxZoom: 19,
				attribution: '&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
			}
		).addTo(map)
		const marker = L.marker(location, {
			icon: L.divIcon({
				className: Map.className.marker,
				html: icon,
			})
		}).addTo(map)
		if (this.properties.title) marker.bindPopup(
			this.properties.title,
			{
				offset: L.point(-1, -5),
				className: Map.className.popup,
			}
		).openPopup()

		// custom button
		const button = L.Control.extend({
			onAdd: () => {
				const button = L.DomUtil.create('button')
				button.innerHTML = icon
				button.setAttribute('class', this.classes.abcd.button.aside)
				button.addEventListener('click', () => map.flyTo(location, this.properties.zoom))

				return button;
			},
			onRemove: () => { },
		})
		new button({ position: `topright` }).addTo(map)

		// remove the mask
		const mask = container.nextElementSibling
		if (mask && mask.classList.contains(Mask.slug)) mask.remove()
	}

	private readonly renderError = (container: HTMLElement, reason: Strippet) => {
		const mask = container.nextElementSibling
		if (mask) mask.innerHTML = `<div>${reason}</div>`
	}
}