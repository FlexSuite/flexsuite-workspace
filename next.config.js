/** @type {import('next').NextConfig} */

/**
 * Remote applist add
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const NextFederationPlugin = require("@module-federation/nextjs-mf")

const modules = [
  {
    name: "fatur",
    description: "faturamento",
    filename: "fatur-entry.js",
    path: "fatur/module",
  },
]

const remote = (isServer) => {
  /**
   * Developer
   */
  // eslint-disable-next-line no-constant-condition
  const location = isServer && false ? "ssr" : "chunks"

  const returnObject = {}
  modules.forEach(({name,filename}) => returnObject[name] = `${name}@http://localhost:3001/_next/static/${location}/${filename}`)
  return returnObject
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "workspace",
        filename: "static/chunks/workspace-entry.js",
        exposes: { 
        },
        remotes: remote(options.isServer),
        shared: ["react", "react-dom"],
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      })
    )
    config.output.publicPath = ""
    return config
  },
}
module.exports = nextConfig
