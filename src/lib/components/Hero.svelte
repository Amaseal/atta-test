<script lang="ts">
	import type { HomePage, Promos } from '../../types/types';
	import LL from '$i18n/i18n-svelte';
	import { locale } from '$i18n/i18n-svelte';

	import MdiChevronUp from '~icons/mdi/chevron-up';
	import MdiChevronDown from '~icons/mdi/chevron-down';

	export let homePage: HomePage;
	export let promos: Promos[];

	let index = 0;

	const next = () => {
		if (index > promos.length) {
			index = 1;
		}

		index = (index + 1) % promos.length;
	};
	const back = () => {
		if (index < 1) {
			index = promos.length;
		}
		index = (index - 1) % promos.length;
	};
</script>

<section>
	<div class="container">
		<div class="grid align">
			<div class="text flex align">
				<div class="flex collumn start">
					<h1>{@html homePage.title}</h1>
					<p>{homePage.description}</p>
					<a class="button" href={$LL.link('/pakalpojumi')}>{$LL.buttons.hero()}</a>
				</div>
			</div>
			<div class="promo">
				{#if promos.length > 0}
					<div class="flex align image">
						{#each [promos[index]] as promo}
							<img src={promo.image.formats.medium?.url || promo.image.url} alt="" />
						{/each}
						<div class="flex collumn align justify controls">
							<button aria-label={$LL.seo.slider.previous()} class="flex" on:click={() => back()}
								><MdiChevronUp /></button
							>
							{#each promos as promo, i}
								<button
									aria-label={$LL.seo.slider.goTo()}
									class:active={i === index}
									on:click={() => (index = i)}
									class="control"
								/>
							{/each}
							<button aria-label={$LL.seo.slider.next()} class="flex" on:click={() => next()}
								><MdiChevronDown /></button
							>
						</div>
					</div>

					<div class="promo_info flex align gap">
						<p>{promos[index].text}</p>
						<a
							href={$LL.link(
								`/${promos[index].service.category.slug}/${promos[index].service.slug}`
							)}
							class="round_button">→</a
						>
					</div>
				{:else}
					<img src={homePage.image.formats.medium?.url} alt="business cards" />
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	.promo_info {
		display: flex;
		align-items: center;
		position: absolute;
		bottom: var(--size-l);
	}
	.promo_info > p {
		font-size: 16px;
		margin-bottom: 0;
	}

	.image {
		height: 100%;
	}
	.control.active {
		background-color: var(--text);
		scale: 1.1;
	}
	.control {
		background-color: var(--primary);
		border-radius: 50%;
		height: 15px;
		width: 15px;
		border: 1px solid var(--text);
		margin: var(--size-xs);
	}
	.round_button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 54px;
		height: 54px;
	}
	.controls {
		padding: var(--size-xs);
		width: 50px;
	}
	.promo,
	.text {
		height: 100vh;
		padding-bottom: var(--size-l);
		padding-top: calc(var(--size-xl) + var(--size-m));
	}

	.grid {
		grid-template-columns: 0.7fr 1.3fr;
	}
	img {
		height: 100%;
		width: 100%;
		max-width: calc(100% - 50px);
		object-fit: contain;
		border-radius: var(--size-m);
	}
	section {
		height: 100vh;
	}

	p {
		font-size: clamp(16px, 2vw, 24px);

		margin-bottom: var(--size-l);
	}
	h1 {
		margin: 0;
		margin-top: auto;
		margin-bottom: var(--size-m);
	}
	.container {
		height: 100%;
	}
	@media only screen and (max-width: 800px) {
		.flex {
			flex-direction: column;
		}
		.grid {
			grid-template-columns: 1fr;
		}
		.text {
			padding-bottom: var(--size-s);
		}
		.promo,
		.text {
			height: auto;
		}
		.promo {
			padding: 0;
			position: relative;
		}
		.promo_info {
			flex-direction: row;
		}
		img {
			padding-bottom: var(--size-xs);
			max-width: 100%;
		}
		.controls {
			position: absolute;
			bottom: 0;
			transform: rotate(90deg);
		}
		section {
			height: auto;
		}
		.promo_info {
			display: flex;
			align-items: center;
			position: relative;
			bottom: 0;
			margin-bottom: 100px;
		}
	}
</style>
