<script lang="ts">
    import "../app.css";
    export let copyrightYear: string = new Date().getFullYear().toString();
</script>

<div class="backdrop-blur-md bg-black/60 h-14 flex w-full z-50 fixed top-0">
    <a href="/" class="self-end mb-2 text-4xl text-white md:ml-20 ml-8 font-header">Hertzole</a>
    <a href="/#about" class="self-end mb-2 text-3xl text-white md:ml-20 ml-8 font-header font-extralight hidden lg:block">About</a>
    <a href="/#professional-projects" class="self-end mb-2 text-3xl text-white ml-8 font-header font-extralight hidden lg:block">Professional Projects</a>
    <a href="/#personal-projects" class="self-end mb-2 text-3xl text-white ml-8 font-header font-extralight hidden lg:block">Personal Projects</a>
    <a href="/#assets" class="self-end mb-2 text-3xl text-white ml-8 font-header font-extralight hidden lg:block">Assets</a>
</div>
<slot/>
<div class="bg-footer flex h-20 justify-center">
    <h1 class="text-center text-base mt-4 ml-2 mr-2" style="color: #A1A1A1;">Copyright © Hertzole <span>{copyrightYear}</span> ● All images used with permission</h1>
</div>