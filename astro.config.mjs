import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
import solidJs from '@astrojs/solid-js'
import sitemap from '@astrojs/sitemap'
// ...
import Config from './src/bloc/Config'
// import Config from '@bloc/Config' 
// The above line can not be used. 
// This script is used during the build process where tsconfig.json is NOT effective
// import path from 'node:path'
// path.resolve(__dirname, '...') __dirname is not defined
import fs from 'node:fs'


const config = new Config //the default configuration
// try { //overwriting the default configuration if necessary
//   fs.readFileSync('./env', 'utf8')
//     .replace(/\s+/g, '') //remove unnecessary characters
//     .replace(/LANGUAGE=["']([^"']+)["']/, ($, $1, $2) => { //ONLY the first match
//       config.language = $2 //overwriting the language
//       // console.log($2)
//       return '__LANGUAGE_FOUND__'
//     })
//     .replace(/SITE=["'`](https?:\/\/[^"'`]+)["'`]/, ($, $1, $2) => { //ONLY the first match
//       config.site = $2 //overwriting the site
//       // console.log($2)
//       return '__SITE_FOUND__'
//     })
// } catch (error) { }
try {
  fs.readFileSync('./src/theme/bloc/Config.tsx', 'utf8')
    .replace(/readonly|public|\s+/g, '') //remove unnecessary characters
    .replace(/language(:string)?=["'`]([^"'`]+)["'`]/, ($, $1, $2) => { //ONLY the first match
      config.language = $2 //overwriting the language
      // console.log($2)
      return '__LANGUAGE_FOUND__'
    })
    .replace(/site(:string)?=["'`](https?:\/\/[^"'`]+)["'`]/, ($, $1, $2) => { //ONLY the first match
      config.site = $2 //overwriting the site
      // console.log($2)
      return '__SITE_FOUND__'
    })
} catch (error) { }

// @see https://docs.astro.build/en/core-concepts/routing/#redirects
const redirects = { '': `/${config.language}` }
fs.readdirSync('./src/pages/[language]', 'utf8').forEach(file => {
  if (file.endsWith('.astro') && file.length > 6) {
    const page = file.replace(/\.astro$/, '')
    redirects[`/${page}`] = `/${config.language}/${page}`
  }
})

/**
 * @see https://astro.build/config
 * @see https://docs.astro.build/en/reference/configuration-reference/
 * @see https://docs.astro.build/en/guides/server-side-rendering/
 * @see https://docs.astro.build/en/core-concepts/routing/#redirects
 */
export default defineConfig({
  // @see https://docs.astro.build/en/guides/server-side-rendering/
  // @see https://docs.astro.build/en/guides/integrations-guide/node/
  output: 'server',
  adapter: node({
    mode: "standalone"
  }),

  // @see https://docs.astro.build/en/guides/integrations-guide/solid-js
  // @see https://rodneylab.com/astro-sitemaps/
  integrations: [solidJs(), sitemap()],

  compressHTML: true,
  site: config.site,
  build: { //@see https://astro.build/config
    serverEntry: 'main.mjs'
  },
  server: {
    host: true //@see https://docs.astro.build/en/reference/configuration-reference/#serverhost
  },
  // experimental: {
  // 	viewTransitions: true,
  // },

  // @see https://docs.astro.build/en/core-concepts/routing/#redirects
  redirects,
});
