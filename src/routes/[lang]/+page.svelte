<script>
	import LL from '$i18n/i18n-svelte';
	import Categories from '$lib/components/Categories.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Hero from '$lib/components/Hero.svelte';
	export let data;
</script>

<svelte:head>
	<title>{data.homePage.seo.metaTitle}</title>
	<meta name="description" content={data.homePage.seo.metaDescription} />
</svelte:head>

<Hero homePage={data.homePage} promos={data.promos} />
<Categories categories={data.categories} />
<Gallery gallery={data.gallery} homePage={data.homePage} />
