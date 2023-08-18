<script lang="ts">
	import { locale } from '$i18n/i18n-svelte';
	import type { Category } from '../../types/types';
	import LL from '$i18n/i18n-svelte';
	import LocaleSwitcher from './LocaleSwitcher.svelte';
	import { clickOutside } from 'svelte-use-click-outside';
	import { Hamburger } from 'svelte-hamburgers';

	import { slide } from 'svelte/transition';

	import { page } from '$app/stores';

	import MdiFacebook from '~icons/mdi/facebook';
	import MdiInstagram from '~icons/mdi/instagram';
	import SearchButton from './SearchButton.svelte';
	import MdiMagnify from '~icons/mdi/magnify';

	export let categories: Category[];

	let categoryDropdown = false;
	let languageDropdown = false;
	let height: number;
	let width: number;
	let open = false;
</script>

<svelte:window bind:scrollY={height} bind:innerWidth={width} />

<section class:scrolled={height > 90}>
	<div class="container">
		<nav class:scrolled={height > 90}>
			<a class="logo" href={$LL.link('/')}>
				<picture>
					<source srcset="/images/logo_light.svg" media="(prefers-color-scheme: dark)" />
					<img class:scrolled={height > 90} src="/images/logo_dark.svg" alt="Atta print logo" />
				</picture>
			</a>
			{#if width > 950}
				<ul class="flex gap align margin">
					<SearchButton />

					<li class="dropdown">
						<button
							use:clickOutside={() => (categoryDropdown = false)}
							on:click={() => (categoryDropdown = !categoryDropdown)}
							class="navlink"
						>
							{$LL.nav.categories()}
						</button>

						{#if categoryDropdown}
							<ul class="dropdown_content" transition:slide={{ duration: 300 }}>
								{#each categories as category}
									<li>
										<a class="navlink" href={$LL.link(`/${category.slug}`)}>{category.title}</a>
									</li>
								{/each}
							</ul>
						{/if}
					</li>

					<li><a class="navlink" href={$LL.link('/galerija')}>{$LL.nav.gallery()}</a></li>
					<li>
						<a class="navlink" href="{$page.url.pathname}#about">{$LL.nav.about()}</a>
					</li>
				</ul>
				<ul class="flex">
					<li>
						<a
							aria-label={$LL.seo.header.facebook()}
							class="round_button"
							href="https://www.facebook.com/attaprint1"><MdiFacebook /></a
						>
					</li>
					<li>
						<a
							aria-label={$LL.seo.header.instagram()}
							class="round_button"
							href="https://www.facebook.com/attaprint1"><MdiInstagram /></a
						>
					</li>
				</ul>
				<ul>
					<li class="dropdown">
						<button
							use:clickOutside={() => (languageDropdown = false)}
							on:click={() => (languageDropdown = !languageDropdown)}
							class="navlink"
						>
							{$locale}
						</button>
						{#if languageDropdown}
							<ul class="dropdown_content" transition:slide={{ duration: 300 }}>
								<LocaleSwitcher />
							</ul>
						{/if}
					</li>
				</ul>
			{:else}
				<div class="hamburger">
					<Hamburger bind:open --color="var(--text)" />
				</div>

				{#if open}
					<div class="mobile" transition:slide>
						<ul class="flex gap align margin">
							<li class="flex">
								<form action="/{$locale}/meklet" method="get">
									<input
										type="text"
										name="query"
										aria-label={$LL.seo.search.inputLabel()}
										placeholder={$LL.nav.search()}
									/>
									<button
										on:click={() => (open = false)}
										type="submit"
										aria-label={$LL.seo.search.searchButton()}
										class="flex round_button"
										><MdiMagnify />
									</button>
								</form>
							</li>

							<li class="dropdown">
								<button
									use:clickOutside={() => (categoryDropdown = false)}
									on:click={() => (categoryDropdown = !categoryDropdown)}
									class="navlink"
								>
									{$LL.nav.categories()}
								</button>

								{#if categoryDropdown}
									<ul class="dropdown_content" transition:slide={{ duration: 300 }}>
										{#each categories as category}
											<li>
												<a
													on:click={() => (open = false)}
													class="navlink"
													href={$LL.link(`/${category.slug}`)}>{category.title}</a
												>
											</li>
										{/each}
									</ul>
								{/if}
							</li>

							<li>
								<a class="navlink" on:click={() => (open = false)} href={$LL.link('/galerija')}
									>{$LL.nav.gallery()}</a
								>
							</li>
							<li>
								<a class="navlink" on:click={() => (open = false)} href="{$page.url.pathname}#about"
									>{$LL.nav.about()}</a
								>
							</li>
						</ul>
						<ul class="flex icons">
							<li>
								<a
									aria-label={$LL.seo.header.facebook()}
									class="round_button"
									href="https://www.facebook.com/attaprint1"><MdiFacebook /></a
								>
							</li>
							<li>
								<a
									aria-label={$LL.seo.header.instagram()}
									class="round_button"
									href="https://www.facebook.com/attaprint1"><MdiInstagram /></a
								>
							</li>
						</ul>
						<ul>
							<li class="dropdown">
								<button
									use:clickOutside={() => (languageDropdown = false)}
									on:click={() => (languageDropdown = !languageDropdown)}
									class="navlink"
								>
									{$locale}
								</button>
								{#if languageDropdown}
									<ul class="dropdown_content" transition:slide={{ duration: 300 }}>
										<LocaleSwitcher />
									</ul>
								{/if}
							</li>
						</ul>
					</div>
				{/if}
			{/if}
		</nav>
	</div>
</section>

<style>
	.hamburger {
		margin-left: auto;
		position: relative;
		z-index: 9999;
	}
	.mobile {
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		z-index: 999;
		background: var(--secondary);
		padding: 34px var(--size-l) var(--size-l) var(--size-m);
	}
	.mobile .flex {
		flex-direction: column;
		align-items: start;
	}
	.mobile .icons {
		flex-direction: row;
	}
	img {
		transition: all 0.2s ease-in-out;
		transform-origin: center left;
	}
	img.scrolled {
		transform: scale(0.7);
	}
	section {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 99;
		transition: all 0.2s ease-in-out;
	}
	section.scrolled {
		background-color: var(--primary);
	}
	.margin {
		margin-left: auto;
	}
	nav {
		padding: var(--size-m) 0;
		transition: all 0.2s ease-in-out;
	}
	nav.scrolled {
		padding: var(--size-xs) 0;
	}
	@media only screen and (max-width: 950px) {
		button,
		.navlink {
			padding-left: var(--size-s);
		}
		form > button:hover {
			padding-left: var(--size-s);
		}
		button:hover,
		.navlink:hover {
			padding-left: 32px;
		}
		nav {
			padding: var(--size-xs) 0;
		}
		img {
			transform: scale(0.7);
		}
		form {
			width: 300px;
			position: relative;
		}
		form,
		form button {
			border-radius: var(--size-m);
			display: flex;
			height: 50px;
			transition: all 0.2s ease;
		}
		form button {
			position: absolute;
			top: 0;
			left: 0;
		}
		input {
			border-radius: var(--size-m);
			outline: 2px solid var(--tetriary);
			border: none;
			background: var(--primary);
			width: 250px;
			height: 50px;

			padding: var(--size-s) var(--size-m) var(--size-s) 60px;
		}
	}
</style>
