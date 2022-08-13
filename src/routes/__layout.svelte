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
		/**height: 100vh;
		background-image: linear-gradient(
			145deg,
			#98cd8d 16.67%,
			#f6f0cf 16.67%,
			#f6f0cf 33.33%,
			#fff 33.33%,
			#fff 50%,
			#98cd8d 50%,
			#98cd8d 66.67%,
			#f6f0cf 66.67%,
			#f6f0cf 83.33%,
			#fff 83.33%,
			#fff 100%
		);
		background-size: 100% 100%;
		z-index: -1;**/
		margin: 0;
		padding: 0;
		font-family: 'Montserrat';
		font-size: 22px;
	}
</style>
