<script lang="ts">
	import type { ProjectItem as ProjectItem } from '@data/ProjectItem';

	export let project: ProjectItem;
	export let backgroundColor: string = 'bg-card';

</script>

<div
	class="w-80 sm:w-96 {backgroundColor} justify-self-center drop-shadow-xl border border-card-border rounded-xl flex flex-col pb-2 hover:border-zinc-500 transition"
>
	{#if project.image}
		<a
			href={project.url}
			target={project.url.startsWith('/') ? '_self' : '_blank'}
			rel="noopener noreferrer"
            aria-label={project.urlDescription ? project.urlDescription : 'Link to ' + project.name}
		>
			<div
				style="background-image: url('{project.image?.img?.src}'); background-image: -webkit-image-set(url('{project.image.sources['webp'].split(' ')[0]}') 1x); background-position-y: {project.backgroundPosition ===
				undefined
					? 'center'
					: project.backgroundPosition};"
				class="w-auto h-96 ml-2 mr-2 mt-2 rounded-2xl game-picture cursor-pointer"
			/>
		</a>
	{/if}
	{#if project.releaseYear}
		<div class="flex justify-center">
			<h1
				class="text-2xl font-header text-neutral-200 mt-2 text-center release-container bg-pill border-pill-border"
			>
				{project.releaseYear}
			</h1>
		</div>
	{/if}
	<div class="flex justify-center">
		<a
			href={project.url}
			target={project.url.startsWith('/') ? '_self' : '_blank'}
			rel="noopener noreferrer"
			class="font-header text-4xl mt-2 mb-4 text-neutral-200 project-title text-center"
            aria-label={project.urlDescription ? project.urlDescription : 'Link to ' + project.name}
			>{project.name}</a
		>
	</div>
	<div>
		{#if project.description}
			<p class="text-md ml-3 mr-3">{project.description}</p>
			{#if project.responsibilities}
				<br />
			{/if}
		{/if}
		{#if project.responsibilities}
			<ul>
				{#each project.responsibilities as responsibility}
					<li class="text-neutral-200 list-disc ml-6 mr-6">{responsibility}</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
