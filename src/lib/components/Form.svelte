<script lang="ts">
	import type { HomePage } from '../../types/types';
	import LL from '$i18n/i18n-svelte';
	import { enhance } from '$app/forms';
	export let homePage: HomePage;

	import { page } from '$app/stores';
</script>

<section id="about">
	<div class="container">
		<div class="contacts flex">
			<div class="contact_container">
				{#await homePage}
					loading
				{:then value}
					<h2>{value.contact_title}</h2>
					<div class="flex gap spaced">
						{#each value.contacts as contact}
							<div>
								<h3>{contact.title}</h3>
								{#each contact.single_contact as singleContact}
									<div class="flex align gap contact">
										<img class="icon" src={singleContact.icon.url} alt="" />
										<a href={$LL.link(`${singleContact.text}`)}>{singleContact.text}</a>
									</div>
								{/each}
							</div>
						{/each}
					</div>
				{/await}
			</div>
			<div class="form">
				{#if $page.form?.success}
					<div class="flex align justify success">
						<h3 class="message">{$LL.form.success()}</h3>
					</div>
				{:else}
					<h3>{$LL.form.message()}</h3>
					<form action="?/mail" method="post" class="flex collumn" use:enhance>
						<div class="flex spaced gap">
							<label for="name">{$LL.form.name()}</label>
							<input type="text" name="name" id="name" />
						</div>
						<div class="flex spaced gap">
							<label for="surname">{$LL.form.surname()}</label>
							<input type="text" name="surname" id="surname" />
						</div>
						<div class="flex spaced gap">
							<label for="email">{$LL.form.email()}</label>
							<input type="email" name="email" id="email" />
						</div>
						<div class="flex spaced gap">
							<label for="message">{$LL.form.text()}</label>
							<textarea name="message" id="message" />
						</div>
						<button class="button">{$LL.buttons.send()}</button>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	.message {
		text-align: center;
	}
	.success {
		height: 100%;
	}
	.contact_container > .spaced {
		width: 70%;
	}
	.icon {
		height: 30px;
		width: 30px;
		border-radius: var(--size-l);
	}
	.contact_container {
		width: 65%;
	}
	input {
		border-radius: var(--size-xs);
		margin-bottom: var(--size-s);
		background-color: var(--primary);
		border: none;
		width: 250px;
		height: 100%;
		padding: var(--size-s) var(--size-m);
	}
	textarea {
		border-radius: var(--size-xs);
		margin-bottom: var(--size-l);
		background-color: var(--primary);
		border: none;
		height: 100px;
		width: 250px;
		resize: none;

		padding: var(--size-s) var(--size-m);
	}
	label {
		margin-top: var(--size-xs);
	}

	.form {
		padding: var(--size-l);
		border-radius: var(--size-s);
		background-color: var(--secondary);
		width: 35%;
	}
	.contact {
		margin-bottom: var(--size-xs);
	}
	h3 {
		margin-bottom: var(--size-m);
		font-size: clamp(16px, 3vw, 32px);
	}

	h2 {
		font-size: clamp(32px, 5vw, 72px);
		line-height: 1.2;
		margin-top: var(--size-l);
		margin-bottom: var(--size-l);
	}
	section {
		height: 500px;
		padding-top: var(--size-l);
	}
	@media only screen and (max-width: 1370px) {
		.form {
			width: 50%;
		}
		.contact_container > .spaced {
			width: 80%;
		}

		.contact_container {
			width: 100%;
		}
	}
	@media only screen and (max-width: 950px) {
		.form .flex {
			flex-direction: column;
			gap: var(--size-xs);
		}
		.form {
			width: 100%;
			padding: var(--size-m);
		}
		.contact_container {
			width: 100%;
		}
		.contacts {
			flex-direction: column;
		}
		.contact_container > .spaced {
			width: 70%;
			margin-bottom: var(--size-m);
		}
		input {
			margin-bottom: 0;
		}
		input,
		textarea {
			width: 100%;
		}
		section {
			height: 900px;
		}
		label {
			margin-top: 0;
		}
	}
</style>
