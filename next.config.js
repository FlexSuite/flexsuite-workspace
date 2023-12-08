/** @type {import('next').NextConfig} */

/**
 * Remote applist add
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const NextFederationPlugin = require("@module-federation/nextjs-mf")

const modules = [
  {
    name: "secas",
    description: "segurança",
    filename: "secas-entry.js",
    path: "secas/module",
    port: 3001,
  },
  {
    name: "fatur",
    description: "faturamento",
    filename: "fatur-entry.js",
    path: "fatur/module",
    port: 3002,
  },
]

const remote = (isServer) => {
  /**
   * Developer
   */
  // eslint-disable-next-line no-constant-condition
  const location = isServer && false ? "ssr" : "chunks"

  const returnObject = {}
  modules.forEach(({name,filename,port}) => returnObject[name] = `${name}@http://localhost:${port}/_next/static/${location}/${filename}`)
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
    config.output.publicPath = "http://localhost:3000/"
    return config
  },
}
module.exports = nextConfig
