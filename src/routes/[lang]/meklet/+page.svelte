<script lang="ts">
	export let data;
	import LL from '$i18n/i18n-svelte';
	import Product from '$lib/components/Product.svelte';
	import MdiHome from '~icons/mdi/home';
	import MdiSlashForward from '~icons/mdi/slash-forward';
</script>

<section>
	<div class="container">
		<div class="flex gap align" />
	</div>
</section>
<section>
	{#if data.products.length > 0}
		{#each data.products as product}
			<div class="category">
				<div class="container">
					<Product {product} />
				</div>
			</div>
		{/each}
	{:else}
		<div class="container not-found flex align justify">
			<h2>{$LL.search.notFound()}</h2>
		</div>
	{/if}
</section>

<style>
	.not-found {
		min-height: 70vh;
	}
	section:nth-of-type(2n) {
		margin-top: calc(var(--size-xl) + var(--size-l));
	}

	.category:last-of-type {
		margin-bottom: calc(var(--size-l) + var(--size-l));
	}

	.category:nth-of-type(even) {
		background-color: var(--secondary);
	}
	h2 {
		text-align: center;
		max-width: 80%;
	}
</style>
