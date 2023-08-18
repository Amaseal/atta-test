<script lang="ts">
	export let data;
	import BiggerPicture from 'bigger-picture/svelte';
	import { onMount } from 'svelte';
	import 'bigger-picture/css';
	let items = data.gallery.images.map((item) => {
		return {
			img: item.url,
			thumb: item.formats.small?.url,
			alt: item.alternativeText,
			height: item.height,
			width: item.width
		};
	});

	onMount(() => {
		const bp = BiggerPicture({
			target: document.body
		});
		const imageLinks = document.querySelectorAll('#images > button');

		for (let link of imageLinks) {
			link.addEventListener('click', openGallery);
		}
		function openGallery(e: Event) {
			e.preventDefault();
			bp.open({
				items: imageLinks,
				el: e.currentTarget as HTMLElement,
				intro: 'fadeup'
			});
		}
	});
</script>

<section>
	<div class="container">
		<div id="images" class="images grid">
			{#each items as image}
				<button
					data-sveltekit-preload-data="tap"
					data-img={image.img}
					data-thumb={image.thumb}
					data-alt={image.alt}
					data-height={image.height}
					data-width={image.width}
					on:click|preventDefault
				>
					<img src={image.thumb} alt={image.alt} />
				</button>
			{/each}
		</div>
	</div>
</section>

<style>
	.grid {
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: var(--size-s);
	}
	img {
		height: 300px;
		width: 100%;
		border-radius: var(--size-s);
		object-fit: cover;
	}
	section {
		padding: calc(var(--size-xl) + var(--size-l)) 0;
	}
</style>
