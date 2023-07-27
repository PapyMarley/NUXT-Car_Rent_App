//https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  ssr: false,
  components: [{ path: '~/components', pathPrefix: false, }],
  modules: ['@ant-design-vue/nuxt'],
  css: ['~/assets/stylesheet.css'],
  routeRules: {
    '/api/users': {
      proxy: {to: "http://localhost:8084/users"}
    },
    '/api/vehicles': {
      proxy: {to:"http://localhost:8082/vehicles"}
    },
    '/api/reservations/**': {
      proxy: {to:"http://localhost:8083/reservations/**"}
    },
    '/api/types': {
      proxy: {to:"http://localhost:8082/types"}
    }
  }
})
