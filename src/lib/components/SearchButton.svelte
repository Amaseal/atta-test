<script lang="ts">
	import MdiMagnify from '~icons/mdi/magnify';
	let searchOpen = false;
	let searchQuery = '';

	import LL, { locale } from '$i18n/i18n-svelte';
	import { clickOutside } from 'svelte-use-click-outside';

	let handleOutside = () => {
		searchOpen = false;
		searchQuery = '';
	};
	let width: number;

	$: if (width < 950) {
		searchOpen = true;
	}
</script>

<svelte:window bind:innerWidth={width} />

<li class="flex" use:clickOutside={handleOutside}>
	<form class:active={searchOpen} action="/{$locale}/meklet" method="get">
		<input
			bind:value={searchQuery}
			class:active={searchOpen}
			type="text"
			name="query"
			aria-label={$LL.seo.search.inputLabel()}
			placeholder={$LL.nav.search()}
		/>
		<button
			disabled={!searchQuery}
			on:click={() => (searchOpen = false)}
			class:active={searchOpen}
			type="submit"
			aria-label={$LL.seo.search.searchButton()}
			class="flex round_button"
			><MdiMagnify />
		</button>
	</form>

	<button
		aria-label={$LL.seo.search.openSearch()}
		class="flex round_button"
		on:click={() => (searchOpen = !searchOpen)}
		><MdiMagnify />
	</button>
</li>

<style>
	button.active {
		z-index: 100;
	}
	form.active {
		width: 200px;
	}
	li {
		position: relative;
		width: 50px;
		height: 50px;
	}
	form,
	button {
		border-radius: var(--size-m);
		display: flex;
		width: 50px;
		height: 50px;
		right: 0;
		position: absolute;
		transition: all 0.2s ease;
	}
	button {
		background-color: var(--primary);
	}
	input {
		border-radius: var(--size-m);
		outline: 2px solid var(--tetriary);
		border: none;
		background: var(--primary);
		width: 100%;
		height: 100%;
		position: absolute;
		padding: var(--size-s) var(--size-m);
	}
	@media only screen and (max-width: 950px) {
		form,
		button {
			right: auto;
			position: absolute;
		}
		form.active {
			width: 200px;
		}
		input {
			padding-left: var(--size-l);
		}
	}
</style>
