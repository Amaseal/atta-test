<script lang="ts">
	export let data;
	import LL from '$i18n/i18n-svelte';
	import MdiHome from '~icons/mdi/home';
	import MdiSlashForward from '~icons/mdi/slash-forward';
</script>

<svelte:head>
	<title>{data.category.seo.metaTitle}</title>
	<meta name="description" content={data.category.seo.metaDescription} />
</svelte:head>

<section>
	<div class="container">
		<div class="flex gap align">
			<a href={$LL.link('/')} class="flex"><MdiHome /></a>
			<div class="flex">
				<MdiSlashForward />
			</div>

			<a href={$LL.link(`/${data.category.slug}`)}>{data.category.title}</a>
		</div>
	</div>
	<div class="category">
		{#each data.services.data as service}
			<div class="container">
				<div class="grid gap align">
					<img src={service.image.formats.medium?.url} alt="" />
					<div class="text">
						<h2>{service.title}</h2>
						<p>{service.description}</p>
						<a class="button" href={$LL.link(`/${data.category.slug}/${service.slug}`)}
							>{$LL.buttons.categories()}</a
						>
					</div>
				</div>
			</div>
		{/each}

		{#await data.awaited.services}
			loading...
		{:then services}
			{#each services.data as service}
				<div class="container">
					<div class="grid gap align">
						<img src={service.image.formats.small?.url} alt="" />
						<div class="text">
							<h2>{service.title}</h2>
							<p>{service.description}</p>
							<a class="button" href={$LL.link(`/${data.category.slug}/${service.slug}`)}
								>{$LL.buttons.categories()}</a
							>
						</div>
					</div>
				</div>
			{/each}
		{:catch error}
			<h2>{error}</h2>
		{/await}
	</div>
</section>

<style>
	.grid {
		grid-template-columns: 1fr 1fr;
	}
	.text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		height: 100%;
		width: 100%;
		padding: var(--size-l);
	}
	.category {
		padding: var(--size-m) 0;
	}
	img {
		width: 100%;
		margin: var(--size-m) 0;
		height: 500px;
		object-fit: cover;
		border-radius: var(--size-s);
	}

	section {
		padding: calc(var(--size-xl) + var(--size-l)) 0 0 0;
	}
	p {
		margin-bottom: var(--size-m);
	}
	@media only screen and (max-width: 800px) {
		.grid {
			grid-template-columns: 1fr;
		}
		img {
			width: 100%;
		}
		.text {
			width: 100%;
			padding: var(--size-s) 0;
		}
		section {
			padding: var(--size-xl) 0 0 0;
		}
	}
</style>
