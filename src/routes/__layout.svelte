<script>
	import Navbar from '../components/navbar.svelte';
</script>

<Navbar />

<slot />

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>
