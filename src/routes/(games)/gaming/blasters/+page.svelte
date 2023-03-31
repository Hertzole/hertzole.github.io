<script>
	import { onMount } from 'svelte';

	onMount(() => {
		// @ts-ignore
		UnityLoader.instantiate('unityContainer', '/blasters/Web 0.2.json');
	});
</script>

<svelte:head>
	<title>Blasters</title>
	<script src="/blasters/UnityLoader.js"></script>
</svelte:head>

<div id="unityContainer" style="width: 960px; height: 600px; margin: auto" />

<style>
	* {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}

	#unityContainer {
		width: 100% !important;
		height: 100% !important;
		position: absolute !important;
	}
</style>
