<script>
	import { onMount } from 'svelte';
	import {
		Button,
		Modal,
		ModalBody,
		ModalFooter,
		ModalHeader,
		Styles
	} from 'sveltestrap';

	let open = false;
	let currID = 1;

	let contentBlocks = [
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
			description:
				'Sed tempor turpis et neque dictum finibus. Suspendisse gravida risus ut urna euismod suscipi Sed tempor turpis et neque dictum finibus. Suspendisse gravida risus ut urna euismod suscipit.Sed tempor turpis et neque dictum finibus.  Suspendisse gravida risus ut urna euismod suscipit.'
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
			src: 'https://i.gadgets360cdn.com/products/large/moto-g52-db-709x800-1649827920.jpg',
			name: 'mobile telefoon',
			price: '€30.00,-',
			description:
				'Sed tempor turpis et neque dictum finibus. Suspendisse gravida risus ut urna euismod suscipit.'
		}
	];
	let currBlock;
		//can be optimized
	function getBlock(IDD) {
		
		return contentBlocks.find(item => item.id === IDD);
	}

	function toggle(state, id) {
		open = state;
		currID = id;
		console.log(currID);
	}
</script>

<Styles />

<main>
	{#each contentBlocks as product}
		<div id={product.id} class="wrapperContainer" on:click={() => toggle(true, product.id)}>
			<div class="textContainer">
				<h3>{product.name}</h3>
				<h5>{product.price}</h5>
				<p>click voor meer informatie</p>
			</div>

			<div class="imgContainer">
				<img src={product.src} alt={product.name} />
			</div>
		</div>
	{/each}
</main>

<Modal isOpen={open}>
	<ModalHeader> {(currBlock = getBlock(currID)).name}</ModalHeader>
	<ModalBody>
		{currBlock.description}
		<img class="modalImg" src={currBlock.src} alt={currBlock.name} />
	</ModalBody>
	<ModalFooter>
		<Button on:click={() => (open = false)}>Close</Button>
	</ModalFooter>
</Modal>

<style>

	.modalImg{
		width: 100% !important;
	}

	.wrapperContainer {
		margin: auto;
		text-align: center;
		margin-top: 10vh;
		max-width: 50vw;
		height: auto;
	}

	.imgContainer {
		display: flex;
		justify-content: center;
		margin: auto;
		max-width: 50vw;
		max-height: 50vh;
		text-align: center;
	}

	.imgContainer img {
		max-width: 50vw;
		max-height: 50vh;
		object-fit: contain;
	}

	.textContainer h3,
	h5,
	p {
		margin: 0;
		padding: 0px;
	}

	@media only screen and (max-width: 900px) {
		.textContainer h3 {
			font-size: 24px;
			margin: 0;
			padding: 0;
		}

		.textContainer h5 {
			font-size: 16px;
			margin: 0;
			padding: 0;
		}

		.textContainer p {
			font-size: 16px;
			margin: 0;
			padding: 0;
		}

		.wrapperContainer {
			max-width: 75vw;
		}

		.imgContainer {
			max-width: 75vw;
		}

		.imgContainer img {
			max-width: 75vw;
		}
	}
</style>
