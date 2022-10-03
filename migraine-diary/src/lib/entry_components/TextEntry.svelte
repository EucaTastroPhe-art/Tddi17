<script lang="ts">
	import type { TextEntry } from '$lib/Entries';
	export let is_writable_state: boolean = false;
	export let text_entry: TextEntry;
	export let input: string = '';
</script>

<div class="entry-container">
	<p1>{text_entry.label}</p1>
	<br />
	<textarea rows="2" bind:value={input} id={text_entry.label} disabled={is_writable_state} />
</div>

<style>
	textarea {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		width: 100%;
	}
</style>
