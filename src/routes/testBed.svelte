<script>
	let input;
	let container;
	let image;
	let placeholder;
	let showImage = false;
	let imgArr = [];

	function onChange() {
		const file = input.files[0];
		container.innerHTML = '';
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

<input bind:this={input} on:change={onChange} type="file" id="file-input" />
<label for="file-input">
	<i /> &nbsp; Choose A Photo
</label>
<div class="imgContainer" bind:this={container} />

<style>
    .preview {
        width: 10%;
    }

    label{
        display: block;
        position: relative;
        background-color: #86efac;
        color: #ffffff;
        font-size: 18px;
        text-align: center;
        width: 300px;
        padding: 18px 0;
        margin-top: 16px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 5px;
        cursor: pointer;
    }

    #imgContainer {
        width: 200px;
        height: 50%;
        margin-left: auto;
        margin-right: auto;
        border-style: solid;
    }

    #file-input {
        display: none;
    }
</style>
