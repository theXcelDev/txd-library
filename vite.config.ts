import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'txd-library': path.resolve(__dirname, './src/')
    }
  },
  plugins: [react(), tailwindcss()]
});
