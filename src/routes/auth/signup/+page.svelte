<script lang="ts">
	import SignupForm from './signup-form.svelte';
	let { data } = $props();
</script>

<div class="flex h-full w-full items-center justify-center px-4">
	<SignupForm data={data.form} />
</div>
