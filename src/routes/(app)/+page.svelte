<script lang="ts">
	import BackgroundImage from '@components/BackgroundImage.svelte';
	import InfoSection from '@components/InfoSection.svelte';
	import ProjectCard from '@components/ProjectCard.svelte';
	import ProjectsGrid from '@components/ProjectsGrid.svelte';
	import type { ProjectItem } from '@data/ProjectItem';

	let professionalGames: ProjectItem[] = [
		{
			name: "Block'Em!",
			image: 'blockem-capsule',
			url: 'https://store.steampowered.com/app/1529220/BlockEm/',
			responsibilities: [
				'Lead developer',
				'Developed gameplay systems',
				'Developed UI',
				'Developed networking',
				'Developed internal level editor'
			],
			backgroundPosition: '0',
			releaseYear: '2022',
			urlDescription: 'Link to Block\'Em! on Steam'
		},
		{
			name: 'Chenso Club',
			image: 'chenso-capsule',
			url: 'https://store.steampowered.com/app/1454730/Chenso_Club/',
			responsibilities: ['Developed UI systems', 'Quality of life fixes'],
			backgroundPosition: '-4.5rem',
			releaseYear: '2022',
			urlDescription: 'Link to Chenso Club on Steam'
		},
		{
			name: 'Ooglians',
			image: 'ooglians-capsule',
			url: 'https://store.steampowered.com/app/2162070/Ooglians/',
			responsibilities: ['Maintainer after lead developer left', 'Quality of life fixes'],
			backgroundPosition: '-3rem',
			releaseYear: '2022',
			urlDescription: 'Link to Ooglians on Steam'
		}
	];

	let personalGames: ProjectItem[] = [
		{
			name: 'Greatest Gifter',
			image: 'greatest-gifter-capsule',
			url: 'https://hertzole.itch.io/greatest-gifter',
			description:
				'A Christmas game jam game created internally at Aurora Punks with a coworker where you play with 3 other online players to see who can collect the most gifts.',
			releaseYear: '2021',
			urlDescription: 'Link to Greatest Gifter on Itch.io'
		},
		{
			name: 'Santa Gets A Tower',
			image: 'santa-gets-a-tower-capsule',
			url: 'https://hertzole.itch.io/santa-gets-a-tower',
			description:
				'A Christmas game where you play as Santa defending his cabin from snowmen by placing down towers and throwing snowballs at them.',
			releaseYear: '2019',
			urlDescription: 'Link to Santa Gets A Tower on Itch.io'
		},
		{
			name: 'Santa Gets A Shotgun',
			image: 'santa-gets-a-shotgun-capsule',
			url: 'https://hertzole.itch.io/santa-gets-a-shotgun',
			description:
				'A endless wave game where you play as Santa and shooting snowmen with your shotgun.',
			releaseYear: '2018',
			urlDescription: 'Link to Santa Gets A Shotgun on Itch.io'
		},
		{
			name: 'Quible Sphere',
			image: 'quible-sphere-capsule',
			backgroundPosition: '-4rem',
			url: 'https://store.steampowered.com/app/840380/Quible_Sphere',
			description:
				'A bard rolling game where you play as a sphere that needs to traverse hard levels without falling off, while collecting cubes and racing against the clock.',
			releaseYear: '2018',
			urlDescription: 'Link to Quible Sphere on Steam'
		},
		{
			name: 'Jumps',
			image: 'jumps-capsule',
			url: 'https://hertzole.itch.io/jumps',
			description:
				'A school project where you jump on different colored cubes to get special effects to complete levels as fast as possible.',
			releaseYear: '2016',
			urlDescription: 'Link to Jumps on Itch.io'
		},
		{
			name: "Santa's Jetpack",
			image: 'santas-jetpack-capsule',
			url: 'https://gamejolt.com/games/santa-s-jetpack/41725',
			description:
				'A endless runner game where you play as Santa that needs to collect presents to keep his jetpack fueled while avoiding obstacles.',
			releaseYear: '2014',
			urlDescription: 'Link to Santa\'s Jetpack on Game Jolt'
		}
	];

	let assets: ProjectItem[] = [
		{
			name: 'Scriptable Values',
			url: 'https://github.com/Hertzole/scriptable-values',
			description:
				'A library for Unity that allows you to create scriptable objects that can be used as variables, events, collections, and pools in the inspector.',
			urlDescription: 'Link to Scriptable Values on GitHub'
		},
		{
			name: 'Cecil Attributes',
			url: 'https://github.com/Hertzole/cecil-attributes',
			description:
				'Adds a few new attributes to your Unity project that injects code into the assembly using Mono.Cecil to automate certain tasks.',
			urlDescription: 'Link to Cecil Attributes on GitHub'
		},
		{
			name: 'Runtime Options Manager',
			url: 'https://github.com/Hertzole/runtime-options-manager',
			description:
				'Allows you to easily set up runtime options in your Unity game using scriptable objects.',
			urlDescription: 'Link to Runtime Options Manager on GitHub'
		},
		{
			name: 'Advanced Level Editor',
			url: 'https://github.com/Hertzole/advanced-level-editor',
			description:
				'A runtime level editor for your Unity games that use code generation for easy serialization.',
			urlDescription: 'Link to Advanced Level Editor on GitHub'
		},
		{
			name: 'Gold Player',
			url: 'https://github.com/Hertzole/gold-player',
			description: 'A player controller for Unity that is easy to use.',
			urlDescription: 'Link to Gold Player on GitHub'
		}
	];

	let myAge: string = getAge('2000-07-06', false);
	let myExperienceAge: string = getAge('2014-07-06', true);

	function getAge(date: string, plural: boolean): string {
		let today = new Date();
		let birthDate = new Date(date);
		let age = today.getFullYear() - birthDate.getFullYear();
		let m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}

		switch (age) {
			case 1:
				return 'one year';
			case 2:
				return 'two year' + (plural ? 's' : '');
			case 3:
				return 'three year' + (plural ? 's' : '');
			case 4:
				return 'four year' + (plural ? 's' : '');
			case 5:
				return 'five year' + (plural ? 's' : '');
			case 6:
				return 'six year' + (plural ? 's' : '');
			case 7:
				return 'seven year' + (plural ? 's' : '');
			case 8:
				return 'eight year' + (plural ? 's' : '');
			case 9:
				return 'nine year' + (plural ? 's' : '');
			case 10:
				return 'ten year' + (plural ? 's' : '');
			default:
				return age + ' year' + (plural ? 's' : '');
		}
	}
</script>

<svelte:head>
	<title>Hertzole</title>
	<meta name="description" content="Game developer who likes tools more than games.">
</svelte:head>

<BackgroundImage />

<InfoSection title="About Me" id="about" classes="bg-primary mt-52 md:mt-96 xl:mt-[34rem]">
	<div class="flex mr-2 ml-2 justify-center">
		<div class="2xl:max-w-10xl 2xl:gap-24 md:gap-20 flex flex-row flex-wrap gap-8 justify-center">
			<p class="2xl:ml-60 2xl:mr-60 xl:ml-36 xl:mr-36 md:ml-20 md:mr-20 mr-8 ml-8 text-shadow text-xl">
				Hello there! I'm Hertzole and I am a {myAge} old game developer from Sweden.
				<br /><br />
				My journey into game development started when I released my first small game in 2014. Since then,
				I have worked on both personal and professional projects, gaining valuable experience in the field.
				As a result, I specialize in C# and Unity and have developed a deep understanding of both with my
				{myExperienceAge} of experience.
				<br /><br />
				In addition, I love making open-source Unity assets as a way to give back to the community. I am
				always eager to learn new things and take on new challenges in the field of game development.
			</p>
		</div>
	</div>
	
</InfoSection>

<InfoSection
	title="Professional Projects"
	subtitle="Work related projects"
	id="professional-projects"
	classes="bg-primary-alt"
>
	<ProjectsGrid>
		{#each professionalGames as game}
			<ProjectCard project={game} />
		{/each}
	</ProjectsGrid>
</InfoSection>

<InfoSection
	title="Personal Projects"
	subtitle="Projects released by myself"
	id="personal-projects"
	classes="bg-primary"
>
	<ProjectsGrid>
		{#each personalGames as project}
			<ProjectCard {project} />
		{/each}
	</ProjectsGrid>
</InfoSection>

<InfoSection
	title="Assets"
	subtitle="Projects that are designed to help the development of games"
	id="assets"
	classes="bg-primary-alt"
>
	<ProjectsGrid>
		{#each assets as asset}
			<ProjectCard project={asset} />
		{/each}
	</ProjectsGrid>
</InfoSection>
