import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
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
        include: './dist',
        authToken: env.VITE_SENTRY_AUTH_TOKEN,
        telemetry: false,
        
      })
    ],
    build: {
      sourcemap: true,
      emptyOutDir: true
    }
  })
}
