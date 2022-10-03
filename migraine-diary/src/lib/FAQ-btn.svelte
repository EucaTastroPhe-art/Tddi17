<script lang=ts>
	export let infotext;
	import BtnBack from '$lib/btn-round.svelte'
	import { onMount } from 'svelte';

	onMount(() => {
		// Get the modal
		var modal = document.getElementById("myModal");
		
		// Get the button that opens the modal
		var btn = document.getElementById("aboutBtn");
		
		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		//When the user clicks the button, open the modal 
		btn.onclick = function() {
			modal.style.display = "block";
		}
		
		//When the user clicks on <span> (x), close the modal
		span.onclick = function() {
			modal.style.display = "none";
		}
	
		//When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}
	});
</script>

<!--open the modal-->



<!--the modal-->
<div id="myModal" class="modal" alt="test1">
    <!--the modal content-->
    <div class="modal-content" alt="box">
		<div class="close" style="margin-bottom: 1vh; display: flex; align-items: center;">
			<div style="width: 4.5vh; margin-right: 5%;">
				<BtnBack image_src="/images/btn-back.png"/>
			</div>
			<p style="font-weight: bold; font-size:4vh; margin:auto; margin-right:40%;">About</p>
		</div>
		<hr class="solid" style="border-top: 3px solid white;">

		<div class="modal-text-content">
			{#each infotext as paragraph}
			<p>{paragraph}</p>
			{/each}
		</div>
	</div>
</div>

<style>
	.modal {
		display: none; /* Hidden by default */
		position: fixed; /* Stay in place */
		z-index: 1; /* Sit on top */
		padding-top: 2vh; /* Location of the box */
		top: 0;
		width:100%; /* Full width */
		height: 100%; /* Full height */
		overflow: auto; /* Enable scroll if needed */
		background-color: rgb(0,0,0); /* Fallback color */
		background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
	}

	/* Modal Content */
	.modal-content {
		max-width: 500px;
		background-color:grey;
		margin: auto;
		padding: 20px;
		border: 1px solid #888;
		width: 95%;
		max-height: 98%;
		font-size: 2.3vh;
	}
	.modal-text-content{
		overflow-y: auto;
	}
	/* The Close Button */
	.close {
		color: #aaaaaa;
		float: right;
		font-size: 28px;
		font-weight: bold;
	}

	.close:hover,
	.close:focus {
		color: #000;
		text-decoration: none;
		cursor: pointer;
	}

	
    </style>