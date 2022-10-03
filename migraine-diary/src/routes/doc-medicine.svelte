<script context="module" lang="ts">

    import BtnBack from '$lib/btn-round.svelte'

</script>

<script>
	/*import Counter from '$lib/Counter.svelte'; -->*/
</script>

<!-- title-->
<svelte:head>
	<title>Leviate</title>
</svelte:head>

<main>
	<div class="content">
		<div style="margin-bottom: 1vh; display: flex;">
            <div style="width: 4.5vh; align-self: center; margin-right: 5%;">
                <BtnBack href="/home" image_src="/images/btn-back.png"></BtnBack>
            </div>
            <div class="big">
                Document Medicine
            </div>
		</div>
		
		<div class="button-container row justify-content-between">
			<div class="button">
				<input type="checkbox" class="btn-check btnToggle" id="btn-check-outlined1" autocomplete="off" />
				<label class="btn btn-outline-primary btnToggle" for="btn-check-outlined1">
					<img class="picSize" src="/images/plus.png" alt="newtrigger" />
				</label>
				<p class="btnToggleTxt">New Medicine</p>
			</div>
			<div class="button"></div>
			<div class="button"></div>
			<div class="button"></div>
		</div>

		
	</div>
</main>

<style>
	.button-container {
		position: absolute;
		top:28%;
		margin-left: 0;
		width: 38vh;
		height: 100%;
		overflow-y: auto;
		align-items: top;
		justify-content: space-evenly;
		/*border: 1px dotted red; */
		font-size:1vh;
	}
	.button {
		width: 12vh;
		height: 12vh;
		float: left;
		margin: 0vh;
		/*border:1px solid green;*/
		align-self: left;
	}
	.btnToggleTxt {
		text-align:center; 
		width:100%;
		font-weight:bold; 
		font-size:2vh;
		/*border: 1px solid green; */
	}

	.btnToggle {
		background: gray;
		border: gray;
		/* width: 100%;
		height: 100%; */
	}
</style>
