<script>
	let { text = null } = $props();
</script>

<div class="m-4 flex items-center">
	<div class="flex-grow border-t border-gray-600"></div>
	{#if text}
		<span class="px-3 text-gray-500">{text}</span>
	{/if}
	<div class="flex-grow border-t border-gray-600"></div>
</div>
