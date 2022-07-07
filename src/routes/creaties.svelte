<script>
	let contentBlocks = [
		{
			src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
			name: 'boom',
			price: '€20.00,-',
			description:
				'tSed tempor turpis et neque dictum finibus. Suspendisse gravida risus ut urna euismod suscipit.est1'
		},
		{
			src: 'https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_960_720.jpg',
			name: 'vogels in de lucht',
			price: '€10.00,-',
			description:
				'Sed tempor turpis et neque dictum finibus. Suspendisse gravida risus ut urna euismod suscipi Sed tempor turpis et neque dictum finibus. Suspendisse gravida risus ut urna euismod suscipit.Sed tempor turpis et neque dictum finibus.  Suspendisse gravida risus ut urna euismod suscipit.'
		},
		{
			src: 'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg',
			name: 'meer landschap',
			price: '€30.00,-',
			description:
				'Sed tempor turpis et neque dictum finibus. Suspendisse gravida risus ut urna euismod suscipit.'
		}
	];
</script>

<main>
	{#each contentBlocks as product}
		<div class="creationContainer">
			<div class="halfContainerImg">
				<img src={product.src} alt={product.name}/>
			</div>
			<div class="halfContainerText">
				<h3>{product.name}</h3>
				<h5>{product.price}</h5>
				<p>{product.description}</p>
			</div>
		</div>
	{/each}
</main>

<style>
	.creationContainer {
		display: flex;
		margin: auto;
		width: 50vw;
        min-height: 20vh;
		margin-top: 10vh;
		max-width: 50vw;
		border: 1px solid #bbb;
		text-align: center;
	}

	.halfContainerImg {
		float: left;
		display: flex;
		justify-content: center;
        width: 25vw;
        min-height: 25vh;
		min-width: 50%;
		max-width: 50%;
		min-height: 100%;
	}

	.halfContainerText {
		float: right;
		min-width: 50%;
		min-height: 100%;
		max-width: 50%;
		min-height: 100%;
	}

	.halfContainerText h3,
	h5 {
		margin: 5%;
		padding: 0;
	}

	img {
        align-self: center;
        object-fit: cover;
		width:  25vw;
		height: 25vh;
		padding: 0;
	}
</style>
