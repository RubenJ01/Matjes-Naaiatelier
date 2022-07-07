<script>
	let contentBlocks = [
		{
			src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
			name: '1',
			price: '20',
			description: 'tSed tempor turpis et neque dictum finibus. Suspendisse gravida risus ut urna euismod suscipit.est1'
		},
		{
			src: 'https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_960_720.jpg',
			name: '2',
			price: '10',
			description: 'Sed tempor turpis et neque dictum finibus. Suspendisse gravida risus ut urna euismod suscipit.'
		},
		{
			src: 'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg',
			name: '3',
			price: '30',
			description: 'Sed tempor turpis et neque dictum finibus. Suspendisse gravida risus ut urna euismod suscipit.'
		}
	];
</script>

<main>
	<h1>creaties page</h1>

	{#each contentBlocks as product}
		<div class="creationContainer">
			<div class="halfContainerImg">
				<img src={product.src} />
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
		width: 50%;
        height: auto;
		margin-top: 10vh;
		max-width: 50vw;
		border: 1px solid #bbb;
		text-align: center;
	}

	.halfContainerImg {
        float: left;
        display: flex;
        justify-content: center;
        min-width: 50%;
        min-height: 100%;
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

    .halfContainerText h3, h5 {
        margin: 5%;
        padding: 0;
    }

    img {
        max-width: 100%;
        max-height: 100%;
        padding: 0;
    }
</style>
