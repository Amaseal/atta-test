<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	export let data;
</script>

<section>
	<div class="container">
		{#each data.categories as category}
			<div class="flex gap align category">
				<img src={category.image.formats.large?.url} alt="" />
				<div class="text">
					<h2>{category.title}</h2>
					<p>{category.description}</p>
					<a aria-label={category.title} class="button" href={$LL.link(`/${category.slug}`)}
						>{$LL.buttons.categories()}</a
					>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		padding-bottom: var(--size-l);
		padding-top: calc(var(--size-xl) + var(--size-l));
		background-color: var(--secondary);
	}
	.category {
		margin-bottom: var(--size-m);
	}

	.category:nth-of-type(2n) > .text {
		order: 1;
		display: flex;
		flex-direction: column;
		align-items: end;
	}
	.category:nth-of-type(2n) > img {
		order: 2;
	}
	.category:nth-of-type(2n) > .text > * {
		text-align: end;
	}
	.text {
		height: 100%;
		padding: var(--size-l);
	}
	img {
		width: 50%;
		height: 500px;
		object-fit: cover;
		border-radius: var(--size-s);
	}

	p {
		margin-bottom: var(--size-m);
	}
	@media only screen and (max-width: 800px) {
		.flex {
			flex-direction: column;
		}
		img {
			width: 100%;
		}
		.text {
			width: 100%;
			padding: var(--size-s) 0;
		}
		.category:nth-of-type(1) > img {
			order: 1;
		}

		.category:nth-of-type(1) > .text {
			order: 2;
		}
		.category > img {
			order: 1;
		}

		.category > .text {
			order: 2;
		}

		.category:nth-of-type(2) > .text {
			display: flex;
			flex-direction: column;
			align-items: start;
		}
		.category:nth-of-type(2) > .text > * {
			text-align: start;
		}
		section {
			padding: var(--size-xl) 0 var(--size-l) 0;
		}
	}
</style>
