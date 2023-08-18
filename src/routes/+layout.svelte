<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import '../styles.css';
	export let data;
	// $: console.log(data);
</script>

<Nav categories={data.categories} />
<slot />
<Footer homePage={data.homePage} categories={data.categories} />
