<script lang="ts">
	import type { NumberEntry } from '$lib/Entries';
	export let number_entry: NumberEntry;
	export let input: string = '';
	export let is_writable_state:boolean = false;
</script>

<div class="entry-container">
	<p1>{number_entry.label}</p1>
	<br />
	<input required type="number" bind:value={input} id={number_entry.label} disabled={is_writable_state}/>
	<p2>{number_entry.unit}</p2>
</div>


