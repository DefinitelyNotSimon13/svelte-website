<script lang="ts">
	import { error } from '@sveltejs/kit';
	error(500, {
		message: 'This is cool'
	});
</script>
