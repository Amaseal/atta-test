<script lang="ts">
	import type { Category } from '../../types/types';
	import LL from '$i18n/i18n-svelte';

	export let categories: Category[];
</script>

<section>
	<div class="container">
		{#each categories.slice(0, 2) as category}
			<div class="flex gap align category">
				<div class="text">
					<h2>{category.title}</h2>
					<p>{category.description}</p>
					<a aria-label={category.title} class="button" href={$LL.link(`/${category.slug}`)}
						>{$LL.buttons.categories()}</a
					>
				</div>
				<img src={category.image.formats.large?.url} alt="" />
			</div>
		{/each}
	</div>
</section>

<style>
	.category:nth-of-type(1) > img {
		order: 1;
	}
	.category:nth-of-type(1) {
		margin-bottom: var(--size-l);
	}
	.category:nth-of-type(1) > .text {
		order: 2;
	}

	.category:nth-of-type(2) > .text {
		display: flex;
		flex-direction: column;
		align-items: end;
	}
	.category:nth-of-type(2) > .text > * {
		text-align: end;
	}
	.text {
		height: 100%;
		padding: var(--size-l);
	}
	img {
		width: 50%;
		border-radius: var(--size-s);
	}

	section {
		background-color: var(--secondary);
		padding: calc(var(--size-l) + var(--size-m)) 0;
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
		.category:nth-of-type(2) > .text {
			align-items: start;
			order: 2;
		}
		.category:nth-of-type(2) > .text > * {
			text-align: start;
		}
		.category:nth-of-type(2) > img {
			order: 1;
		}
		section {
			padding: var(--size-l) 0;
		}
	}
</style>
