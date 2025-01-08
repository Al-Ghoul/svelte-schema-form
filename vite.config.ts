import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
// @ts-ignore
import path from 'path';

const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'svelte-schema-form': path.resolve('src/lib')
		}
	}
};

export default config;
