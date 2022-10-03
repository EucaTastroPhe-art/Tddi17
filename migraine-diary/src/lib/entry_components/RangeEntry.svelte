<script lang="ts">
	import type { RangeEntry } from '$lib/Entries';

	export let range_entry: RangeEntry;
	export let input = '';
	export let is_writable_state: boolean = false;
	let values = [];
	for (let i = range_entry.min; i <= range_entry.max; i++) {
		values.push(i);
	}
</script>

<div class="entry-container">
	<p1>{range_entry.label}</p1>
	<br />
	<!-- 	<strong>Selected: {input}</strong> -->

	{#each values as val}
		<div class="rangeelement">
			<!--label for="val">{val}</label-->
			<input
				required
				type="radio"
				name="RangeEntryLabel"
				value={val}
				bind:group={input}
				id={range_entry.label}
				disabled={is_writable_state}
			/>
			<label for="val">{val}</label>
		</div>
	{/each}
</div>

<style>
	label {
		display: block;
	}

	input[type='radio'] {
		appearance: none;
		background-color: gray;
		width: 1em;
		height: 1em;
		border: 0.15em solid white;
		border-radius: 50%;
		-webkit-appearance: none;
	}
	input[type='radio']:checked {
		background-color: #84b280;
	}
	.rangeelement {
		display: inline-table;
		text-align: center;
		width: 7%;
	}
</style>
