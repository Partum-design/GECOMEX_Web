import { defineConfig } from 'vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        exsolv: resolve(__dirname, 'exsolv/index.html'),
        soluciones: resolve(__dirname, 'soluciones/index.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        contacto: resolve(__dirname, 'contacto/index.html'),
        articuloComercio: resolve(__dirname, 'blog/articulo-comercio.html'),
        articuloExportacion: resolve(__dirname, 'blog/articulo-exportacion.html')
      }
    }
  }
});
