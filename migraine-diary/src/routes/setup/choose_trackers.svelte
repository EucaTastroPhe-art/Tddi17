<script lang="ts">
	import { TrackerStore } from '$lib/stores/Store';
	import type { Tracker } from '$lib/Tracker';
	import { onMount } from 'svelte';

	let tracker_store: TrackerStore = null;

	onMount(() => {
		tracker_store = new TrackerStore();
	});

	function saveSelection() {
		$tracker_store.forEach((tracker: Tracker) => {
			let btn_state = (document.getElementById(tracker.label) as HTMLInputElement).checked;
			tracker.enabled = btn_state;
		});
		tracker_store.sync();
	}
</script>

<!-- title-->
<svelte:head>
	<title>Leviate</title>
</svelte:head>

<main>
	<div class="content">
		<div class="text">
			<!--h4 Utkommenterat till setup används>
				<br />First time setup - Question 4 of 4
			</h4-->

			<h3>
				<br />What do you want to document?
			</h3>

			<h5>
				<br />Choose the options you want to document when you document a migraine attack. you are
				unsure skip this part.
				<span style="font-weight:bold">
					This can be changed along with more options later in the
					<span style="font-style:italic">Edit form</span>
					option.
				</span>
			</h5>
		</div>

		<div
			class="button-grid-container row justify-content-between"
			style="margin-top: 5%; overflow-y: auto; overflow-x: hidden; height: calc(55vh - 5*(0.2vh));"
		>
			{#if tracker_store !== null}
				{#each $tracker_store as tracker}
					<div class="btn-grid col-3 ">
						<div class="btn-grid-btn ">
							<input type="checkbox" class="btn-check" id={tracker['label']} autocomplete="off" />
							<label
								class="btn btn-outline-primary btn-toggle p-0"
								style="font-size:7vh"
								for={tracker['label']}
							>
								{tracker['picture']}
							</label>
						</div>
						<div class="btn-grid-text" id="txt">{tracker['label']}</div>
					</div>
				{/each}
			{/if}
			<!--a Utkommenterad tills login är fixat
				style="font-weight:bold; font-size: 1.8vh; text-align: center;"
				class="btn btn-outline-secondary text-decoration-none GoBack"
				href="/setup/question-three"
				type="button"
			>
				Go Back
			</a-->
			<a
				style="font-weight:bold; font-size: 1.8vh;"
				class="btn btn-secondary btn-block text-decoration-none FinishSetUp"
				href="/home"
				type="button"
				on:click={saveSelection}
			>
				Finish Setup
			</a>
			<!-- <p id="debugText"></p> -->
		</div>
	</div>
</main>

<style>
	/*WhatToDocumentPageCss*/
	.btn-toggle {
		background: gray;
		border: gray;
		width: 100%;
		height: 100%;
	}
	h3 {
		font-size: 5vh;
		color: white;
		margin-top: -9%;
	}
	h4 {
		font-size: 15px;
		color: white;
	}
	h5 {
		color: white;
		font-size: 2vh;
	}
	.GoBack {
		position: absolute;
		bottom: 0;
		width: 40%;
	}
	.FinishSetUp {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 40%;
	}
</style>
