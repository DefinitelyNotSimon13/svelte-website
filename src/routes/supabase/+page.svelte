<script lang="ts">
	import DataTable from './data-table.svelte';
	import { columns } from './columns';

	let { data } = $props();
</script>

<div class="m-8">
	<h3 class="m-4">Countries</h3>
	<DataTable data={data.countries} {columns} />
</div>
