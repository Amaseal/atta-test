<script lang="ts">
	import type { Gallery, HomePage } from '../../types/types';
	import LL from '$i18n/i18n-svelte';
	let height: number;
	let scrolled: number;

	export let gallery: Gallery;
	export let homePage: HomePage;
</script>

<svelte:window bind:scrollY={scrolled} bind:innerHeight={height} />

<section>
	<div class="container">
		<h2>{homePage.gallery_title}</h2>
		<div class="image_container">
			<div class="gap images">
				<div class="row one flex gap" style="right: {-(scrolled - 1800) / 4}px">
					{#each gallery.images.slice(0, 6) as item (item.id)}
						<img src={item.formats.small?.url || item.url} alt="" />
					{/each}
				</div>

				<div class="row two flex gap" style="left: {-(scrolled - 1800) / 4}px">
					{#each gallery.images.slice(7, 14) as item (item.id)}
						<img src={item.formats.small?.url || item.url} alt="" />
					{/each}
				</div>
			</div>
		</div>
		<div class="flex gap align">
			<p>{$LL.gallery.more()}</p>
			<a aria-label={$LL.seo.gallery.more()} href={$LL.link('/galerija')} class="button"
				>{$LL.buttons.categories()}</a
			>
		</div>
	</div>
</section>

<style>
	section {
		overflow: hidden;
	}
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.one {
		top: 0;
		right: 0;
	}
	.two {
		bottom: 0;
		left: 0;
	}
	.row {
		position: absolute;
		height: 300px;
		margin-bottom: var(--size-xs);
	}
	.image_container {
		width: 100%;
		height: 624px;
		position: relative;
		margin-bottom: var(--size-l);
	}
	.images {
		overflow-x: hidden;
		right: 0;
		flex-direction: row-reverse;
	}
	.container {
		position: relative;
	}
	section {
		padding: calc(var(--size-l) + var(--size-m)) 0;
	}

	img {
		width: 400px;
		object-fit: cover;
		height: 300px;
		filter: grayscale(1) contrast(120%);
		border-radius: var(--size-s);
		background-color: var(--secondary);
	}
	h2 {
		text-align: center;
		margin-bottom: var(--size-l);
	}

	@media only screen and (max-width: 800px) {
		.image_container {
			height: 324px;
		}
		img {
			height: 150px;
			width: 200px;
		}
		.row {
			height: 150px;
		}
		section {
			padding: var(--size-l) 0 var(--size-m) 0;
		}
	}
</style>
