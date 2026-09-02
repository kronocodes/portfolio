import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
const _plugins = [react()];

export default defineConfig({
  server: {
    watch: {
      usePolling: true
    },
    proxy: {
      '/api/leetcode': {
        target: 'https://leetcode-api-faisalshohag.vercel.app',
        changeOrigin: true,
        rewrite: () => '/kronocodes',
      },
    },
  },
  plugins: _plugins
});
