import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [
		react(),
		eslint(),
	],
	resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
	css: {
		modules: {
			localsConvention: "dashes",
		}
	},
  server: {
    port: 4200, 
  }
})

