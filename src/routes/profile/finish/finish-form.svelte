<script lang="ts">
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { finishSchema, type FinishSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<FinishSchema>>;

	const form = superForm(data, {
		validators: zodClient(finishSchema)
	});

	const { form: formData, enhance } = form;
</script>

<div class="grid gap-4">
	<div>
		<h1 class="text-2xl">Finish your Profile</h1>
		<p class="italic">Please provide us with some more information</p>
	</div>
	<form method="POST" action="?/finish" use:enhance>
		<div class="grid gap-4">
			<Form.Field {form} name="username">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label class="text-gray-400">Username</Form.Label>
						<Input {...props} bind:value={$formData.username} />
					{/snippet}
				</Form.Control>
				<Form.Description></Form.Description>
				<Form.FieldErrors />
			</Form.Field>
			<div class="grid grid-cols-2">
				<Form.Field {form} name="firstName">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label class="text-gray-400">First Name</Form.Label>
							<Input {...props} bind:value={$formData.firstName} />
						{/snippet}
					</Form.Control>
					<Form.Description></Form.Description>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="lastName">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label class="text-gray-400">Last Name (Optional)</Form.Label>
							<Input {...props} bind:value={$formData.lastName} />
						{/snippet}
					</Form.Control>
					<Form.Description></Form.Description>
					<Form.FieldErrors />
				</Form.Field>
			</div>
			<Form.Button class="w-full">Confirm</Form.Button>
		</div>
	</form>
</div>
