<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import type { Snippet } from 'svelte';

	interface Props {
		text: string;
		formaction: string;
		children: Snippet;
	}
	let { text, formaction, children }: Props = $props();
</script>

<Form.Button class="w-full" variant="outline" {formaction} formnovalidate>
	{@render children()}
	{text}
</Form.Button>
