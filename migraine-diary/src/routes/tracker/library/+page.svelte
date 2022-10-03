<script lang="ts">
	import BtnTracker from '$lib/btn-tracker.svelte'
	import FAQbtn from '$lib/FAQ-btn.svelte';
    import BtnBack from '$lib/btn-round.svelte'
	import { TrackerStore } from '$lib/stores/Store';
	import { onMount } from 'svelte';
	import NavBar from '$lib/navigationbar.svelte';

	let tracker_store = null;
	let enabled_trackers = null;
	onMount(() => {
		tracker_store = new TrackerStore();
		enabled_trackers = $tracker_store//.filter(t => t.enabled === true)
		console.log(enabled_trackers);
	});
	let infotxt = [
		"On this page you can click on any of the trackers to update them by putting in the new value you want it to update to. You can also add a new tracker by clicking 'Add Tracker' then fill out the name,icon, entry, entry name and then unit. Then click 'Add entry' and fill out how many of the selected units you wish to add to the tracker.",
	];
</script>

<!-- title-->
<svelte:head>
	<title>Leviate</title>
</svelte:head>


<main>
	<div class="content">
		<NavBar pageTitle="Tracker Archive" backLink="/tracker/document" infotext={infotxt}/>
		{#if tracker_store !== null}
		<div class="button-grid-container row justify-content-between" style=" overflow-y: auto;">
			{#each $tracker_store.filter(t => t.enabled === false) as tracker}
				<!-- {#if tracker["enabled"] == false} -->
					<BtnTracker picture={tracker["picture"]} tracker_label={tracker["label"]} previous_page="library" ></BtnTracker>
				<!-- {/if} -->
			{/each}
		</div>
		{/if}
		
	</div>
</main>

<style>

</style>
