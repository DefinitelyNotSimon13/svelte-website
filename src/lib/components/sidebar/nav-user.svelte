<script lang="ts">
	import BadgeCheck from 'lucide-svelte/icons/badge-check';
	import Bell from 'lucide-svelte/icons/bell';
	import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';
	import CreditCard from 'lucide-svelte/icons/credit-card';
	import LogOut from 'lucide-svelte/icons/log-out';
	import Sparkles from 'lucide-svelte/icons/sparkles';
	import LogIn from 'lucide-svelte/icons/log-in';

	import * as Avatar from '$lib/components/ui/avatar';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import { useSidebar } from '$lib/components/ui/sidebar';
	import type { SupabaseClient, User } from '@supabase/supabase-js';
	import type { Data } from '$types/data.ts';

	interface Props {
		user: User | null;
		data: Data;
	}
	let { data }: Props = $props();
	let { supabase, user } = data;

	console.log('Metadata: ', user?.user_metadata);
	let email: string = user?.email ?? 'NOT LOGGED IN';
	let username: string = user?.user_metadata?.user_name ?? 'NO USERNAME';
	let avatar: string | null = user?.user_metadata?.avatar_url;

	const sidebar = useSidebar();

	const logout = async () => {
		console.log('Fun');
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error(error);
		}
	};
</script>

<Sidebar.Menu>
	<Sidebar.MenuItem>
		{#if data.session}
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
					<Sidebar.MenuButton
						{...props}
						size="lg"
						class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
					>
						<Avatar.Root class="h-8 w-8 rounded-lg">
							<Avatar.Image src={avatar} alt={username} />
							<Avatar.Fallback class="rounded-lg">CN</Avatar.Fallback>
						</Avatar.Root>
						<div class="grid flex-1 text-left text-sm leading-tight">
							<span class="truncate font-semibold">{username}</span>
							<span class="truncate text-xs">{email}</span>
						</div>
						<ChevronsUpDown class="ml-auto size-4" />
					</Sidebar.MenuButton>
				{/snippet}
			</DropdownMenu.Trigger>
			<DropdownMenu.Content
				class="w-[--bits-dropdown-menu-anchor-width] min-w-56 rounded-lg"
				side={sidebar.isMobile ? 'bottom' : 'right'}
				align="end"
				sideOffset={4}
			>
				<DropdownMenu.Label class="p-0 font-normal">
					<div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
						<Avatar.Root class="h-8 w-8 rounded-lg">
							<Avatar.Image src={avatar} alt={username} />
							<Avatar.Fallback class="rounded-lg">CN</Avatar.Fallback>
						</Avatar.Root>
						<div class="grid flex-1 text-left text-sm leading-tight">
							<span class="truncate font-semibold">{username}</span>
							<span class="truncate text-xs">{email}</span>
						</div>
					</div>
				</DropdownMenu.Label>
				<DropdownMenu.Separator />
				<DropdownMenu.Group>
					<DropdownMenu.Item>
						<Sparkles />
						Upgrade to Pro
					</DropdownMenu.Item>
				</DropdownMenu.Group>
				<DropdownMenu.Separator />
				<DropdownMenu.Group>
					<DropdownMenu.Item>
						<BadgeCheck />
						Account
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<CreditCard />
						Billing
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<Bell />
						Notifications
					</DropdownMenu.Item>
				</DropdownMenu.Group>
				<DropdownMenu.Separator />
				<DropdownMenu.Item onclick={logout}>
					<LogOut />
					Log out
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
		{:else}
					<Sidebar.MenuButton
						size="lg"
						class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
					>
					<LogOut />
						<div class="grid flex-1 text-left text-sm leading-tight">
							<a class="truncate font-semibold" href="/auth/login">Login</a>
						</div>
					</Sidebar.MenuButton>
		{/if}
	</Sidebar.MenuItem>
</Sidebar.Menu>
