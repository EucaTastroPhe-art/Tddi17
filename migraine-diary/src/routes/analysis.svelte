<script lang="ts">
    import BtnBack from '$lib/btn-round.svelte';
	import FAQbtn from '$lib/FAQ-btn.svelte';
	import { TrackerStore, TrackerDataStore } from '$lib/stores/Store';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store'
	import type { Writable } from 'svelte/store'
	import type { Tracker } from '$lib/Tracker';

	let selected_tracker : Tracker = null;
	let tracker_store  = null;
	let tracker_data_store : TrackerDataStore = null;
	let something = null;
	let name : string  = "";
	onMount(() => {
		tracker_store = new TrackerStore();
		console.log($tracker_store)
		selected_tracker = ($tracker_store).find(t => t.label == "Migraine");
		console.log(selected_tracker);
		tracker_data_store = new TrackerDataStore("Migraine");
		console.log($tracker_data_store);
	});
	function my_funct(tracker)
	{
		tracker_data_store = new TrackerDataStore(tracker["label"])
		
		return $tracker_data_store
	}

	function byDate(t1,t2)
	{
		let d1 = new Date(t2["Migraine start"]);
		let d2 = new Date(t1["Migraine start"]);
		return d2-d1;					
	}
	function changeTracker()
	{
		tracker_data_store = new TrackerDataStore(selected_tracker.label)
	}

let infotxt =""
</script>

<!-- title-->
<svelte:head>
	<title>Leviate</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
</svelte:head>

<main>

	<div class="content" style="overflow-y: auto; overflow-x:hidden;">

	<div class="chartBox" style="position:absolute; top: 20%; height:100%; width:90%; display:flex-end; align-items:auto; justify-content: center;">
	<!-- start of piechart -->
		<script src="https://cdn.anychart.com/js/8.0.1/anychart-core.min.js"></script>
	<script src="https://cdn.anychart.com/js/8.0.1/anychart-pie.min.js"></script>
	<!-- circ chart??? -->
	

	<!-- <section> -->
	<div style="display:flex width:100%; height: 55%; padding-bottom:10%" id="container"> 
	<!-- </section> -->
<script>
		anychart.onDocumentReady(function() {
		var low = 1;
		var medium = 3;
		var high = 2;

	var data = 
	[
		{x: "Low", value: low},
		{x: "Medium", value: medium},
		{x: "High", value: high}
	];

	// create the chart
	var chart = anychart.pie();

	// set the chart title
	chart.title("Migraine Intensity");

	// add the data
	chart.data(data);
	
	chart.tooltip().useHtml(true);
	var background = chart.tooltip().background();
	background.fill("#333333 0.8");
	//chart.background().fill("#333333");
	chart.background().cornerType("round");
	chart.background().corners(15,15, 15, 15);

	// display the chart in the container
	chart.container('container');
	chart.draw();

	});
	
</script>
</div>







</div>
	<div class="tptext" style="position:absolute;top:3%;color:white;font-weight:bold;">
		<br/>Time Period:	
	</div>
	<div class="frtext" style="position:absolute;top:8%;color:lightgrey;">
		<br/>From:	

			<!-- Trigger/Open The Modal -->
<button class="button" style="position:absolute;bottom:-5%;background-color:grey;outline-color:grey;left:110%;height:auto;
vertical-align:text-top; " 
id="myBtn">From</button>

	</div>
	<div class="totext" style="position:absolute;top:8%;color:lightgrey;left:35%;">
		<br/>To:
		
		<button class="button" style="position:absolute;bottom:-5%;left:110%;height:auto; background-color:grey;outline-color:grey" 
		id="myBtn2">Now</button>	

		<button class="btn btn" style="position:absolute;bottom:-10%;left:600%;height:6.5vh;width:9vh;
 		background-image:url(/images/print.png); background-size:100%;background-repeat:no-repeat; outline-color:grey" 
		id="myBtn3"></button>

	</div>
	

	<div style="width: 4.5vh; align-self: center; margin-right: 5%;">

		<BtnBack href="/" image_src="/images/btn-back.png"></BtnBack>
	</div>
	

	<section>
	<p
	style="position: absolute; font-size:4vh;font-weight:bold; top:-6%; text-decoration: none; color: white; "
	>
	<br />ANALYSIS
	</p>
	<div style="position:absolute; top:=; right:0;">
		<FAQbtn infotext={infotxt} />
	</div>
	 </section> 
	 

<!-- The Modal -->
<div id="myModal" class="modal" alt="test1">

  <!-- Modal content -->
  <div class="modal-content" alt="box">
    

	 
	<div class="close">
		<div style="width: 4.5vh; align-self: left; margin-right: 5%;">
			<BtnBack image_src="/images/btn-back.png"></BtnBack>
		</div>
	</div>



    <p style="font-weight: bold;font-size:4vh;position:absolute;top:0%;left:30%;">CHOOSE TIME PERIOD</p>
 
	  

	<div class="trying1" style="position:absolute; width:35%;height:14%;bottom:0%;left:3%;">
			<img src="/images/setflag.png" alt="asd" style="width:120%;height:100%;bottom:0%;" 
			onclick="functionHere" role="button" tabindex="0"  >
		</div>	

	<div class="checkmarkfrom" style="position:absolute; width:15%;height:15%;bottom:2%;right:10%;">
		<img src="/images/checkmark.png" alt="asd" style="width:100%;height:100%;bottom:0%;"  >
	</div>
  </div>
  



 
</div>


<script>
	// Get the modal
	var modal = document.getElementById("myModal");
	
	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");
	
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	
	// When the user clicks the button, open the modal 
	btn.onclick = function() {
	  modal.style.display = "block";
	}
	
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}
	
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) {
		modal.style.display = "none";
	  }
	}
</script>



<!-- The Modal -->
<div id="myModal2" class="modal" alt="test2">

  <!-- Modal content -->
  <div class="modal-content" alt="box2">
    

	<div class="close2">
		<div style="width: 4.5vh; align-self: left; margin-right: 5%;">
			<BtnBack image_src="/images/btn-back.png"></BtnBack>
		</div>
	</div>

	<div class="trying2" style="position:absolute; width:35%;height:14%;bottom:0%;left:3%;">
		<img src="/images/setflag.png" alt="asd" style="width:120%;height:100%;bottom:0%;" 
		onclick="functionHere" role="button" tabindex="0"  >
	</div>

	<div class="checkmarkto" style="position:absolute; width:15%;height:15%;bottom:5%;right:10%;">
		<img src="/images/checkmark.png" alt="asd" style="width:100%;height:100%;bottom:0%;">
	</div>
	
    <p style="font-weight: bold;font-size:4vh;position:absolute;top:0%;left:30%;">CHOOSE TIME PERIOD</p>
  </div>
 
</div>

<script>
	// Get the modal
	var modal2 = document.getElementById("myModal2");
	
	// Get the button that opens the modal
	var btn2 = document.getElementById("myBtn2");
	
	// Get the <span> element that closes the modal
	var span2 = document.getElementsByClassName("close2")[0];
	
	// When the user clicks the button, open the modal 
	btn2.onclick = function() {
	  modal2.style.display = "block";
	}
	
	// When the user clicks on <span> (x), close the modal
	span2.onclick = function() {
	  modal2.style.display = "none";
	}
	
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) {
		modal2.style.display = "none";s
	  }
	}
	</script>


<!-- The Modal -->
<div id="myModal3" class="modal" alt="test3">

  <!-- Modal content -->
  <div class="modal-content" alt="box"style="border: 1px dotted blue;">
    

	<div class="close3">
		<div style="width: 4.5vh; align-self: left; margin-right: 5%;">
			<BtnBack image_src="/images/btn-back.png"></BtnBack>
		</div>
	</div>
    <p style="font-weight: bold;font-size:4vh;position:absolute;top:0%;left:28%;">Print Analysis</p>

	<div class="trying2" style="position:absolute; width:60%;height:20%;bottom:0%;left:20%;border: 1px dotted blue;">
			<img src="/images/download.png" alt="asd" style="width:100%;height:100%;bottom:0%;">
		</div>	

  </div>
</div>
<script>
	// Get the modal
	var modal3 = document.getElementById("myModal3");
	
	// Get the button that opens the modal
	var btn3 = document.getElementById("myBtn3");
	
	// Get the <span> element that closes the modal
	var span3 = document.getElementsByClassName("close3")[0];
	
	// When the user clicks the button, open the modal 
	btn3.onclick = function() {
	  modal3.style.display = "block";
	}
	
	// When the user clicks on <span> (x), close the modal
	span3.onclick = function() {
	  modal3.style.display = "none";
	}
	
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) {
		modal3.style.display = "none";
	  }
	}
</script>
    </div>
	<!-- <div style= "border:1px dotted red; position:absolute; top:20%;color:white;font-size:2vh;">
			<!-- {$tracker_store} -->
			<!-- {$tracker_data_store} -->

	<!-- </div>  --> 

</main>

<style>
	

	.modal {
		display: none; /* Hidden by default */
		position: fixed; /* Stay in place */
		z-index: 1; /* Sit on top */
		padding-top: 100px; /* Location of the box */
		left: 0;
		top: 0;
		width: 100%; /* Full width */
		height: 100%; /* Full height */
		overflow: auto; /* Enable scroll if needed */
		background-color: rgb(0,0,0); /* Fallback color */
		background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
	}

	/* Modal Content */
	.modal-content {
		background-color:aqua;
		margin: auto;
		padding: 20px;
		border: 1px solid #888;
		width: 80%;
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


	/*analysisCss*/
	.modal {
		display: none; /* Hidden by default */
		position: fixed; /* Stay in place */
		z-index: 1; /* Sit on top */
		left: 0;
		top: 0;
		width: 100%; /* Full width */
		height: 100%; /* Full height */
		overflow: auto; /* Enable scroll if needed */
		background-color: rgb(0,0,0); /* Fallback color */
		background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
	}

	/* Modal Content/Box     */
	.modal-content {
		background-color:#333333;
		margin: 15% auto; /* 15% from the top and centered */
		padding: 20px;
		border: 1px solid #888;
		width: 80%; /* Could be more or less, depending on screen size */
		height:50%;
	}

	.content
	{
		align-items: center;
	}






</style>
