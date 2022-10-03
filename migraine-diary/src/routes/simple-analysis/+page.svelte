<script lang="ts">
	import NavBar from '$lib/navigationbar.svelte';

	import { TrackerStore, TrackerDataStore } from '$lib/stores/Store';
	import { onMount } from 'svelte';
	import type { Tracker } from '$lib/Tracker';
	import DateInput from '$lib/DateInput.svelte';
	import { goto } from '$app/navigation';

	let selected_tracker: Tracker = null;
	let selected_trackers_array: Tracker[] = [];
	let tracker_store : TrackerStore = null;
	let tracker_data_store: TrackerDataStore = null;
	let date_headings : String[] = []
	let tracker_and_data_array : [Tracker, any][] = []

	let fromDate = new Date();
	fromDate.setMonth(fromDate.getMonth() - 1);
	let toDate = new Date();
	toDate.setHours(24);
	toDate.setMinutes(0);

	onMount(() => {
		tracker_store = new TrackerStore();
		selected_tracker = $tracker_store.find((t) => t.label == 'Migraine');
		selected_trackers_array.push(selected_tracker);
		update_tracker_and_data();
	});

	function byDate(t1, t2) {
		let d1 = new Date(t2['Date and time']);
		let d2 = new Date(t1['Date and time']);
		let val = d1 - d2;
		return val
	}

	function update_tracker_and_data() {
		date_headings = []
		tracker_and_data_array = [];
		for (let i = 0; i < selected_trackers_array.length; i++) {
			const tracker = selected_trackers_array[i];
			tracker_data_store = new TrackerDataStore(tracker.label);
			console.log(tracker);
			$tracker_data_store
				.filter( t => { 
					let date = new Date(t['Date and time']);
					return date >= fromDate && date <= toDate;
				})
				.map(d => [tracker, d])
				.forEach(tracker_and_data => tracker_and_data_array.push(tracker_and_data));
		}
		tracker_and_data_array.sort((t_d1, t_d2) => {
			console.log(t_d1[1]);
			return byDate(t_d1[1], t_d2[1])
		});
	}

	function change_selected_tracker(selected_tracker) {
		if (selected_tracker == 'Showall') {
			selected_trackers_array = $tracker_store;
		} else {
			selected_trackers_array = [selected_tracker];
		}
		update_tracker_and_data();
	}

	let infotxt = [
		'On this page you put in the time span you want, using the two date-fields. Then select what type of tracker you want e.g. Migraine and it will show you the Logs for that tracker in the chosen timespan. You can also choose to print/save a log file of all saved trackers.',
		"For example, if you want to see migraines logged between 7th and 8th december you select 7th december in the 'from' field and 8th december in the 'to' field, and the 'migraine' tracker in the tracker field."
	];

	function getLocalStorage() {
		var a = {};
		for (var i = 0; i < localStorage.length; i++) {
			var k = localStorage.key(i);
			var v = localStorage.getItem(k);
			a[k] = v;
		}
		var s = JSON.stringify(a);
		return s;
	}

	function download(filename, text) {
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', filename);

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);
	}

	function start_download() {
		download('backup_migrainediary.json', getLocalStorage());
	}

	function onEditLog(tracker, tracker_date_time) {
		goto(
			'/tracker/tracker?tracker=' +
				tracker.label +
				'&previous_page=logs&log_date_time=' +
				tracker_date_time
		);
	}
	function onDeleteLog(tracker, tracker_data) {
		let should_delete = window.confirm('Are you sure you want to delete this log entry?');
		if (should_delete) {
			console.log(tracker_data)
			tracker_data_store = new TrackerDataStore(tracker.label);
			tracker_data_store.remove(tracker_data);
			update_tracker_and_data();
		}
	}


	function is_new_date(date) {
		if (!date_headings.includes(date.toDateString())) {
			date_headings.push(date.toDateString());
			return true;	
		} else {
			return false;
		}
	}

</script>

<svelte:head>
	<title>Leviate</title>
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
	/>
</svelte:head>

<main>
	<div class="content">
		<div style="margin-bottom: 1vh; display: flex; align-items: center;">
			<div  style="width: 80%;">
				<NavBar pageTitle="LOGS" backLink="/" infotext={infotxt}/>
			</div>

			<button
				class="button"
				on:click={start_download}
				style="background: url(images/print.png); background-size:100%; background-repeat:no-repeat;"
			/>
		</div>

		<div class="container">
			<div class="row">
				<h2>Time Period:</h2>
			</div>
			<div class="row">
				<div class="col">
					<p class="medium">
						From: <DateInput bind:date={fromDate} id="from-date" on:change={update_tracker_and_data}/>
					</p>
				</div>
				<div class="col">
					<p class="medium">
						To: <DateInput bind:date={toDate} id="to-date" on:change={update_tracker_and_data} />
					</p>
				</div>
			</div>

			<div class="row mt-2">
				<div class="col">
					<p class="bold">Select Tracker:</p>

					{#if tracker_store !== null}
						<select
							style="width:auto;"
							class="form-select mt-0"
							bind:value={selected_tracker}
							on:change={() => change_selected_tracker(selected_tracker)}
							name="selected_tracker"
							id="selected_tracker"
						>
							<option value={'Showall'}> Show all </option>
							{#each $tracker_store as tracker}
								<option value={tracker}>{tracker.label} {tracker.picture}</option>
							{/each}
						</select>
					{/if}
				</div>
			</div>

			<div class="row">
				<div class="col">
					{#if tracker_store !== null}
						{#each tracker_and_data_array as [tracker, tracker_data]}
							<div class="row mt-3">
								<div class="medium col">
									{#if is_new_date(new Date(tracker_data['Date and time']))}
										<span style="text-decoration:underline">
											{new Date(tracker_data['Date and time']).toDateString()}
										</span>
									{/if}
								</div>
							</div>
							<div class="row log-box">
								<div class="col">
									<span style="text-decoration:underline">{tracker.label}</span>
									{tracker.picture}
									{#each tracker.entries as entry}
										{#if entry.type === 'dateTime'}
											{#if entry.label === 'Date and time'}
												<div class="row">
													<div class="medium">
														Time: {new Date(tracker_data[entry['label']]).toLocaleTimeString([], {
															hour: '2-digit',
															minute: '2-digit'
														})}
													</div>
												</div>
											{:else}
												<div class="row">
													<div class="medium">
														{entry['label']}: {new Date(
															tracker_data[entry['label']]
														).toLocaleString()}
													</div>
												</div>
											{/if}
										{:else}
											<div class="row">
												<div class="medium">{entry['label']}: {tracker_data[entry['label']]}</div>
											</div>
										{/if}
									{/each}
								</div>
								<div class="col-auto">
									<div class="row mt-1">
										<div class="col">
											<button
											type="button"
											class="btn btn-primary btn-sm mb-2"
											style="width:fit-content"
											on:click={() => onEditLog(tracker, tracker_data['Date and time'])}>
											Edit
										</button>
									</div>
									</div>
									<div class="col">
										<div class="row">
											<button
											type="button"
											class="btn btn-danger btn-sm"
											style="width:fit-content"
											on:click={() => onDeleteLog(tracker, tracker_data)}>
											Delete
										</button>
									</div>
								</div>
								</div>
							</div>
						{/each}
					{/if}
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.log-box {
		background: #808080;
		color: #ffffff;
		border: unset;
		border-radius: 6px;
		padding: 0.5rem;
		cursor: pointer;
		margin: 0 auto;
		text-align: left;
	}
	.button {
		border: none;
		padding: 5vh;
	}
</style>
