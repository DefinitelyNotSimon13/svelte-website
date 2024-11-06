<script lang="ts">
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { loginSchema, type LoginSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import * as Card from '$lib/components/ui/card';
	import Seperator from '$lib/components/seperator.svelte';
	import GoogleButton from '../components/google-button.svelte';
	import GithubButton from '../components/github-button.svelte';

	export let data: SuperValidated<Infer<LoginSchema>>;

	const form = superForm(data, {
		validators: zodClient(loginSchema)
	});

	const { form: formData, enhance } = form;
</script>

<Card.Root class="mx-auto w-full max-w-sm">
	<Card.Header>
		<Card.Title class="text-2xl">Welcome back</Card.Title>
		<Card.Description>Sign in to your account</Card.Description>
	</Card.Header>
	<Card.Content>
		<form method="POST" action="?/login" use:enhance>
			<div class="grid gap-4">
				<GithubButton text="Continue with GitHub" formaction="?/continueWithGithub" />
				<GoogleButton text="Continue with Google" formaction="?/continueWithGoogle" />
			</div>
			<Seperator text="or" />

			<div class="grid gap-4">
				<Form.Field {form} name="email">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label class="text-gray-400">Email</Form.Label>
							<Input {...props} bind:value={$formData.email} />
						{/snippet}
					</Form.Control>
					<Form.Description></Form.Description>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="password">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label class="text-gray-400">Password</Form.Label>
							<Input type="password" {...props} bind:value={$formData.password} />
						{/snippet}
					</Form.Control>
					<Form.Description></Form.Description>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Button class="w-full">Login</Form.Button>
			</div>
			<div class="mt-4 text-center text-sm">
				Don't have an account?
				<a href="/auth/signup" class="underline"> Sign up </a>
			</div>
		</form>
	</Card.Content>
</Card.Root>
