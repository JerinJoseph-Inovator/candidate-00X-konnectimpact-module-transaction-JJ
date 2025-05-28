import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // <-- Make sure this is '/' or your deployed path
  plugins: [react()],
});
