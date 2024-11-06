<script lang="ts">
	import FinishForm from './finish-form.svelte';
	let { data } = $props();
</script>

<div class="flex h-screen w-full items-start justify-start px-4">
	<FinishForm data={data.form} />
</div>
