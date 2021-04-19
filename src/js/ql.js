import { listen } from 'https://unpkg.com/quicklink/dist/quicklink.mjs'

listen({
  throttle: 4,
  delay: 300,
  ignores: [/\/all\/\?tag=/, /feed\.xml/]
})