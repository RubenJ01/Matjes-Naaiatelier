<script>
	import { paginate, LightPaginationNav } from 'svelte-paginate';
	let itemsDefault = [
		{
			id: 1,
			src: ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg', 'https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_960_720.jpg', 'https://i.gadgets360cdn.com/products/large/micromax-in-2b-1-414x800-1627626668.jpg?downsize=240:*'],
			name: 'boom',
			price: '€20.00,-',
			description:
				'1'
		},
		{
			id: 2,
			src: ['https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_960_720.jpg', 'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg'],
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
			src: ['https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg'],
			name: 'meer landschap',
			price: '€30.00,-',
			description:
				'Sed tempor turpis et neque dictum finibus. Suspendisse gravida risus ut urna euismod suscipit.'
		},
		{
			id: 4,
			src: ['https://i.gadgets360cdn.com/products/large/micromax-in-2b-1-414x800-1627626668.jpg?downsize=240:*'],
			name: 'telefoon',
			price: '€30.00,-',
			description:
				'Sed tempor turpis et neque dictum finibus. Suspendisse gravida risus ut urna euismod suscipit.'
		}
	];

	let currentPage = 1;
	let currentPageTracker = 1;
	let pageSize = 2;
	let pageSizeTransit = 2;
	let currImg = 0;
	let opened = 0;
	let currSrc = 0;

	let input = '';
	let items = getItemsWithinSearch(input); 

	let open = false;
	var currID = 0;

	let currItem = getCurr(currID);

	const toggle = (id) => {
		if (open === true) {
			currImg = 0;
			open = false;
		} else if (open === false) {
			open = true;
		}
		currID = id;
	};

	function getCurr(id) {
		//currImg = 0;
		return items.find((item) => item.id === id);
	}

	function setCurrImg(id, direction) {
		let item = items.find((item) => item.id === id);
		if(direction === "next") {
			if(currImg === item.src.length - 1) {
					currImg = 0;
				} else {
					currImg = currImg + 1;
				}
		}

		if(direction === "prev") {
			if(currImg === 0) {
					currImg = 2;
				} else {
					currImg = currImg - 1;
				}
		}
	}

	function goTop() {
		document.body.scrollIntoView();
	}

	function getItemsWithinSearch(search) {
		let searchedArray = [];
		itemsDefault.forEach(item => {
			if(item.name.includes(search)) {
				searchedArray.push(item);
			}
		});
		return searchedArray;
	}
	
	$: paginatedItems = paginate({ items, pageSize, currentPage });

	$: if(currentPage !== currentPageTracker) {
		currentPageTracker = currentPage;
		scroll(0,0)
	}

	$: if(input) {
		items = getItemsWithinSearch(input);
		currentPage = 1;

	}

	$: if(input == null || input === "") {
		input = "";
		items = getItemsWithinSearch(input);
		currentPage = 1;
	}

	$: if(pageSizeTransit) {
		if(pageSizeTransit > 100) {
			pageSize = 100;
			pageSizeTransit = 100
		} else {
			pageSize = pageSizeTransit;
		}
	}

	$: if(pageSizeTransit == null || pageSizeTransit === "") {
		pageSize = 1;
	}

	$: if(currImg || open) {
		//console.log(currImg)
		//console.log(currSrc)
		if (open !== false) {
			currSrc = getCurr(currID).src[currImg];
		}
	}
</script>

<main>
	<div class="min-w-10/12 max-w-10/12 lg:w-1/2 mx-auto mb-10">
		<h1 class="text-center text-4xl font-bold my-5">Creaties</h1>

		<div class="mx-5">
	
			<div class="relative py-4">
				<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
					
				</div>
				<div class="flex flex-col lg:flex-row">

						<svg
						class="w-5 h-5 absolute mt-4 ml-4 text-gray-500 dark:text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/></svg> <input
					bind:value={input}
					type="search"
					id="default-search"
					class="block w-full p-4 text-center pl-10 mx-auto self-center lg-mt-0 lg:self-left mr-8 flex-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-30"
					placeholder="Zoeken"
					required=""
				/>
					<input
					bind:value={pageSizeTransit}
					type="number"
					id="default-number"
					class="block py-4 text-center mt-5 w-2/12 lg:w-2/12 self-center lg:mt-0 lg:self-right text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-30"
					placeholder="Items"
					required=""
				/>
			</div>
			</div>
		</div>

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
						<img class="containedImg" src={product.src[0]} alt={product.name} />
					</div>
				</div>
			</li>
		{/each}
	</ul>

	{#if open}
		<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
			<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
			<div class="fixed z-10 inset-0 overflow-y-auto">
				<div class="flex items-end items-center justify-center min-h-full min-w-full p-4 text-center lg:p-0">
					<div
						class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all lg:my-8 lg:max-w-4xl w-full"
					>
						<div class="bg-white px-4 pt-5 pb-4 md:p-6 md:pb-4">
							<div class="text-center">
								<div class="mt-3 text-center md:mt-0 md:ml-4 md:text-center">
									<h2 class="text-3xl leading-6 font-medium text-gray-900" id="modal-title">
										{getCurr(currID).name}
									</h2>
									<div class="mt-2">
										<p class="text-sm text-gray-500">{getCurr(currID).description}</p>
										<br />
									</div>
								</div>
								<div class="relative border-solid w-full inline-block">
									{#if getCurr(currID).src.length > 1}
										<a class="prev" on:click={() => setCurrImg(currID, "prev")}>&#10094;</a>
										<a class="next" on:click={() => setCurrImg(currID, "next")}>&#10095;</a>
									{/if}
									<img class="containedImg block" src={currSrc} />
								</div>
							</div>
						</div>
						<div class="bg-white px-4 py-3 md:px-6 flex-center">
							<div class="bg-green-300 hover:bg-green-500 text-white font-bold py-2 rounded-md my-4 w-full mx-auto px-2">
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

.cursor {
  cursor: pointer;
}
.prev,
.next {
	@apply top-1/2 inline px-2 py-1 cursor-pointer absolute w-auto text-white font-bold text-sm select-none md:text-xl;
	text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
}

/* Position the "next button" to the right */
.next {
    @apply right-0 rounded-sm;
}

.prev {
	@apply left-0 rounded-sm;
}

    .prev:hover,
	.next:hover {
		background-color: rgba(0, 0, 0, 0.8);
	}

/*
	.prev,
	.next {
	cursor: pointer;
	position: absolute;
	top: 50%;
	bottom: 50%;
	text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
	width: auto;
	padding: 16px;
	color: white;
	font-weight: bold;
	font-size: 20px;
	border-radius: 0 3px 3px 0;
	user-select: none;
	-webkit-user-select: none;
	}

	.next {
		right: 0;
	}

	.prev {
		left: 0;
	}

	
	.prev:hover,
	.next:hover {
	background-color: rgba(0, 0, 0, 0.8);
	}*/
</style>
