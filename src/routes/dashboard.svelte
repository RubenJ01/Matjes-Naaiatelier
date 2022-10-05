<script>
	let loggedIn = 1;
	let section = 1;

	let desc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend rutrum ex quis
				dapibus. Sed tempor turpis et neque dictum finibus. Suspendisse gravida risus ut urna
				euismod suscipit. Donec sem nisi, sodales et congue ac, ullamcorper sed justo. In ut augue
				at tellus consectetur rhoncus. Donec faucibus consectetur orci, auctor vulputate odio
				vestibulum quis. Curabitur rutrum efficitur lectus eget euismod. Maecenas at posuere orci.
				Mauris luctus lacinia risus, eget ornare turpis tincidunt in. Donec sit amet dui quis augue
				pellentesque interdum ac eget velit. Nullam sodales venenatis nisi non blandit. Proin
				cursus, dolor nec aliquam tristique, sapien nisi faucibus nisi, ac facilisis purus lectus
				dapibus dolor.`;
	let email = 'email@email.com';
	let phone = '06-12351234';
	let name = 'Dit ben ik';

	let descEdit = desc;
	let emailEdit = email;
	let phoneEdit = phone;
	let nameEdit = name;

	

	let nameEditProduct = "naam";
	let priceEditProduct = "20 euro";
	let descEditProduct = "testtststetstetdtst";

	if (loggedIn !== 1) {
		section = 0;
	}
	import { paginate, LightPaginationNav } from 'svelte-paginate';
	let itemsDefault = [
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
	let pageSizeTransit = 2;

	let input = '';
	let items = getItemsWithinSearch(input);

	let open = false;
	var currID = 1;

	let currItem = getCurr(currID);

	const toggle = (id) => {
		if (open === true) {
			open = false;
		} else if (open === false) {
			open = true;
		}
		if (id !== null) {
			currID = id;
		}
	};

	function getCurr(id) {
		return items.find((item) => item.id === id);
	}
	function goTop() {
		document.body.scrollIntoView();
	}

	function getItemsWithinSearch(search) {
		let searchedArray = [];
		itemsDefault.forEach((item) => {
			if (item.name.includes(search)) {
				searchedArray.push(item);
			}
		});
		return searchedArray;
	}

	function edit(var1) {
		if (var1 == null) {
			open = true;
		} else {
		}
	}

	function save() {
		name = nameEdit;
		email = emailEdit;
		phone = phoneEdit;
		desc = descEdit;
		toggle(null);
	}

	function saveProduct() {
		name = nameEditProduct;
		email = priceEditProduct;
		desc = descEditProduct;
		toggle(null);
	}
	//use $: so that when variable changes you execute the code that you want

	$: paginatedItems = paginate({ items, pageSize, currentPage });

	$: if (currentPage !== currentPageTracker) {
		currentPageTracker = currentPage;
		scroll(0, 0);
	}

	$: if (input) {
		items = getItemsWithinSearch(input);
		currentPage = 1;
	}

	$: if (input == null || input === '') {
		input = '';
		items = getItemsWithinSearch(input);
		currentPage = 1;
	}

	$: if (pageSizeTransit) {
		if (pageSizeTransit > 100) {
			pageSize = 100;
			pageSizeTransit = 100;
		} else {
			pageSize = pageSizeTransit;
		}
	}

	$: if (pageSizeTransit == null || pageSizeTransit === '') {
		pageSize = 1;
	}

	function swap(par) {
		section = par;
	}

function preview(){
    imageContainer.innerHTML = "";

    for(i of fileInput.files){
        savedArr.push(i);
    }

    for(i of savedArr) {
        let reader = new FileReader();
        let figure = document.createElement("figure");
        let figCap = document.createElement("figcaption");
        figCap.innerText = i.name;
        figure.appendChild(figCap);
        reader.onload=()=>{
            let img = document.createElement("img");
            img.setAttribute("src",reader.result);
            figure.insertBefore(img,figCap);
        }
        imageContainer.appendChild(figure);
        reader.readAsDataURL(i);
    }

    numOfFiles.textContent = `${savedArr.length} fotos geselecteerd`;
}
</script>

<div
	class="bg-gray-100 w-full sm:w-10/12 lg:w-1/2 text-sm lg:text-2xl mx-auto my-5 rounded-md border border-gray-30 relative"
>
	<div class="flex items-center justify-between h-16 sm:inline">
		<div class="absolute inset-y-0 left-0 flex items-center " />
		<div class="flex-1 flex items-center justify-center">
			<div class="lex">
				<div class="flex space-x-8 self-center py-2">
					<div on:click={() => swap(1)}>
						<p
							class="text-gray-800 self-left hover:bg-white px-3 py-3 rounded-md text-2xl font-large"
						>
							Creaties
						</p>
					</div>
					<div on:click={() => swap(2)}>
						<p class="text-gray-800 hover:bg-white px-3 py-3 rounded-md text-2xl font-large">
							About
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

{#if section === 1}
	<main>
		<div class="w-10/12 lg:w-1/2 mx-auto mb-10">
			<h1 class="text-center text-4xl font-bold my-5">Creaties</h1>
			<div class="mx-auto w-fit">
				<button class="bg-green-300 hover:bg-green-500 text-white font-bold py-2 px-4 rounded my-2"
					>nieuw</button
				>
			</div>
			<div class="mx-5">
				<div class="relative py-4">
					<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none" />
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
							/></svg
						>
						<input
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
					<div class="creationContainer">
						<div class="halfContainerText">
							<h3 class="text-2xl font-bold">{product.name}</h3>
							<h3 class="text-base">{product.price}</h3>
							<p class="text-sm">Klik voor meer informatie!</p>
						</div>
						<div class="halfContainerImg">
							<img class="containedImg" src={product.src} alt={product.name} />
						</div>
						<hr class="solidDivider  mt-10" />
						<div class="z-index-10 flex justify-center flex-column lg:flex-row">
							<button
					on:click={() => edit(null)}
					class="bg-green-300 hover:bg-green-500 text-white font-bold py-2 px-4 rounded my-5 mx-5"
					>Aanpassen</button
				>
							<button
								class="bg-green-300 hover:bg-green-500 text-white font-bold py-2 px-4 rounded my-5 mx-5"
								>verwijderen</button
							>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</main>
	<div class="test">
		<LightPaginationNav
		 	class="test"
			totalItems={items.length}
			{pageSize}
			{currentPage}
			limit={1}
			showStepOptions={true}
			on:setPage={(e) => (currentPage = e.detail.page)}
		/>
	</div>
{/if}
{#if section === 2}
	<main>
		<div class="aboutContainer">
			<h1 class="text-4xl pb-2 font-bold">{name}</h1>
			<h4 class="text-gray-400 text-xl">{email}</h4>
			<h4 class="text-gray-400 text-xl py-1">{phone}</h4>
			<hr class="solidDivider" />
			<p class="text-gray-400 text-base">
				{desc}
			</p>
			<hr class="solidDivider mt-10" />
			<div class="z-index-10 flex justify-center flex-column lg:flex-row">
				<button
					on:click={() => edit(null)}
					class="bg-green-300 hover:bg-green-500 text-white font-bold py-2 px-4 rounded my-5 mx-5"
					>Aanpassen</button
				>
			</div>
		</div>
	</main>
{/if}
{#if section !== 0}
	{#if open}
		{#if section === 2}
			<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
				<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				<div class="fixed z-10 inset-0 overflow-y-auto">
					<div class="flex items-end items-center justify-center min-h-full p-4 text-center lg:p-0">
						<div
							class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all lg:my-8 lg:max-w-4xl lg:w-full"
						>
							<div class="bg-white px-4 pt-5 pb-4">
								<div class="text-center">
									<div class="mt-3 text-center sm:text-center">
										<div class="mt-2">
											<input
												bind:value={nameEdit}
												type="text"
												id="name"
												class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
											/><br />
											<input
												bind:value={emailEdit}
												type="text"
												id="email"
												class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
											/><br />
											<input
												bind:value={phoneEdit}
												type="text"
												id="phone"
												class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
											/><br />
											<textarea
												bind:value={descEdit}
												class="w-full px-3 py-2 text-gray-700 border text-sm rounded-lg focus:outline-none"
												rows="10"
											/>
										</div>
									</div>
								</div>
							</div>

							<div class="bg-white px-4">
								<div on:click={save} class="w-full flex justify-center">
									<button
										class="bg-green-300 hover:bg-green-500 text-white font-bold py-2 rounded-md self-center w-full"
										>Opslaan</button
									>
								</div>
								<div on:click={() => toggle(null)} class="w-full flex justify-center">
									<button
										class="bg-green-300 hover:bg-green-500 text-white font-bold py-2 rounded-md my-4 self-center w-full"
										>Sluiten</button
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
	{#if open}
		{#if section === 1}
			<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
				<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				<div class="fixed z-10 inset-0 overflow-y-auto">
					<div class="flex items-end items-center justify-center min-h-full p-4 text-center lg:p-0">
						<div
							class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all lg:my-8 lg:max-w-4xl lg:w-full"
						>
							<div class="bg-white px-4 pt-5 pb-4">
								<div class="text-center">
									<div class="mt-3 text-center sm:text-center">
										<div class="mt-2">
											<input
												bind:value={nameEditProduct}
												type="text"
												id="naam"
												class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
											/><br />
											<input
												bind:value={priceEditProduct}
												type="text"
												id="prijs"
												class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
											/><br />
											
											<textarea
												bind:value={descEditProduct}
												class="w-full px-3 py-2 text-gray-700 border text-sm rounded-lg focus:outline-none"
												rows="10"
											/>
										</div>
									</div>
								</div>
							</div>

							<div class="bg-white px-4">
								<div on:click={save} class="w-full flex justify-center">
									<button
										class="bg-green-300 hover:bg-green-500 text-white font-bold py-2 rounded-md self-center w-full"
										>Opslaan</button
									>
								</div>
								<div on:click={() => toggle(null)} class="w-full flex justify-center">
									<button
										class="bg-green-300 hover:bg-green-500 text-white font-bold py-2 rounded-md my-4 self-center w-full"
										>Sluiten</button
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
		{/if}
	{/if}
{/if}

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
