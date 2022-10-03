<script lang="ts">
	import {
		IEntry,
		TallyCounterEntry,
		TextEntry,
		RangeEntry,
		DateTimeEntry,
		NumberEntry,
		Unit
	} from '$lib/Entries';
	import { Tracker } from '$lib/Tracker';
	import NumberEntryComponent from '$lib/entry_components/NumberEntry.svelte';
	import RangeEntryComponent from '$lib/entry_components/RangeEntry.svelte';
	import TallyCounterEntryComponent from '$lib/entry_components/TallyCounterEntry.svelte';
	import TextEntryComponent from '$lib/entry_components/TextEntry.svelte';
	import DateTimeEntryComponent from '$lib/entry_components/DateTimeEntry.svelte';

	import UnitSelect from '$lib/entry_select/UnitSelect.svelte';
	import PairSelect from '$lib/entry_select/PairSelect.svelte';

	import { TrackerStore } from '$lib/stores/Store';
	import { onMount } from 'svelte';

	import BtnBack from '$lib/btn-round.svelte';

	import { EmojiButton } from '@joeattardi/emoji-button';

	import NavBar from '$lib/navigationbar.svelte';

	let emojiTrigger = new EmojiButton();
	let selectedEmoji = '🐓';

	emojiTrigger.on('emoji', (selection) => {
		console.log(selection.emoji);
		selectedEmoji = selection.emoji;
	});

	let tracker_store: TrackerStore = null;
	let trackerName: string;
	let entry_list: IEntry[] = [new DateTimeEntry("Date and time")];
	let tempname: string;
	let tempunit: Unit;
	let temppair = [];

	let trigger: HTMLElement = null;
	onMount(() => {
		tracker_store = new TrackerStore();
		trigger = document.querySelector('#emoji-trigger');
		console.log(trigger);
	});

	function createTracker() {
		let messages = [];
		const entrycheck = <HTMLInputElement>document.getElementById('entry');
		const namecheck = <HTMLInputElement>document.getElementById('trackername');
		if (entry_list.length < 1) {
			messages.push('Please add at least one entry');
			console.log('in error message');
			entrycheck.setCustomValidity(messages.toString());
			entrycheck.reportValidity();
			entrycheck.setCustomValidity('');
		} else if ($tracker_store.filter((t) => t.label === trackerName).length > 0) {
			messages.push('Tracker name already exists please choose a different name');
			console.log($tracker_store.filter((t) => t.label === trackerName));
			namecheck.setCustomValidity(messages.toString());
			namecheck.reportValidity();
			namecheck.setCustomValidity('');
		} else {
			let save_tracker = new Tracker(trackerName, selectedEmoji, entry_list, true);
			tracker_store.add(save_tracker);
			//spara trackern
			entry_list = [new DateTimeEntry("Date and time")];
			trackerName = '';
		}
		//const entrycheck = <HTMLInputElement>document.getElementById('entry');
		/*if (messages.length > 0) {
			console.log('in error message');
			entrycheck.setCustomValidity(messages.toString());
			entrycheck.reportValidity();
			entrycheck.setCustomValidity('');
		}*/

		//localStorage.setItem('testTracker', JSON.stringify(trackerList));
		/* tracker_store.add(save_tracker); */
	}

	function addEntry() {
		if (selectedEntryType == entryType.number) {
			entry_list = [...entry_list, new NumberEntry(tempname, tempunit)];
		} else if (selectedEntryType == entryType.text) {
			entry_list = [...entry_list, new TextEntry(tempname)];
		} else if (selectedEntryType == entryType.tally) {
			entry_list = [
				...entry_list,
				new TallyCounterEntry(tempname, tempunit, temppair[1], temppair[0])
			];
		} else if (selectedEntryType == entryType.range) {
			entry_list = [...entry_list, new RangeEntry(tempname, temppair[0], temppair[1])];
		} else if (selectedEntryType == entryType.date) {
			entry_list = [...entry_list, new DateTimeEntry(tempname)];
		}

		tempname = '';
		selectedEntryType = '';
		temppair[0] = null;
		temppair[1] = null;
		tempunit = Unit.amount;
	}

	enum entryType {
		number = 'numberEntry',
		text = 'textEntry',
		tally = 'tallyCounterEntry',
		range = 'rangeEntry',
		date = 'dateTimeEntry'
	}

	let selectedEntryType = '';
	let infotxt = [
		"On this page you put in the prefered picture in emoji form to help you easily locate your custom tracker later. Then you choose what type of entries you want to add to your tracker. Then you press create tracker to create your custom tracker.",
	]
</script>

<main>
	<div class="content">
		<NavBar pageTitle="Create Tracker" backLink="/tracker/document" infotext={infotxt}/>
		<div class="inputField" style="max-width: 40%;">
			<button
				class="btn btn-primary mb-3"
				style="font-size: 7vh; border-radius: 50px;"
				on:click={() => emojiTrigger.togglePicker(trigger)}
				id="emoji-trigger"
			>
				<span>{selectedEmoji}</span>
			</button>
		</div>
		<form on:submit|preventDefault={createTracker}>
			<!--div class="inputField" style="max-width: 40%;">
				<button
					class="btn btn-primary mb-3"
					style="font-size: 7vh; border-radius: 50px;"
					on:click={() => emojiTrigger.togglePicker(trigger)}
					id="emoji-trigger"
				>
					<span>{selectedEmoji}</span>
				</button>
			</div-->

			<div class="inputField">
				<input
					class="form-control rounded"
					required
					placeholder="Your tracker's name"
					id="trackername"
					bind:value={trackerName}
				/>
			</div>
			<form on:submit|preventDefault={addEntry}>
				<div class="inputField">
					<h1 for="entry">Entries</h1>
					<select
						class="form-select"
						required
						bind:value={selectedEntryType}
						name="entry"
						id="entry"
					>
						<!-- <option value="" disabled selected>Select an entry</option> -->
						<option value={entryType.number}>Number</option>
						<option value={entryType.date}>Date time</option>
						<option value={entryType.range}>Range</option>
						<option value={entryType.tally}>Tally Counter</option>
						<option value={entryType.text}>Text</option>
					</select>
				</div>
				{#if selectedEntryType !== ''}
					<div class="inputField">
						<h2>Name the entry</h2>
						<input
							required
							class="form-control rounded input"
							placeholder="Entry name"
							bind:value={tempname}
							type="text"
						/>
					</div>
				{/if}

				<!-- Number select -->
				{#if selectedEntryType === entryType.number}
					<UnitSelect bind:selectedUnit={tempunit} />

					<!-- Range select: krav: 1-10  -->
				{:else if selectedEntryType === entryType.range}
					<PairSelect title1="Start" title2="End" bind:pair={temppair} min="1" max="10" />

					<!-- Tally Counter -->
				{:else if selectedEntryType === entryType.tally}
					<PairSelect title1="Inital" title2="Step" bind:pair={temppair} />

					<UnitSelect bind:selectedUnit={tempunit} />
				{/if}

				{#each entry_list as entry}
					<div class="inputField">
						{#if entry instanceof NumberEntry}
							<NumberEntryComponent number_entry={entry} />
						{:else if entry instanceof TextEntry}
							<TextEntryComponent text_entry={entry} />
						{:else if entry instanceof TallyCounterEntry}
							<TallyCounterEntryComponent tally_counter_entry={entry} />
						{:else if entry instanceof RangeEntry}
							<RangeEntryComponent range_entry={entry} />
						{:else if entry instanceof DateTimeEntry}
							<DateTimeEntryComponent date_time_entry={entry} />
						{/if}
					</div>
				{/each}
				<div class="inputField">
					<button type="submit" class="btn btn-primary text-decoration-none">Add Entry</button>
				</div>
			</form>
			<!--hr class="rounded" /-->
			<div class="inputField">
				<button type="submit" class="btn btn-primary text-decoration-none">Create Tracker</button>
			</div>
		</form>
	</div>
</main>

<style>
	/*.big {
		font-size: 4vh;
		color: white;
		text-align: center;
	}*/

	hr.rounded {
		margin: auto;
		margin-top: 5%;
		border-top: 8px solid #bbb;
		border-radius: 5px;
	}

	.inputField {
		max-width: 100%;
		margin: auto;
		margin-top: 5%;
	}

	h1 {
		color: white;
		font-size: 3vh;
		margin-bottom: 3%;
		text-align: center;
	}
	h2 {
		color: white;
		font-size: 2vh;
		margin-bottom: 2%;
		text-align: center;
	}

	.input {
		margin-bottom: 1%;
	}

	button {
		width: 100%;
	}

	.display {
		margin-left: 2%;
		margin-bottom: 2%;
		width: 50px;
		height: 50px;
	}
</style>
