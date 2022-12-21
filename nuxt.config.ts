import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
          title: 'Nuxt 3 Blogger',
          meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          ],
        }
      },
    css: ["~/assets/css/styles.css"],
    modules: ['@nuxtjs/tailwindcss'],
    // publicRuntimeConfig: {
    //   FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    //   FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID
    // },
    // privateRuntimeConfig: {
    //   FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    //   FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID
    // },
})
