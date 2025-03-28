import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './env',
  plugins: [react()],
  server: {
    host: '0.0.0.0',  
    port: 3000,        
  },
  preview: {
    allowedHosts: ['candidate-search-07y7.onrender.com', 'localhost'],  
  },
});
