<script lang="ts" context="module">	
	import * as vars from '$app/environment';
	import Typewriter from 'svelte-typewriter';

	let messages: string[] = [
		"I put the 'fun' in dysfunctional.",
		"I'm not lost, I'm exploring.",
		"I'm going to blame you for this.",
		'If you see this, you took a wrong turn.',
		'Your browser GPS is faulty.',
		"You click a link and bam, you're here. You should be more careful.",
		"Hello, is it me you're looking for?",
		"I'm not sure how you got here, but I'm glad you did.",
		"I'm not sure what you're looking for, but I'm sure it's not here.",
		'Well this is embarrassing.',
		'Four oh four.',
		"This is not the page you're looking for."
	];

	let message: string = '';
	let interval: number;

	if(vars.browser){
		let messageIndex = Math.floor(Math.random() * messages.length);
		message = messages[messageIndex];
		interval = 1000 / message.length;
	}
</script>

<svelte:head>
	<title>Hertzole - 404</title>
</svelte:head>


<script>
	import Layout from "@components/Layout.svelte";

</script>

<Layout>
    <div class="flex items-center bg-grey-lighter error-page bg-primary pt-14 justify-center flex-col">
		<h1 class="text-center text-9xl font-header text-neutral-200 mb-4">404</h1>
		<div class="h-10">
			<Typewriter cursor={false} interval={interval}>
				<h1 class="text-4xl text-neutral-200">{message}</h1>
			</Typewriter>
		</div>	
		<a href="/" class="text-center text-neutral-300 mt-8 text-2xl">Go home</a>
	</div>
</Layout>
