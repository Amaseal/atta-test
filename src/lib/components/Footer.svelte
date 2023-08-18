<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import type { Category, HomePage } from '../../types/types';
	import Form from './Form.svelte';
	import MdiFacebook from '~icons/mdi/facebook';
	import MdiInstagram from '~icons/mdi/instagram';
	export let homePage: HomePage;
	export let categories: Category[];
</script>

<Form {homePage} />
<footer>
	<div class="container">
		<div class="flex gap large">
			<a class="logo" href="/">
				<img src="/images/logo_light.svg" alt="Atta print logo" />
			</a>
			<div class="flex links gap">
				{#each categories as category}
					<div class="flex collumn">
						<a href={$LL.link(`/${category.slug}`)} class="main">{category.title}</a>
						{#each category.services as service}
							<a href={$LL.link(`/${category.slug}/${service.slug}`)}>{service.title}</a>
						{/each}
					</div>
				{/each}
				<a class="main" href={$LL.link('/galerija')}>{$LL.nav.gallery()}</a>
				<a class="main" href={$LL.link('/par-mums')}>{$LL.nav.about()}</a>
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
							href="https://www.instagram.com/atta.print1/"><MdiInstagram /></a
						>
					</li>
				</ul>
			</div>
		</div>
		<span>Attaprint &copy {new Date().getFullYear()}</span>
	</div>
</footer>

<style>
	a {
		max-width: 16ch;
		font-weight: 100;
		margin-bottom: var(--size-s);
	}
	.links {
		width: 100%;
	}
	.icons {
		margin-left: auto;
	}
	.main {
		padding: var(--size-s) 0;
		font-weight: 600;
	}
	footer {
		background-color: black;
		padding: calc(var(--size-xl) + var(--size-l)) 0 var(--size-l) 0;
	}
	footer * {
		color: white;
	}
	@media only screen and (max-width: 950px) {
		.flex {
			flex-wrap: wrap;
		}
		footer {
			padding: var(--size-xl) 0 var(--size-m) 0;
		}
		.icons {
			margin-left: 0;
		}
	}
</style>
