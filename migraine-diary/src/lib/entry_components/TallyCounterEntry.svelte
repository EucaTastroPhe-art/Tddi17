<script lang="ts">
	import type { TallyCounterEntry } from '$lib/Entries';
	export let is_writable_state:boolean = false;
	export let tally_counter_entry: TallyCounterEntry;
	export let input: number = tally_counter_entry.initial_value;
	function increment() {
		var event = new Event('change',);
		document.getElementById("tracker-form").dispatchEvent(event);
		input += tally_counter_entry.step_value;
	}
	function decrement() {
		var event = new Event('change',);
		document.getElementById("tracker-form").dispatchEvent(event);
		input -= tally_counter_entry.step_value;
	}
</script>

<div class="entry-container row justify-content-center">
	<p1>{tally_counter_entry.label}</p1>
	<br />
	<div class="col-2 p-0">
		<button
			class="btn btn-primary text-decoration-none btn-block"
			style="width:40px"
			type="button"
			disabled={is_writable_state}
			on:click={decrement}
		>
			-
		</button>
	</div>
	<div class="col-1 p-0" id={tally_counter_entry.label}>
		<p class="mt-2">{input}</p>
	</div>
	<div class="col-2 p-0">
		<button
			class="btn btn-primary text-decoration-none "
			style="width:40px"
			type="button"
			disabled={is_writable_state}
			on:click={increment}
		>
			+
		</button>
	</div>
</div>
