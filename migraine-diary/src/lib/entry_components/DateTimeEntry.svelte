<script lang="ts">
import DateInput from '$lib/DatetimeInput.svelte';

	import type { DateTimeEntry } from '$lib/Entries';
import { writable } from 'svelte/store';

	// Create default DateTime string
	// let now = new Date();
	// now.setHours(now.getHours() + 2);
	export let input = new Date()//= now.toISOString().slice(0, 16); //time string
	
	export let date_time_entry: DateTimeEntry;
	export let is_writable_state : boolean = false; 
</script>

<div class="entry-container">
	<p1>{date_time_entry.label}</p1>
	<br />
	<!-- <input type="time" bind:value={time}> -->
	<!-- <input required type="datetime-local" bind:value={input} /> -->

	<DateInput id={date_time_entry.label} bind:date={input} is_writable_state={is_writable_state}/>
</div>


