<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>
<!-- title-->
<svelte:head>
	<title>Leviate</title>
</svelte:head>
<!--Home text-->
<h1>
What do you want to document?
</h1>
<h2>
Choose the options you want to document when you document a migraine attack.If you are unsure skip this part.<span style="font-weight:bold" >
This can be changed along with more options later in the <span style ="font-style:italic"> Edit form</span> option.</span> 
</h2>

<h3>
<span  style="color:white; font-weight:bold" >First time setup - Question 4 of X	</span> 
</h3>

<style>
h1
{
	position: absolute;
	left: 6%;
	top: 8%;
	font-size: 50px;
	font-weight: bold;
	
}
h2
{
	position: absolute;
	left: 6%;
	top: 22%;
	font-size: 15px;
}
h3
{
	position: absolute;
	left: 0%;
	top: 0%;
	font-size: 20px;
}


</style>