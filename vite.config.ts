import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

const supportedExtensions = ['jpg', 'jpeg', 'png'];

export default defineConfig({
	plugins: [sveltekit(), imagetools({
		defaultDirectives: (url) => {
			const extension = url.pathname.substring(url.pathname.lastIndexOf('.') + 1);
			if(supportedExtensions.includes(extension)) {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				return new URLSearchParams({
					format: 'webp;' + extension,
					as: 'picture'
				})
			}
			return new URLSearchParams();
		},
	})]
});
