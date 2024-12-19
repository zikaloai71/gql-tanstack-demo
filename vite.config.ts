import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import Checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    Checker({
      // Enable TypeScript checking
      typescript: true,
      
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
});