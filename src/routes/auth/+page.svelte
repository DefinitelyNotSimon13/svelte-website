<script lang="ts">
	import type { PageData } from './$types.js';
	import LoginForm from './login-form.svelte';
	export let data: PageData;
</script>

<div class="flex h-screen w-full items-center justify-center px-4">
	<LoginForm data={data.form} />
</div>
