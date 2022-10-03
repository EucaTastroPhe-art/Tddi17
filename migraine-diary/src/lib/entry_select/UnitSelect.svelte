<script lang="ts">
	import { Unit } from '$lib/Entries';
	export let selectedUnit: Unit;
	const allUnits = Object.values(Unit).filter((val) => val != '');
</script>

<div class="inputField">
	<h2>Select unit</h2>
	<select class="form-select" bind:value={selectedUnit}>
		<option value="">none</option>
		{#each allUnits as unit}
			<option value={unit}>{unit}</option>
		{/each}
	</select>
</div>

<style>
	.inputField {
		max-width: 100%;
		margin: auto;
		margin-top: 5%;
	}

	h2 {
		color: white;
		font-size: 2vh;
		margin-bottom: 2%;
		text-align: center;
	}
</style>
