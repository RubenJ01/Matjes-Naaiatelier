<script>
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
</script>

<svelte:head>
	<title>Martina&apos;s Creaties</title>
	<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
</svelte:head>

<Navbar />

<slot />

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Montserrat';
		font-size: 22px;
	}

</style>
