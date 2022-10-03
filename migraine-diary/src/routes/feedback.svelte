<script context="module" lang="ts">
	import BtnBack from '$lib/btn-round.svelte'
	import NavBar from '$lib/navigationbar.svelte';
	export async function load({ page, fetch, seesion, stuff }) {
		// Send URL query parameters (e.g. "?tracker=Migraine") to the export variable called trackerLabel.
		return { props: { referer_label: page.query.get('var'), p1: page } };
	}
</script>

<script lang="ts">
import { goto } from "$app/navigation";

	export let referer_label: string;
	// <div style="width: 4.5vh;">
	// 		<BtnBack href="/feedback?var=DocumentTracker" image_src="/images/questionmark.png"></BtnBack>
	// </div>
	let UID = localStorage.getItem('UserId');
	let infotxt = [
		"On this page you can send feedback to us if you find something to be faulty, broken, missing, etc.",
		"Title: A fitting title briefly describing your feedback",
		"Type of feedback: Use 'General feedback' for problems not specific to one page. And use 'Last Page' for problems specific to the most recent page you visited.",
		"Comment: Body op text describing your problem and how to reproduce it, the more information you can give us here the easier it is for us to fix the problem.",
		"Screenshot: Attach a screenshot (image) showing the problem if needed. Completly optional but could help a great deal.",
		"Email address: Also completly optional but if you want to be notified when the problem has been fix then do include this.",
		"Include UserID: Includes your UID (specific to your account)."
	]
</script>

<!-- title-->
<svelte:head>
	<title>Leviate</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
</svelte:head>

<main>
	<div class="content" style="overflow-x: hidden;">
		<!--Home text-->
		<NavBar pageTitle="Feedback" useHistoryBack={true} feedbackEnabled={false} infotext={infotxt}/>

		<form 
			action="https://getform.io/f/b305fb12-ac3f-43b2-aa4f-56dd34da5258"
			enctype="multipart/form-data"
			method="POST"
			target="_blank"
			style="align-items: center"
		>
			<div class="form-group" style="color: white; font-size: 3vh;"> 
				<!-- Title-->
				<label for="Title">Title:</label>
				<textarea type="text" name="title" class="form-control" rows="1" style="margin-bottom: 1vh" required></textarea>
				
				<!-- Dropdown-->
				<label for="Feedback">Type of feedback:</label>
				<select name="feedbackType" class="form-control" id="feedbackType" style="margin-bottom: 1vh">
				  <option value="General">General feedback</option>
				  <option value={referer_label}>Last Page ({referer_label})</option>
				</select>

				<!-- Comment text Box -->
				<label for="comment">Comment:</label>
				<textarea type="text" name="comment" class="form-control" rows="4" style="margin-bottom: 1vh" required></textarea>

				<!-- File input -->
				<label for="file">Screenshot (optional):</label>
				<input type="file" name="file" accept="image/png, image/gif, image/jpeg" style="margin-bottom: 1vh; margin-right: 10vh; font-size: 2vh;">
				<!-- Email input -->
				<label for="email">Enter Email (optional):</label>
				<input
					type="email"
					name="email"
					placeholder="example@mail.com"
					style="width: 100%; margin-bottom: 1vh;"
			  	/>

				<!-- UserId checkBox -->
				<label for="file">Include your UserID:</label>
				<input class="form-check-input" style="font-size: 3vh;" type="checkbox" id="scales" value={UID} name="UserID" checked>
				
				<!-- Send feedback button -->
				<input class="btn btn-primary" type="submit" alt="submit" value="Send Feedback" style="width:100%; margin-top: 3vh; font-size:3vh;">
			</div>
		</form>
</main>

<style>
</style>
