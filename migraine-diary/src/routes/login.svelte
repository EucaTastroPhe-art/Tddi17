<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
</script>

<!-- title-->
<svelte:head>
	<title>Leviate</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
</svelte:head>

<main>
	<div class="content">
		<div class="big" style="font-size: 7vh;">
			Log in
		</div>

		<div style="margin-top: 7%;">
			<div class="whitetext">Username</div>
			<div class="input-group input-group-lg mb-2">
				<span class="input-group-text"><i class="fa fa-user"></i></span>
				<input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
			</div>
	
			<div class="whitetext">Password</div>
			<div class="input-group input-group-lg mb-2">
				<span class="input-group-text"> <i class="fa fa-key"></i></span>
				<input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
			</div>
	
			<ul class="nav justify-content-end">
				<li class="nav-item">
				<a class="nav-link active" href="#" aria-current="page" style="color: #3284FF; font-size: 1.8vh; padding: 0;">
					Forgot password?
				</a>
			</ul>
		</div>

		<div style="position: absolute; bottom: 0; width: 100%;">
			<a 
				class="btn btn-primary btn-lg text-decoration-none btn-log-in" 
				href="setup/welcome-page"> 
				Log in
			</a>

			<div class="strike" style="padding-top: 5%; padding-bottom: 2%;">
				<span style="color: white;">OR</span>
			</div>

			<div class="btn-external-signup">
				<a class="btn btn-lg text-decoration-none btn-fullwidth btn-google" href="#"><i class="fa fa-google"></i> Sign up with google</a>
			</div>
			<div class="btn-external-signup">
				<a class="btn btn-lg text-decoration-none btn-fullwidth btn-apple" href="#"><i class="fa fa-apple"></i> Sign up with apple</a>
			</div>
			<div class="signup">
				Dont have an account? 
				<a href="/create-account" style="color: #3284FF;">
					Sign Up!
				</a>
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
	.signup {
		color:white;
		padding-top: 10%;
		padding-bottom: 2%;
		text-align: center;
		font-size: 2.5vh;
	}
    .whitetext {
        color: white;
    }
    .btn-external-signup {
        padding-top: 3%;
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
	.btn-log-in {
        width: 75%;
        margin-left: 12.5%;
        bottom: -7%;
		font-size: 4vh;
		color: white;
    }
</style>