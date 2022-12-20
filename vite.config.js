import {
	sveltekit
} from '@sveltejs/kit/vite';


/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import '${__dirname}/src/style/guide/variables.scss';`,

			}
		}
	}
};

export default config;