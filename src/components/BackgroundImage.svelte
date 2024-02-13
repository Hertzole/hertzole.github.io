<script lang="ts">
	import { fade } from 'svelte/transition';
	import * as vars from '$app/environment';
    
	import type { ProcessedImage } from '@data/ProcessedImage';

    import jumps1 from '@assets/backgrounds/jumps_1.jpg?blur=10';
    import jumps2 from '@assets/backgrounds/jumps_2.jpg?blur=10';
    import jumps3 from '@assets/backgrounds/jumps_3.jpg?blur=10';    
    import qs1 from '@assets/backgrounds/qs_1.jpg?blur=10';
    import qs2 from '@assets/backgrounds/qs_2.jpg?blur=10';
    import qs3 from '@assets/backgrounds/qs_3.jpg?blur=10';
    import sh1 from '@assets/backgrounds/sh_1.jpg?blur=10';
    import sh2 from '@assets/backgrounds/sh_2.jpg?blur=10';
    import sh3 from '@assets/backgrounds/sh_3.jpg?blur=10';
    import sj1 from '@assets/backgrounds/sj_1.png?blur=10';
    import sj2 from '@assets/backgrounds/sj_2.png?blur=10';
    import sj3 from '@assets/backgrounds/sj_3.png?blur=10';
    import st1 from '@assets/backgrounds/st_1.jpg?blur=10';
    import st2 from '@assets/backgrounds/st_2.jpg?blur=10';
    import st3 from '@assets/backgrounds/st_3.jpg?blur=10';

    let images: ProcessedImage[] = [
        jumps1,
        jumps2,
        jumps3,
        qs1,
        qs2,
        qs3,
        sh1,
        sh2,
        sh3,
        sj1,
        sj2,
        sj3,
        st1,
        st2,
        st3,
    ]
	let image: ProcessedImage;

	if (vars.browser) {
        setTimeout(() => {
            image = images[Math.floor(Math.random() * images.length)];
        }, 10);
	}

    // background-image: image-set(url('{image.sources['avif'][0].src}') type('image/avif'), url('{image.sources['webp'][0].src}') type('image/webp'));
</script>

{#if image}
	<div
		transition:fade
		id="background-image"
		style="background-image: url('{image?.img?.src}'); background-image: -webkit-image-set(url('{image.sources['webp'].split(' ')[0]}') 1x);"
	/>
{:else}
	<div id="background-image" class="bg-transparent" />
{/if}
