<script>
	import Header from './Header.svelte';
	import './styles.css';
	import { isAuthenticated } from '$lib/auth.js';
	import AddtoCart from './AddtoCart.svelte';
	import Home from './Home.svelte';
</script>

<div class="app">
	<Header />

	<slot />
</div>
