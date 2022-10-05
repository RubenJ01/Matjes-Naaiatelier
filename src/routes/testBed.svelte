<script>
	let input;
	let container;
	let image;
	let placeholder;
	let showImage = false;
	let imgArr = [];

	function onChange() {
		const file = input.files[0];
        container.innerHTML = ""
		if (file) {
			imgArr.push(file);

			for (let i of imgArr) {
				let reader = new FileReader();

				reader.onload = () => {
					let img = document.createElement('img');
					img.classList.add('preview');
					img.setAttribute('src', reader.result);
					container.appendChild(img);
				};

				reader.readAsDataURL(i);
			}
		}
	}
</script>

<h1>Image Preview on File Upload</h1>
<input bind:this={input} on:change={onChange} type="file" />
<div bind:this={container} />

<style>
	#preview {
		height: 200px;
		border: 1px;
	}
</style>
