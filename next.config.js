/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV !== 'production' ? true : false
})
const withTM = require('next-transpile-modules')(['three'])

module.exports = withTM(
  withPWA({
    reactStrictMode: true,
    swcMinify: true
  })
)
