import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src/app"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@widgets": path.resolve(__dirname, "src/widgets"),
      "@features": path.resolve(__dirname, "src/features"),
      "@entities": path.resolve(__dirname, "src/entities"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@": path.resolve(__dirname, "src"),
    },
  },

  optimizeDeps: {
    exclude: [
      // zod만 제외해도 충분히 안전함 (ESM 패키지)
      'zod',
    ],
  },

  build: {
    sourcemap: false,


    rollupOptions: {
      treeshake: true,
    },
  },
});
