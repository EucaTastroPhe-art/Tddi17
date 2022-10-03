<script lang='ts'>
    import BtnBack from '$lib/btn-round.svelte';
    import FAQbtn from '$lib/FAQ-btn.svelte';
    import { onMount } from 'svelte';
    
    export let pageTitle;
    export let backLink = "";
    export let infotext: string[] = ["about page"];
    
    export let feedbackEnabled: boolean = true;
    export let useHistoryBack: boolean = false;
    
    export let currentPage = window.location.pathname+window.location.search+window.location.hash;
    
    const BACK_BTN_IMG = "/images/btn-back.png";
    const ABOUT_IMG = "/images/questionmark.png";
    const FEEDBACK_IMG = "/images/exclamationmark.png";

    const FEEDBACK_LINK = "/feedback?var="+currentPage;
 
    onMount(() => {
        if (backLink == "" || backLink === undefined) {
            useHistoryBack = true;
        }

        var mybtn = document.getElementById("backbtn");
        if (mybtn && useHistoryBack) {
            mybtn.onclick = () => {
                window.history.back();
                return false;
            }
        }
    });

</script>
<FAQbtn infotext={infotext}/>
<div id="outercontainer">
    <div id="left">
        <div class="gobackbtn">
            <BtnBack href={backLink} image_src={BACK_BTN_IMG} id="backbtn" />
        </div>
        <div class="pagetitle">
            <h1>{pageTitle}</h1>
        </div>
    </div>
    
    <div id="right">
        <div class="about-feedback-btn">
            <BtnBack href="" image_src={ABOUT_IMG} id="aboutBtn" />
        </div>
        {#if feedbackEnabled}
        <div class="about-feedback-btn">
            <BtnBack href={FEEDBACK_LINK} image_src={FEEDBACK_IMG} id="feedbackbtn" />
        </div>
        {/if}
    </div>
    
</div>

<style>
    .about-feedback-btn {
        max-width: 48%;
        min-width: max(35px, 4.8vh);
    }

    .gobackbtn {
        min-width: max(35px, 4.8vh); 
        max-width: 4.8vh;
        margin-right: 5px;
    }

    h1 {
        max-width: 100%;
        height: 100%;
        font-size: clamp(25px, 4vh, 60px);
        text-align: left;
        margin-top: 2px;
        color: white;
    }

    .pagetitle {
        min-height: 100%;
        text-align: center;
        display: flex;
    }
 
    #outercontainer {
        overflow: hidden;
        max-width: 100%;
        width: 100%;
        min-height: 5vh;
        display: flex;                  /* establish flex container */
        justify-content: space-between; /* switched from default (flex-start, see below) */
        /* align-items: center ; */
    }
    #left {
        flex: 1;
        display: flex;
        justify-content: start;
        margin-right: 5px;
    }
    #right {
        display: flex; 
        flex-direction: row;
        gap: 3px; 
        min-width: 70px;
        max-width: 10vh;
        max-height: 100%;
        justify-content: flex-end;
    }
    
</style>