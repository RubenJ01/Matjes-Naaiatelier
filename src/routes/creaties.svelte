<script>
	let contentBlocks = [
		{
			id: '1',
			src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
			name: 'boom',
			price: '€20.00,-',
			description:
				'tSed tempor turpis et neque dictum finibus. Suspendisse gravida risus ut urna euismod suscipit.est1'
		},
		{
			id: '2',
			src: 'https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_960_720.jpg',
			name: 'vogels in de lucht',
			price: '€10.00,-',
			description:
				'Sed tempor turpis et neque dictum finibus. Suspendisse gravida risus ut urna euismod suscipi Sed tempor turpis et neque dictum finibus. Suspendisse gravida risus ut urna euismod suscipit.Sed tempor turpis et neque dictum finibus.  Suspendisse gravida risus ut urna euismod suscipit.'
		},
		{
			id: '3',
			src: 'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg',
			name: 'meer landschap',
			price: '€30.00,-',
			description:
				'Sed tempor turpis et neque dictum finibus. Suspendisse gravida risus ut urna euismod suscipit.'
		},
		{
			id: '4',
			src: 'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg',
			name: 'meer landschap',
			price: '€30.00,-',
			description:
				'Sed tempor turpis et neque dictum finibus. Suspendisse gravida risus ut urna euismod suscipit.'
		}
	];

	function handleClick(id) {
		alert(id);
	}
</script>

<main>
	<div class="fullContainer">
		{#each contentBlocks as product}
			<div
				id={product.id}
				class="creationContainer"
				on:click={() => {
					handleClick(product.id);
				}}
			>
				<div class="halfContainerText">
					<h3>{product.name}</h3>
					<h5>{product.price}</h5>
				</div>
				<div class="halfContainerImg">
					<img src={product.src} alt={product.name} />
				</div>
			</div>
		{/each}
	</div>
</main>

<style>
	.fullContainer {
		margin: auto;
		width: 75%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.creationContainer {
		flex: 50%;
		margin: auto;
		max-width: 25vw;
		min-height: 25vh;
		margin-top: 10vh;
		border: 1px solid #bbb;
		text-align: center;
	}

	.halfContainerImg {
		float: bottom;
		display: flex;
		justify-content: center;
		height: auto;
		width: 100%;
	}

	.halfContainerText {
		float: top;

		width: 100%;
		height: auto;
	}

	.halfContainerText h3,
	h5 {
		margin: 5%;
		padding: 0;
	}

	img {
		align-self: center;
		width: 100%;
		object-fit: cover;
		padding: 0;
	}

	@media screen and (max-width: 1000px) {
		.creationContainer {
			flex: 100%;
            max-width: 50vw;
		}
	}
</style>
