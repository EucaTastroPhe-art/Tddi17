<script>
	import {goto} from '$app/navigation'
    export let tracker_label;
	export let previous_page;
	export let picture;
    //let id_str = "btn-check-outlined-" + text;
	function navigateToTracker() {
		goto("/tracker/tracker?tracker="+tracker_label+"&previous_page="+previous_page)
	}
</script>

<div class="btn-grid">
	<button style="display:block;  font-size:7vh" class="btn btn-primary btn-grid-btn p-0" on:click={navigateToTracker}>
			{picture}
	</button>
	<div class="btn-grid-text">
		{tracker_label}
	</div>
</div>

<style>

</style>