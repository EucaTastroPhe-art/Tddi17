<script>
    import BtnBack from '$lib/btn-round.svelte'
</script>

<main>
    <div class="content">
        <div style="margin-bottom: 1vh; display: flex">
            <div style="width: 4.5vh; align-self: center; margin-right: 5%;">
                <BtnBack href="/" image_src="/images/btn-back.png"></BtnBack>
            </div>
            <div class="big" style="font-size: 7vh;">
                Sign Up
            </div>
        </div>

        <div>
            <div class="mb-1 whitetext f-name">
                <label for="createaccountform" class="form-label">First name</label>
                <input type="name" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="John">
            </div>
            <div class="mb-1 whitetext l-name">
                <label for="createaccountform" class="form-label">Last name</label>
                <input type="name" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Doe">
            </div>
        </div>

        <div>
            <label for="createaccountform" class="form-label whitetext">Username</label>
            <div class="input-group mb-1">
                <span class="input-group-text"><i class="fa fa-user"></i></span>
                <input type="text" class="form-control form-control-lg" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <label for="createaccountform" class="form-label whitetext">Password</label>
            <div class="input-group mb-1">
                <span class="input-group-text"> <i class="fa fa-key"></i></span>
                <input type="password" class="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
            </div>
        </div>

        <div style="position: absolute; bottom: 0; width: 100%;">
            <a 
                class="btn btn-primary btn-lg text-decoration-none btn-create-account" 
                href="/home"> 
                Create account
            </a>
        
            <ul class="nav justify-content-end">
                <li class="nav-item">
                <a class="nav-link active" href="#" aria-current="page" style="color: #3284FF; font-size: 1.8vh; padding-bottom: 0;">
                    Need Help?
                </a>
            </ul>
    
            <div class="strike" style="padding-bottom: 2%;">
                <span style="color: white;">OR</span>
            </div>
    
            <div class="btn-external-signup">
				<a class="btn btn-lg text-decoration-none btn-fullwidth btn-google" href="#"><i class="fa fa-google"></i> Sign up with google</a>
			</div>
			<div class="btn-external-signup">
				<a class="btn btn-lg text-decoration-none btn-fullwidth btn-apple" href="#"><i class="fa fa-apple"></i> Sign up with apple</a>
			</div>
        </div>
    </div>
</main>

<style>
    .strike {
		display: block;
		text-align: center;
		overflow: hidden;
		white-space: nowrap; 
	}
	.strike > span {
		position: relative;
		display: inline-block;
	}
	.strike > span:before,
	.strike > span:after {
		content: "";
		position: absolute;
		top: 50%;
		width: 9999px;
		height: 1px;
		background: rgb(255, 255, 255);
	}
	.strike > span:before {
		right: 100%;
		margin-right: 15px;
	}
	.strike > span:after {
		left: 100%;
		margin-left: 15px;
	}
    .f-name {
        width: 47%;
        float: left;
    }
    .l-name {
        width: 47%;
        float: right;
    }
    .btn-external-signup {
        width: 100%;
        padding-top: 10px;
    }
    .btn-fullwidth {
		width: 100%;
	}
    .btn-apple {
        background-color: black;
        border-color: black;
        color: white;
    }
    .btn-google {
        background-color: white;
        border-color: white;
        color: black;
    }
    .btn-google:hover {
        background-color:lightgray;
        border-color: lightgray;
        color: black;
    }
	.btn-apple:hover {
		background-color: #141414;
		border-color: #141414;
	}
    .btn-create-account {
        width: 75%;
        margin-top: 3%;
        margin-left: 12.5%;
		font-size: 4vh;
		color: white;
    }
</style>1