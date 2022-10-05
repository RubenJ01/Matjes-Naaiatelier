<script>
	let  avatar, fileinput;
	
	const onFileSelected =(e)=>{
            let image = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                 avatar = e.target.result
            };
}
	
</script>
<div id="app">
	<h1>Upload Image</h1>
    <div class="border-2 rounded-xl bg-green-300 p-4 chan" on:click={()=>{fileinput.click();}}>Choose Image</div>
    <input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
        {#if avatar}
        <img class="avatar" src="{avatar}" alt="d" />
        {:else}
        <img class="avatar" alt="" /> 
        {/if}


</div>
<style>
	#app{
	display:flex;
		align-items:center;
		justify-content:center;
		flex-flow:column;
}
 
	.upload{
		display:flex;
	height:50px;
		width:50px;
		cursor:pointer;
	}
	.avatar{
		display:flex;
		height:200px;
	}
</style>