import type { PostgrestResponse } from '@supabase/supabase-js';
import type { PageServerLoad } from './$types';
import type { Note } from '$types/database';
import { error as svelteError } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {
	depends('supabase:db:notes');

	const { data, error }: PostgrestResponse<Note> = await supabase.from('notes').select('id,note');

	if (error) {
		console.error('Error loading countries:', error);
		svelteError(500, error);
	}
	return { notes: data ?? [] };
};
