<script lang="ts">
	export let data;
	import LL from '$i18n/i18n-svelte';
	import Product from '$lib/components/Product.svelte';
	import MdiHome from '~icons/mdi/home';
	import MdiSlashForward from '~icons/mdi/slash-forward';
</script>

<svelte:head>
	<title>{data.service.seo.metaTitle}</title>
	<meta name="description" content={data.service.seo.metaDescription} />
</svelte:head>

<section>
	<div class="container">
		<div class="flex gap align">
			<a href={$LL.link('/')} class="flex"><MdiHome /></a>
			<div class="flex">
				<MdiSlashForward />
			</div>

			<a href={$LL.link(`/${data.service.category.slug}`)}>{data.service.category.title}</a>
			<div class="flex">
				<MdiSlashForward />
			</div>
			<a href={$LL.link(`/${data.service.category.slug}/${data.service.slug}`)}
				>{data.service.title}</a
			>
		</div>
	</div>
</section>
<section>
	{#each data.service.products as product}
		<div class="category">
			<div class="container">
				<Product {product} />
			</div>
		</div>
	{/each}
</section>

<style>
	section:nth-of-type(2n) {
		margin-top: calc(var(--size-xl) + var(--size-l));
	}

	.category:last-of-type {
		margin-bottom: calc(var(--size-l) + var(--size-l));
	}

	.category:nth-of-type(even) {
		background-color: var(--secondary);
	}
	@media only screen and (max-width: 800px) {
		section:nth-of-type(2n) {
			margin-top: var(--size-xl);
		}
		.category:last-of-type {
			margin-bottom: var(--size-l);
		}
	}
</style>
