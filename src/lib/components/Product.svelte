<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	//@ts-ignore
	import { tooltip } from '@svelte-plugins/tooltips';
	import type { Product } from '../../types/types';
	export let product: Product;

	let options = product.prices.map((item, index) => {
		return index;
	});

	import LL from '$i18n/i18n-svelte';

	let selected = '0';
	let index = 0;
	let left = '-20px';
	$: quantity = product.prices[index].quantity;
	let range: HTMLElement;
	let thumbHover = false;

	function onHover() {
		thumbHover = thumbHover ? false : true;
	}

	function handleInput() {
		quantity = product.prices[Math.round(Number(selected))].quantity;
		let min = options[0];
		let max = options[options.length - 1];
		let newVal = Number(((Number(selected) - min) * 100) / (max - min));
		let rangePos = Math.round(16 - newVal * 0.32);

		left = `calc(${newVal}% + (${rangePos}px - 35px)`;
	}

	function handleChange() {
		const value = parseFloat(selected);
		let closestValue = options[0];

		let minDiff = Math.abs(value - closestValue);

		for (let i = 1; i < options.length; i++) {
			const optionvalue = parseFloat(`${options[i]}`);
			const diff = Math.abs(value - optionvalue);

			if (diff < minDiff) {
				minDiff = diff;
				closestValue = options[i];
			}
			selected = closestValue.toString();
			index = closestValue;
			range.blur();

			let min = options[0];
			let max = options[options.length - 1];
			let newVal = Number(((Number(selected) - min) * 100) / (max - min));
			let rangePos = Math.round(16 - newVal * 0.32);

			left = `calc(${newVal}% + (${rangePos}px - 35px)`;
		}
	}
</script>

<div class="grid gap align category">
	<img src={product.image.formats.medium?.url} alt="" />
	<div class="text">
		<h2>{product.title}</h2>
		<div class="description">
			{@html product.description}
		</div>
		{#if product.colors.length > 0}
			<div class="colors">
				<h4>{$LL.slider.colors()}</h4>
				<div class="flex gap">
					{#each product.colors as item}
						<div
							class="color"
							use:tooltip={{ content: `${item.name}` }}
							style="border: 2px solid {item.color}"
						/>
					{/each}
				</div>
			</div>
		{/if}

		{#if product.prices.length > 1}
			<h4>{$LL.slider.quantity()}</h4>
			<!-- svelte-ignore a11y-mouse-events-have-key-events -->
			<div class="input">
				{#if thumbHover}
					<div
						style="left: {left}"
						class="range__tooltip"
						in:fly={{ y: 7, duration: 200 }}
						out:fade={{ duration: 100 }}
					>
						{quantity}
					</div>
				{/if}
				<input
					type="range"
					name="price"
					id="price"
					bind:this={range}
					min={options[0]}
					list="values"
					on:mouseover={() => (thumbHover = true)}
					on:mouseout={() => (thumbHover = false)}
					on:touchstart={() => (thumbHover = true)}
					on:touchend={() => (thumbHover = false)}
					on:change={handleChange}
					on:input={handleInput}
					max={options[options.length - 1]}
					step="0.01"
					bind:value={selected}
				/>
				<datalist id="values">
					{#each options as item}
						<option value={item} />
					{/each}
				</datalist>
			</div>
			<h4>{$LL.slider.price()}</h4>
			{#if product.prices[index].price}
				<h3>{product.prices[index].price}</h3>
			{/if}
		{:else if product.prices.length < 1}
			<p />
		{:else}
			<h4>{$LL.slider.price()}</h4>
			<h3>{product.prices[0].price}</h3>
		{/if}
		<p class="small">{$LL.slider.price_text()}</p>
	</div>
</div>

<style>
	.small {
		font-size: 16px;
	}
	.colors {
		margin-bottom: var(--size-m);
	}
	.color {
		height: 30px;
		width: 30px;
		border-radius: 50%;
		border: 1px solid var(--text);
	}
	img {
		object-fit: cover;
	}
	.grid {
		grid-template-columns: 1fr 1fr;
		align-items: stretch;
	}
	.input {
		width: 70%;
		position: relative;
		margin-top: calc(var(--size-m) * 1.5);
	}
	input {
		background: transparent;
	}
	.range__tooltip {
		pointer-events: none;
		position: absolute;
		top: -33px;
		width: 70px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--text);
		padding: var(--size-xs) var(--size-s);
		border-radius: 4px;
		text-align: center;
		background-color: var(--secondary);
		background: var(--secondary);
	}

	h2 {
		margin-bottom: var(--size-m);
	}
	.category {
		padding: var(--size-m) 0;
	}
	h3 {
		font-size: clamp(24px, 3vw, 32px);
	}
	h4 {
		font-size: clamp(20px, 2.5vw, 18px);
		margin-bottom: var(--size-s);
	}

	.text {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: start;
		justify-content: center;
		flex-direction: column;
		padding: var(--size-l);
	}
	img {
		width: 100%;
		margin: var(--size-m) 0;
		border-radius: var(--size-s);
	}
	.description {
		margin-bottom: var(--size-m);
	}

	@media only screen and (max-width: 800px) {
		.grid {
			grid-template-columns: 1fr;
		}
		.category {
			padding: var(--size-s) 0;
		}
		.text {
			padding: var(--size-s) 0;
		}
	}
</style>
