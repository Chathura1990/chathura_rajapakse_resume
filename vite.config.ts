import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react()],
    base: env.VITE_BASE_URL || '/chathura_rajapakse_resume/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    // Optional: Define global constants
    define: {
      'import.meta.env.VITE_BASE_URL': JSON.stringify(env.VITE_BASE_URL || '/chathura_rajapakse_resume/')
    }
  }
})