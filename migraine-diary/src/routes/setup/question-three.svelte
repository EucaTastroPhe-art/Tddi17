<main>
    <div class="content">
        <div class="small">
            First time setup - Question 3 of 4
        </div>
        <div class="big" style="font-size: 5vh;">
            Do you want to get a migraine prediction?
        </div>

        <a class="btn btn-outline-primary btn-yes text-decoration-none" href="/setup/question-four"> Yes</a>  
        <a class="btn btn-outline-primary btn-no text-decoration-none" href="/setup/question-four"> No</a>
        
        <p class="description">
            This experimental function will use the data you fill
            out in order to estimate when you will have your next
            migraine attack.
        </p>

        <a 
            style="font-weight:bold; font-size: 1.8vh; text-align: center;" 
            class="btn btn-outline-secondary text-decoration-none lefthand" 
            href="/setup/question-two" 
            type="button">
            Go Back
        </a>
        <a 
            style="font-weight:bold; font-size: 1.8vh;" 
            class="btn btn-outline-secondary btn-block text-decoration-none righthand" 
            href="/setup/question-four" 
            type="button">
            Skip question
        </a>
    </div>
</main>


<style>
    .small {
        font-size: 15px;
        margin-top: 3%;
        margin-bottom: 2%;
        color:white;
    }
    .btn-yes {
        font-size: 50px; 
        width: 47%;
        height: 90px;
        margin-top: 15%;
        /* border: 1px solid red; */
    }
    .btn-no {
        font-size: 50px; 
        width: 47%;
        height: 90px;
        margin-top: 15%;
        float: right;
        /* border: 1px solid red; */
    }
    .description {
        position: relative;    
        margin-top: 2%;
        font-size: 2vh;
        /* border: 1px solid red; */
    }
    .lefthand {
        position: absolute;
        bottom: 1.5%;
        width: 40%;
        /*border: 1px solid red; */
    }
    .righthand{
        position: absolute;
        bottom: 1.5%;
        right: 0;
        width: 40%;
        text-align: center;
        /* border: 1px solid red; */
    }
</style>