import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { fileURLToPath, URL } from 'node:url'; // Importação para resolver caminhos

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      // Esta é a forma correta de configurar o alias '@' no Vite
      // para que ele encontre a pasta 'src' corretamente.
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
