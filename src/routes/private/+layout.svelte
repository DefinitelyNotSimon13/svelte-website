<script>
	let { children, data } = $props();
	const logout = async () => {
		const { error } = await data.supabase.auth.signOut();
		if (error) {
			console.error(error);
		}
	};
</script>

<header>
	<nav>
		<a href="/">Home</a>
	</nav>
	<button onclick={logout}>Logout</button>
</header>
<main>
	{@render children()}
</main>
