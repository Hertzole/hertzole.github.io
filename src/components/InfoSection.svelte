<script lang="ts">
	export let title: string;
    export let id: string;
    export let subtitle: string = "";
    export let classes: string = "";
    export let styles: string = "";
</script>

<div id="{id}" class="flex flex-col divide-y-2 divide-neutral-200 {classes}" style="{styles}">
    <div class="flex flex-col justify-center">
        <div class="flex justify-center">
            <h1 class="text-5xl text-center font-header text-neutral-200 mt-8">{title}</h1>            
        </div>
        { #if subtitle }
            <div class="flex justify-center ml-2 mr-2">
                <h1 class="text-3xl font-header text-neutral-200 mt-2 text-center">{subtitle}</h1>
            </div>
        {/if}
    </div>
   
    <div class="mt-4 mb-4">
        <div class="text-blue-50 text-lg mt-4">
            <slot/>
        </div>
    </div>
</div>