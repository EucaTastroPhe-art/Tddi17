<script lang="ts">
	import BtnTracker from '$lib/btn-tracker.svelte';
	import BtnBack from '$lib/btn-round.svelte';
	import FAQbtn from '$lib/FAQ-btn.svelte';
	import { TrackerStore } from '$lib/stores/Store';
	import { onMount } from 'svelte';
	import NavBar from '$lib/navigationbar.svelte';

	let tracker_store = null;
	let enabled_trackers = null;
	onMount(() => {
		tracker_store = new TrackerStore();
		enabled_trackers = $tracker_store; //.filter(t => t.enabled === true)
		console.log(enabled_trackers);
	}); 
	
	let infotxt =[
		"On this page you select which tracker you want to document, create a new tracker, or add a new tracker from the archive.",
	];
</script>

<!-- title-->
<svelte:head>
	<title>Leviate</title>
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
	/>
</svelte:head>

<main>
	<!-- <FAQbtn infotext={infotxt}/> -->
	<div class="content">
		<NavBar pageTitle="Document" backLink="/" infotext={infotxt}/>
		{#if tracker_store !== null}
			<div
				class="button-grid-container row justify-content-between"
				style="max-height: 70%; overflow-y: auto;"
			>
				<!-- {#each Array(5) as _, i} -->
				{#each $tracker_store.filter((t) => t.enabled === true) as tracker}
					<!-- {#if tracker["enabled"] == false} -->
					<BtnTracker
						picture={tracker['picture']}
						tracker_label={tracker['label']}
						previous_page="document"
					/>
					<!-- {/if} -->
				{/each}
				<!-- {/each} -->
			</div>
		{/if}
		<div
			class="sticky justify-content-between"
			style="display: flex; padding-top: 1vh; bottom: 0; margin-top: 5%"
		>
			<a
				class="btn btn-primary btn-fullwidth text-decoration-none"
				style="align-self: center; font-size: 2vh;"
				href="/tracker/create"
			>
				Create tracker
			</a>
		</div>
		<div
			class="sticky justify-content-between"
			style="display: flex; padding-top: 1vh; bottom: 0 margin-top: 5%;"
		>
			<a
				class="btn btn-primary btn-fullwidth text-decoration-none"
				style="align-self: center; font-size: 2vh;"
				href="/tracker/library"
			>
				Add from archive
			</a>
		</div>
	</div>
</main>

<style>
</style>
