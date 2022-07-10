<script>
	import { paginate, LightPaginationNav } from 'svelte-paginate';

	let items = [
		{
			id: 1,
			src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
			name: 'boom',
			price: '€20.00,-',
			description:
				'tSed tempor turpis et neque dictum finibus. Suspendisse gravida risus ut urna euismod suscipit.est1'
		},
		{
			id: 2,
			src: 'https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_960_720.jpg',
			name: 'vogels in de lucht',
			price: '€10.00,-',
			description: `
				Sed tempor turpis et neque dictum finibus Suspendisse gravida risus ut urna euismod suscipi Sed tempor turpis et neque dictum finibus
				Suspendisse gravida risus ut urna euismod suscipit.Sed tempor turpis et neque dictum finibus.  Suspendisse gravida risus ut urna euismod 
				suscipit.Sed tempor turpis et neque dictum finibus. Suspendisse gravida risus ut urna euismod suscipi Sed tempor turpis et neque dictum finibus.
				 Suspendisse gravida risus ut urna euismod suscipit.Sed tempor turpis et neque dictum finibus.  Suspendisse gravida risus ut urna euismod suscipit.
				 Sed tempor turpis et neque dictum finibus Suspendisse gravida risus ut urna euismod suscipi Sed tempor turpis et neque dictum finibus
				Suspendisse gravida risus ut urna euismod suscipit.Sed tempor turpis et neque dictum finibus.  Suspendisse gravida risus ut urna euismod 
				suscipit.Sed tempor turpis et neque dictum finibus. Suspendisse gravida risus ut urna euismod suscipi Sed tempor turpis et neque dictum finibus.
				 Suspendisse gravida risus ut urna euismod suscipit.Sed tempor turpis et neque dictum finibus.  Suspendisse gravida risus ut urna euismod suscipit.
				 Sed tempor turpis et neque dictum finibus Suspendisse gravida risus ut urna euismod suscipi Sed tempor turpis et neque dictum finibus
				Suspendisse gravida risus ut urna euismod suscipit.Sed tempor turpis et neque dictum finibus.  Suspendisse gravida risus ut urna euismod 
				suscipit.Sed tempor turpis et neque dictum finibus. Suspendisse gravida risus ut urna euismod suscipi Sed tempor turpis et neque dictum finibus.
				 Suspendisse gravida risus ut urna euismod suscipit.Sed tempor turpis et neque dictum finibus.  Suspendisse gravida risus ut urna euismod suscipit.
				 Sed tempor turpis et neque dictum finibus Suspendisse gravida risus ut urna euismod suscipi Sed tempor turpis et neque dictum finibus
				Suspendisse gravida risus ut urna euismod suscipit.Sed tempor turpis et neque dictum finibus.  Suspendisse gravida risus ut urna euismod 
				suscipit.Sed tempor turpis et neque dictum finibus. Suspendisse gravida risus ut urna euismod suscipi Sed tempor turpis et neque dictum finibus.
				 Suspendisse gravida risus ut urna euismod suscipit.Sed tempor turpis et neque dictum finibus.  Suspendisse gravida risus ut urna euismod suscipit.
				 `
		},
		{
			id: 3,
			src: 'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg',
			name: 'meer landschap',
			price: '€30.00,-',
			description:
				'Sed tempor turpis et neque dictum finibus. Suspendisse gravida risus ut urna euismod suscipit.'
		},
		{
			id: 4,
			src: 'https://i.gadgets360cdn.com/products/large/micromax-in-2b-1-414x800-1627626668.jpg?downsize=240:*',
			name: 'telefoon',
			price: '€30.00,-',
			description:
				'Sed tempor turpis et neque dictum finibus. Suspendisse gravida risus ut urna euismod suscipit.'
		}
	];
	let currentPage = 1;
	let pageSize = 2;
	$: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

<h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600 text-center">Test Bed</h1>

<main>
	<ul class="items">
		{#each paginatedItems as product}
			<li>
				<div class="creationContainer" on:click={() => toggle(product.id)}>
					<div class="halfContainerText">
						<h3 class="text-2xl font-bold">{product.name}</h3>
						<h3 class="text-base">{product.price}</h3>
						<p class="text-sm">Klik voor meer informatie!</p>
					</div>
					<div class="halfContainerImg">
						<img class="containedImg" src={product.src} alt={product.name} />
					</div>
				</div>
			</li>
		{/each}
	</ul>
</main>
<LightPaginationNav
	totalItems={items.length}
	{pageSize}
	{currentPage}
	limit={1}
	showStepOptions={true}
	on:setPage={(e) => (currentPage = e.detail.page)}
/>

<style>
</style>
