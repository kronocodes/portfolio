import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
const _plugins = [react()];

export default defineConfig({
  server: {
    watch: {
      usePolling: true
    }
  },
  plugins: _plugins
});
