<script>
    import BtnBack from '$lib/btn-round.svelte'

    import { InlineCalendar } from 'svelte-calendar';
	import { base } from '$app/paths';

	const theme = {
		calendar: {
            width: "43vh",
			colors: {
                text:{
                    primary:"#84b280",
                    highlight: "black"
                },
				background: {
                    primary: "#333",
					highlight: "D0D3D4",
                    hover: "#C0392B "
				}
			},
            font:{
                regular:"1.5em",
                large:"37em"
            },
            grid:
            {
                diabledOpacity: ".1",
                outsiderOpacity: ".93"
            }
		}
	};



</script>


<main>
	<div class="content">
        <h1>  
            <div style="width: 4.5vh; align-self: center; margin-right: 5%;float:left;">
                <BtnBack href="/" image_src="/images/btn-back.png"></BtnBack></div>
            <div style="font-size: 5vh; text-alifn:left; float:left;">
                CALENDAR</div>
                <div style="width: 4.5vh; align-self: center; margin-right: 5%;float:right;">
                    <BtnBack href="/feedback?var=analysis" image_src="/images/questionmark.png"></BtnBack></div>
            <!-- <a class="btn btn-primary text-decoration-none" href="/home" type="button">
                    <img class="picSize2" width="36vh" style="float:right;" height="36vh" src="/images/questionmark.png" alt="?">
            </a> -->
        </h1>
        <h2>
            <InlineCalendar {theme} />
        </h2>
  
    </div>



</main>



<style>
    h1 {
        vertical-align: text-top;
        width:45vh;
        text-align: left;
    }
    h2 {
        padding-top:7vh;
    }

</style>
