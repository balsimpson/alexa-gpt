import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
          title: 'Alexa GPT',
          meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          ],
        }
      },
    css: ["~/assets/css/styles.css"],
    modules: ['@nuxtjs/tailwindcss'],
    publicRuntimeConfig: {
      OPENAI_KEY: process.env.OPENAI_KEY,
    },
    privateRuntimeConfig: {
      OPENAI_KEY: process.env.OPENAI_KEY,
    },
})
