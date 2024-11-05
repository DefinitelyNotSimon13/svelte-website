<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if $page.error}
	<h1>Login error</h1>
	<h2>{$page.status ?? 500}</h2>
	<p>{$page.error.message ?? 'No specific error message provided.'}</p>
{:else}
	<h1>No error found</h1>
	<p>Everything seems to be working fine!</p>
{/if}
