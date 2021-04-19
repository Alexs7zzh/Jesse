import { listen } from 'https://unpkg.com/quicklink/dist/quicklink.mjs'

listen({
  throttle: 4,
  ignores: [/\/all\/\?tag=/, /feed\.xml/]
})