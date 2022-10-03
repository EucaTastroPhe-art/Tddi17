<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import { goto } from '$app/navigation';
	import { v4 } from 'uuid';
	import BtnBack from '$lib/btn-round.svelte'
	import FAQbtn from '$lib/FAQ-btn.svelte';
	if (localStorage.getItem('UserId') === null) {
		localStorage.setItem('UserId', v4());
	}
	let infotext = [
		"This is the home page, the hub of the app. You can choose to document a tracker or view previously logged trackers.",
		"Trackers are for example migraine, coffee, sleep, etc. You can also create your own trackers to track anything that might affect your migraines.",
	];
</script>

<!-- title-->
<svelte:head>
	<title>Leviate</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
</svelte:head>

<FAQbtn infotext={infotext}/>
<main>
	<div class="content">
		<!--Home text-->
		<div class="topbar">
			<h1>HOME</h1>
			<div style="width: 5vh;">
				<BtnBack href="" image_src="/images/questionmark.png" id="aboutBtn"/>
			</div>
		</div>

		<p
			style="position: absolute; font-size:4vh; top: 60%; text-decoration: none; color: white; left:0%"
		>
			<br />DOCUMENT
		</p>
		<!--SECTION START-->
		<section>
			<!--cloud picture-->
			<div class="cloud">
				<picture>
					<source srcset="images/cloud.png" type="image/png" />
					<img src="cloud.png" alt="cloud" style="width:100%; height:auto;" />
				</picture>
			</div>
			<!--text-->

			<p style="position: absolute; font-size:2.8vh;top:37%; text-decoration: none; color: white;">
				<!-- <br />You have been migraine free for X days! -->
			</p>

			<div class="btnTrig">
				<button
					style="font-size:20px; width: 100%; top: 50%"
					class="btn btn-primary text-decoration-none"
					on:click={() => goto("/tracker/document")}
					type="button"
				>
					Trackers
			</button>
			</div>

			<div class="btnMed">
				<button
					style="font-size:20px; width: 100%; top: 50%"
					class="btn btn-primary text-decoration-none"
					on:click={() => goto("/simple-analysis")}
					type="button"
				>
					Logs
			</button>
			</div>
			<!-- <div class="btnMig">
				<a
					style="font-weight:bold; font-size:20px; width: 100%; top: 50%"
					class="btn btn-primary text-decoration-none"
					href="/tracker/tracker?tracker=Migraine"
					type="button"
				>
					Migraine attack
				</a>
			</div> -->

			<!-- <div class="btnAnalysis">
				<a
					style="font-weight:bold; font-size:2.1vh; "
					class="btn btn-primary text-decoration-none"
					href="/analysis"
					type="button"
				>
					<img
						class="noPointerEvent"
						style="width:80%;"
						src="/images/analysis2.png"
						alt="Analysis"
					/>
					Analysis
				</a>
			</div> -->
			<!--SECTION END-->
<!-- 			
			<div class="btnOverview">
				<a
					style="font-weight:bold; font-size:2.1vh;"
					class="btn btn-primary text-decoration-none"
					href="/calendar-overview"
					type="button"
				>
					<img
						class="noPointerEvent"
						style="width:80%;"
						src="/images/overview2.png"
						alt="Overview"
					/>
					Overview
				</a>
			</div> -->

			<!-- <div class="btnEdit">
				<a
					style="font-weight:bold; font-size: 2.1vh; white-space: nowrap align-items:bottom"
					class="btn btn-primary text-decoration-none"
					href="/edit-form"
					type="button"
				>
					<img
						class="noPointerEvent"
						style="width:80%;"
						src="/images/editform2.png"
						alt="Overview"
					/>
					Edit Form
				</a>
			</div> -->
		</section>
	</div>
</main>

<!-- white-space: nowrap -->
<style>
	h1 {
		font-size: 5vh;
		text-align: left;
		margin: 0;
	}
	.topbar{
		/* border: 1px solid #008000; */
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.cloud {
		position: absolute;
		top: 10%;
		display: flex;
		justify-content: center;
		width: 75%;
		height: auto;
		pointer-events: none;
		user-select: none;
	}
	.btnOverview {
		position: absolute;
		top: 50%;
		left: 0%;
		height: 130px;

		width: 30%;
	}
	.btnAnalysis {
		position: absolute;
		top: 50%;

		width: 30%;
	}
	.btnEdit {
		position: absolute;
		top: 50%;
		right: 0%;
		width: 30%;
	}
	.btnTrig {
		position: absolute;
		bottom: 20%;
		text-decoration-color: white;
		width: 100%;
	}
	.btnMed {
		position: absolute;
		bottom: 10%;
		width: 100%;
	}
	.btnMig {
		position: absolute;
		bottom: 0%;
		width: 100%;
	}
</style>
