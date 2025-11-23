// vite.config.mjs
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/topic-master/', // 你的项目路径
  plugins: [react()],
});

