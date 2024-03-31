<script>
	import { goto } from '$app/navigation';
	import myImage from '$lib/images/banner-img-1.png';
	import myImage2 from '$lib/images/banner-img-2.png';
	import { login } from '$lib/auth.js';
	let users = [
		{ username: 'dishankshah@gmail.com', password: 'dishank' },
		{ username: 'siddharthshah@gmail.com', password: 'siddharth' }
	];

	let username = '';
	let password = '';
	let errorMessage = '';
	function handlelogin(event) {
		event.preventDefault();
		const user = users.find((u) => u.username === username && u.password === password);
		if (user) {
			// login();
			goto('/AddToCart');
			errorMessage = '';
			username = '';
			password = '';
		} else {
			errorMessage = 'Invalid username or password';
			username = '';
			password = '';
		}
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column container mx-auto">
	<div class="container mx-auto">
		<div class="grid grid-cols-6 gap-4">
			<img src={myImage} class="col-span-3 p-10 h-full" alt="img" />
			<img src={myImage2} class="col-span-3 p-10" alt="img" />
		</div>
	</div>
</div>
<form on:submit={handlelogin}>
	<label class="input input-bordered flex items-center gap-2">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			fill="currentColor"
			class="w-4 h-4 opacity-70"
			><path
				d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
			/><path
				d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
			/></svg
		>
		<input type="text" class="grow" placeholder="Username" bind:value={username} />
	</label>
	<label class="input input-bordered flex items-center gap-2">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			fill="currentColor"
			class="w-4 h-4 opacity-70"
			><path
				d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
			/></svg
		>
		<input type="password" class="grow" placeholder="Password" bind:value={password} />
	</label>
	<button class="btn btn-success block mx-auto my-4" type="submit">Login</button>
	<p class="text-center my-2">{errorMessage}</p>
</form>
