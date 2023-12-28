import { onMount } from 'solid-js'
import Loader from '@abcd/Loader'
import Mask from '@abcd/Mask'
import LocationDot from '@icons/LocationDot'
import './Map.css'
import type Properties from './Map.properties'
import Model from './Map.model'

export default (props: Properties) => {
	onMount(() => new Model(props))

	return <div class={Model.className.abcd}>
		<div id={Model.id}></div>
		<Mask full>
			<Loader>{props.headline}</Loader>
		</Mask>
		<template>
			{/* <LocationDot /> */}
		</template>
	</div>
}
