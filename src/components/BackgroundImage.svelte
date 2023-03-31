<script lang="ts">
	import { fade } from 'svelte/transition';
	import * as vars from '$app/environment';

    let images: string[] = [
        "images/jumps_1.jpg",
        "images/jumps_2.jpg",
        "images/jumps_3.jpg",
        "images/qs_1.jpg",
        "images/qs_2.jpg",
        "images/qs_3.jpg",
        "images/sh_1.jpg",
        "images/sh_2.jpg",
        "images/sh_3.jpg",
        "images/sj_1.png",
        "images/sj_2.png",
        "images/sj_3.png",
        "images/st_1.jpg",
        "images/st_2.jpg",
        "images/st_3.jpg",
    ]
	let image: string = '';

	if (vars.browser) {
        setTimeout(() => {
            image = images[Math.floor(Math.random() * images.length)];
        }, 10);
	}
</script>

{#if image}
	<div
		transition:fade
		id="background-image"
		style="background-image: url('{image}')"
		class="blur-md"
	/>
{:else}
	<div id="background-image" class="bg-white" />
{/if}
