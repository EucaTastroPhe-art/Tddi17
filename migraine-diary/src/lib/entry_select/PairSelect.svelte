<script lang="ts">
	export let pair = [];
	export let title1: string;
	export let title2: string;
	export let min = undefined,
		max = undefined;
</script>

<div class="input-group mb-3 inputField">
	<div class="input-group-prepend">
		<span class="input-group-text left">{title1}</span>
		<span class="input-group-text right">{title2}</span>
	</div>
	<input
		required
		bind:value={pair[0]}
		{min}
		max={pair[1] ? Math.min(pair[1] - 1, max) : max}
		class="form-control rounded"
		type="number"
	/>
	<input
		id="maxNumber"
		required
		bind:value={pair[1]}
		min={pair[0] ? Math.max(pair[0] + 1, min) : min}
		{max}
		class="form-control rounded"
		type="number"
	/>
</div>

<style>
	.left {
		float: left;
		border-top-right-radius: 0px;
		border-bottom-right-radius: 0px;
		border-right: 1px solid black;
	}
	.right {
		border-top-left-radius: 0px;
		border-bottom-left-radius: 0px;
	}
	.inputField {
		max-width: 100%;
		margin: auto;
		margin-top: 5%;
		/*input-group mb-3*/
	}
</style>
