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
	let currentPageTracker = 1;
	let pageSize = 2;
	$: paginatedItems = paginate({ items, pageSize, currentPage });

	let input = '';

	let open = false;
	var currID = 1;

	let currItem = getCurr(currID);

	const toggle = (id) => {
		if (open === true) {
			open = false;
		} else if (open === false) {
			open = true;
		}
		currID = id;
	};

	function getCurr(id) {
		return items.find((item) => item.id === id);
	}
	function goTop() {
		document.body.scrollIntoView();
	}

	$: if(currentPage !== currentPageTracker) {
		console.log("page changed")
		currentPageTracker = currentPage;
		scroll(0,0)
	}
</script>

<main>
	<div class="w-10/12 lg:w-1/2 mx-auto mb-10">
		<h1 class="text-center text-4xl font-bold my-5">Creaties</h1>

		<div class="mx-5">
			<label
				for="default-search"
				class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Zoeken</label
			>
			<div class="relative py-4">
				<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
					<svg
						class="w-5 h-5 text-gray-500 dark:text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/></svg
					>
				</div>
				<input
					bind:value={input}
					type="search"
					id="default-search"
					class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-30"
					placeholder="Zoeken"
					required=""
				/>
			</div>
		</div>
		{input}

		<hr class="solidDivider" />
	</div>
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

	{#if open}
		<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
			<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
			<div class="fixed z-10 inset-0 overflow-y-auto">
				<div class="flex items-end items-center justify-center min-h-full p-4 text-center lg:p-0">
					<div
						class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all lg:my-8 lg:max-w-4xl lg:w-full"
					>
						<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<div class="text-center">
								<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-center">
									<h2 class="text-3xl leading-6 font-medium text-gray-900" id="modal-title">
										{getCurr(currID).name}
									</h2>
									<div class="mt-2">
										<p class="text-sm text-gray-500">{getCurr(currID).description}</p>
										<br />
									</div>
								</div>
								<div>
									<img class="containedImg" src={getCurr(currID).src} />
								</div>
							</div>
						</div>
						<div class="bg-white px-4 py-3 sm:px-6 flex-center">
							<div class="m-auto text-center bg-green-300 rounded border border-gray-900">
								<button class="m-1 w-full" on:click={() => toggle(null)}>Sluiten</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</main>
<div class="test">
<LightPaginationNav class="test"
	totalItems={items.length}
	{pageSize}
	{currentPage}
	limit={1}
	showStepOptions={true}
	on:setPage={(e) => (currentPage = e.detail.page)}
/></div>

<style>
	*,
	*:focus,
	*:hover {
		outline: none;
	}

	.test :global(.option.active) {
		@apply text-green-300;
	}
</style>
