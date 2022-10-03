<script lang="ts" context="module">
	// This function is called when this page is navigated to.
	export async function load({ page, fetch, session, stuff }) {
		// Send URL query parameters (e.g. "?tracker=Migraine") to the export variable called trackerLabel.
		return {
			props: {
				tracker_label: page.query.get('tracker'),
				previous_page: page.query.get('previous_page'),
				log_date_time: page.query.get('log_date_time')
			}
		};
	}
</script>

<script lang="ts">
	import type { Tracker } from '$lib/Tracker';
	import {
		TallyCounterEntry,
		TextEntry,
		RangeEntry,
		DateTimeEntry,
		NumberEntry
	} from '$lib/Entries';
	import NumberEntryComponent from '$lib/entry_components/NumberEntry.svelte';
	import RangeEntryComponent from '$lib/entry_components/RangeEntry.svelte';
	import TallyCounterEntryComponent from '$lib/entry_components/TallyCounterEntry.svelte';
	import TextEntryComponent from '$lib/entry_components/TextEntry.svelte';
	import DateTimeEntryComponent from '$lib/entry_components/DateTimeEntry.svelte';
	import { TrackerStore, TrackerDataStore } from '$lib/stores/Store';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import NavBar from '$lib/navigationbar.svelte';

	export let tracker_label: string;
	export let previous_page: string;
	export let log_date_time: string;

	let tracker_store: TrackerStore = null;
	let tracker_data_store: TrackerDataStore = null;
	let tracker: Tracker = null;
	let tracker_data = {};
	let tracker_data_index: Number;
	let count = 0;
	let total = 0;
	let entry_state = {};
	let pcg = 0;

	function entry_disabled_state(): boolean {
		return previous_page === 'library';
	}

	onMount(() => {
		tracker_store = new TrackerStore();
		tracker = $tracker_store.find((t: Tracker) => t.label === tracker_label);
		tracker_data_store = new TrackerDataStore(tracker_label);

		if (log_date_time !== null) {
			tracker_data = $tracker_data_store.find((t) => t['Date and time'] === log_date_time);
			tracker_data_index = $tracker_data_store.indexOf(tracker_data);
		}
		total = tracker.entries.length - 1;
		//Updating progress bar
		pcg = Math.floor((count / total) * 100);
		if (!entry_disabled_state() && previous_page !== 'logs') {
			document
				.getElementsByClassName('progress-bar')
				.item(0)
				.setAttribute('aria-valuenow', String(pcg));
			document
				.getElementsByClassName('progress-bar')
				.item(0)
				.setAttribute('style', 'width:' + Number(pcg) + '%');
			document.getElementsByClassName('progress-bar').item(0).textContent = String(pcg) + '%';
		}
	});

	function update_progress(e) {
		let caller = e.target || e.srcElement;
		let progress_bar = document.getElementsByClassName('progress-bar');
		let progress_txt = document.getElementById('progress-text');
		let submit_btn = document.getElementById('submit-btn');

		if (!entry_state[caller.id] && caller.id != "Date and time" ) {
			entry_state[caller.id] = true;

			count++;
			pcg = Math.floor((count / total) * 100);
			if (pcg > 100) {
				pcg = 100;
				count = total;
			}

			progress_bar.item(0).setAttribute('aria-valuenow', String(pcg));
			progress_bar.item(0).setAttribute('style', 'width:' + Number(pcg) + '%');
			progress_bar.item(0).textContent = String(pcg) + '%';

			submit_btn.classList.remove('btn-disabled');
			submit_btn.classList.remove('disabled');
			if (pcg >= 100) {
				progress_bar.item(0).classList.remove('bg-warning');
				progress_bar.item(0).classList.add('bg-primary');
				progress_txt.style.color = '#84b280';
				submit_btn.classList.remove('btn-warning');
				submit_btn.classList.add('btn-primary');
				//console.log('pcg = 100')
			} else if (pcg > 0) {
				progress_bar.item(0).classList.add('bg-warning');
				progress_txt.style.color = 'orange';
				submit_btn.classList.add('btn-warning');
				//console.log('pcg > 25')
			}
		}
		//console.log(previous_entry_state);
	}

	function disable_button() {
		$tracker_store.forEach((t: Tracker) => {
			if (t.label === tracker.label) tracker.enabled = false;
		});
		tracker_store.sync();
		goto('/tracker/document');
	}

	function delete_button() {
		let should_delete = window.confirm('Are you sure you want to delete this tracker?');
		if (should_delete) {
			tracker_store.remove(tracker);
			goto('/tracker/library');
		}
	}
	
	function on_form_submit() {
		if (!entry_disabled_state()) {
			if (previous_page === 'logs') {
				tracker_data_store.replace(tracker_data_index, tracker_data);
				goto('/simple-analysis')
				return;
			}
			tracker_data['Created on'] = new Date();
			tracker_data_store.add(tracker_data);
		} else {
			$tracker_store.forEach((t: Tracker) => {
				if (t.label === tracker.label) tracker.enabled = true;
			});
			tracker_store.sync();
		}
		goto('/tracker/document');
	}
	
	let infotxt =[
		"On this page you you input data to save to a tracker. Simply fill in the fields with relevant information and hit save. Progress on filling in the info is shown below the tracker name (top of page), but filling in 100% of the info is not always required.",
		"The remove to library button removes the selected tracker from currently active tracker and moves it to the tracker library, for later use.",
		"You can also use the previous and next buttons to navigate to the previous or next tracker in line."
	] 
	/*
	function next(){
		let index = $tracker_store.indexOf(tracker);
		if( index === ($tracker_store.length-1))	
			tracker = $tracker_store[0];
		else	
			tracker = $tracker_store[index+1];
		tracker_label = tracker.label;
		tracker_data_store = new TrackerDataStore(tracker_label);
		tracker_data = {}
		total = tracker.entries.length - 1;

		window.history.replaceState({}, '','/tracker/tracker?tracker='+tracker_label+'&previous_page=document');
	} 
	function previous(){
		let index = $tracker_store.indexOf(tracker);
		if(index === 0){
			{tracker = $tracker_store[$tracker_store.length-1];}
		}
		else			
			{tracker = $tracker_store[index-1];}
		tracker_label = tracker.label;
		tracker_data_store = new TrackerDataStore(tracker_label);
		tracker_data = {}
		total = tracker.entries.length - 1;

		window.history.replaceState({}, '','/tracker/tracker?tracker='+tracker_label+'&previous_page=document');
	} 
	*/
</script>

<svelte:head>
	<title>Leviate</title>
</svelte:head>
<main>
	<div class="content">
		
		{#if tracker !== null}
			<NavBar pageTitle="{tracker.picture} {tracker_label}" 
					useHistoryBack={true} 
					infotext={infotxt} 
					currentPage={window.location.pathname} />
		{:else}
			<NavBar pageTitle="{tracker_label}" 
					useHistoryBack={true}
					infotext={infotxt}
					currentPage={window.location.pathname} />
		{/if}
		
		{#if !entry_disabled_state() && previous_page !== 'logs'}
			<div
				class="justify-content-between"
				style="display: flex; margin-top: 3vh; margin-bottom: 3vh; align-items: center;"
			>
				<div class="progress" style="width: 85%; height: 3.5vh; background-color: #777;">
					<div
						class="progress-bar bg-primary"
						role="progressbar"
						style="width: 20%"
						aria-valuenow="0"
						aria-valuemin="0"
						aria-valuemax="100"
					>
						Label
					</div>
				</div>
				<div class="whitetext" id="progress-text">
					{count}/{total}
				</div>
			</div>
		{/if}
		<div class="container" style="overflow-y: auto; height: 80%;">
			{#if tracker !== null}
				<form
					on:submit|preventDefault={on_form_submit}
					on:change={update_progress}
					id="tracker-form"
				>
					{#each tracker.entries as entry}
						<div class="row">
							{#if entry instanceof NumberEntry}
								<NumberEntryComponent
									number_entry={entry}
									bind:input={tracker_data[entry.label]}
									is_writable_state={entry_disabled_state()}
								/>
							{:else if entry instanceof TextEntry}
								<TextEntryComponent
									text_entry={entry}
									bind:input={tracker_data[entry.label]}
									is_writable_state={entry_disabled_state()}
								/>
							{:else if entry instanceof TallyCounterEntry}
								<TallyCounterEntryComponent
									tally_counter_entry={entry}
									bind:input={tracker_data[entry.label]}
									is_writable_state={entry_disabled_state()}
								/>
							{:else if entry instanceof RangeEntry}
								<RangeEntryComponent
									range_entry={entry}
									bind:input={tracker_data[entry.label]}
									is_writable_state={entry_disabled_state()}
								/>
							{:else if entry instanceof DateTimeEntry}
								<DateTimeEntryComponent
									date_time_entry={entry}
									bind:input={tracker_data[entry.label]}
									is_writable_state={entry_disabled_state()}
								/>
							{/if}
						</div>
					{/each}
					<div class="h-100 row align-items-center">
						<!-- this will center the button -->
						{#if !entry_disabled_state()}
							{#if previous_page === 'logs'}
								<button
									type="submit"
									id="submit-btn"
									class="btn btn-primary text-decoration-none mb-2"
									style=" color:white;"
								>
									Update
								</button>
								<button
									type="button"
									class="btn btn-primary text-decoration-none"
									style=" color:white;"
									on:click={() => goto('/simple-analysis')}
								>
									Cancel
								</button>
							{:else}
								<button
									type="submit"
									id="submit-btn"
									class="btn btn-disabled disabled text-decoration-none mb-2"
									style=" color:white;"
								>
									Save
								</button>
								<button
									type="button"
									class="btn btn-primary text-decoration-none mb-2"
									style=" color:white;"
									on:click={disable_button}
								>
									Move to archive
								</button> 
							{/if}
						{:else}
							<button
								type="submit"
								class="btn btn-primary text-decoration-none mb-2"
								style=" color:white;"
							>
								Add
							</button>
							<button
								type="button"
								class="btn btn-danger text-decoration-none"
								style=" color:white;"
								on:click={delete_button}
							>
								Delete
							</button>
						{/if}
					</div>
				</form>
			{:else}
				loading...
			{/if}
		</div>
	</div>
</main>

<style>
</style>
