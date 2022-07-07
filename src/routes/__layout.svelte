<script>
	import Navbar from '../components/navbar.svelte';
</script>

<svelte:head>
  <link href='https://fonts.googleapis.com/css?family=Montserrat' rel="stylesheet">
</svelte:head>

<Navbar />

<slot />

<style>
	:global(body) {
		margin: 0;
		padding: 0;
        font-family: 'Montserrat';font-size: 22px;
	}
</style>
