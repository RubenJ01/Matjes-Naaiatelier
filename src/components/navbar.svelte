<div class="nav">
	<ul>
		<li><a href="/"><h2>Home</h2></a></li>
		<li><a href="/creaties"><h2>Creaties</h2></a></li>
		<li><a href="/about"><h2>About</h2></a></li>
		<li><a href="/blog"><h2>Blog</h2></a></li>
	</ul>
</div>

<style>
	html,
	body {
		margin: 0 !important;
		padding: 0 !important;
	}

	.nav {
		background-color: lightgreen;
		height: 10vh;
		width: 100vw;
		text-align: center;
		vertical-align: middle;
	}

	.nav ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		height: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		float: center;
	}

	.nav h2 {
		margin: 0;
		padding: 0;
	}

	.nav li {
		width: 100%;
		height: 100%;
		align-self: center;
		line-height: 10vh;
	}

	.nav li a {
		width: 100%;
		height: 100%;
		display: block;
		color: black;
		font-size: large;
		align-self: center;
		text-align: center;
		text-decoration: none;
	}

	.nav ul li a:hover {
		background-color: rgb(97, 172, 97);
	}
</style>
