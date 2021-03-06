module.exports = {
	config: {
		tailwindjs: "./tailwind.config.js",
		port: 9050
	},
	paths: {
		root: "./",
		src: {
			base: "./src",
			//css: "./src/assets/css",
			css: "./src",
			js: "./src/js",
			img: "./src/assets/images",
			includeHtml: './src/html/include_html',
			guide: './src/guide',
			guideImg: './src/guide/code/styles',
		},
		dist: {
			base: "./dist",
			//css: "./dist/assets/css",
			css: "./dist",
			js: "./dist/js",
			img: "./dist/assets/images",
			guide: './dist/guide',
			guideImg: './dist/guide/code/styles',
		},
		build: {
			base: "./build",
			css: "./build/assets/css",
			cssFile: "ps_style_pc",
			js: "./build/js",
			jsLib: "./dist/js/lib",
			jsFile: "ps_script_pc",
			img: "./build/assets/images"
		}
	}
}