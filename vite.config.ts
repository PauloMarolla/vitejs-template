import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig, loadEnv } from 'vite'
import { sentryVitePlugin } from '@sentry/vite-plugin'

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(),'' )

  return defineConfig({
    define: {
      'process.env': env
    },

    plugins: [
      react(), 
      tsconfigPaths(),
      sentryVitePlugin({
        org: 'marolla',
        project: 'vitejstemplate',
        include: './dist/assets',
        authToken: env.VITE_SENTRY_AUTH_TOKEN,
        release: 'vite@4.0.0',
        urlPrefix: '~/assets',
        rewrite: false
      })
    ],
    build: {
      sourcemap: true,
    },
    
    server: {
      port: 3000
    }
  })
}
