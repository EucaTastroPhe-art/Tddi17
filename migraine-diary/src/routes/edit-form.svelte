<script context="module" lang="ts">
	import BtnBack from '$lib/btn-round.svelte'
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<!-- title-->
<svelte:head>
	<title>Leviate</title>
</svelte:head>

<main>
	<div class="content">
		<!--Home text-->

		<div style="margin-bottom: 1vh; display: flex;">
            <div style="width: 4.5vh; align-self: center; margin-right: 5%;">
                <BtnBack href="/" image_src="/images/btn-back.png"></BtnBack>
            </div>
            <div class="big">
                Edit Form
            </div>
		</div>

		<div class="input-group rounded btnSearch">
			<input type="search" class="form-control rounded" placeholder="Search for attribute to add ..." aria-label="Search"
			aria-describedby="search-addon" />
		</div>
		<!--displayflex-->
		<div class="Flex">

			<div class="accordion reSize" id="accordionExample">
				<div class="accordion-item">
					<button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
						+
					  </button>
				  <h2 class="accordion-header" id="headingOne">
					<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
					  Accordion Item #1
					</button>

				  </h2>
				  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
					<div class="accordion-body">
					  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
					</div>
				  </div>
				</div>
				<div class="accordion-item">
				  <h2 class="accordion-header" id="headingTwo">
					<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
					  Accordion Item #2
					</button>
				  </h2>
				  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
					<div class="accordion-body">
					  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
					</div>
				  </div>
				</div>
				<div class="accordion-item">
				  <h2 class="accordion-header" id="headingThree">
					<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
					  Accordion Item #3
					</button>
				  </h2>
				  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
					<div class="accordion-body">
					  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
					</div>
				  </div>
				</div>
			  </div>

	</div>
</main>

<style>
	.btnSearch{
		position: absolute;
		top:10%;
		width: 100%;
		left:0%;

	}

	.reSize{
		width:100%;
		right:0%;
	}

	.Flex{
		position: absolute;
		display:flex;
		top:20%;
		width: 100%;
		height: 80%;
	}
</style>
