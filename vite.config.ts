import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import type { ConfigEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default (configEnv: ConfigEnv) => {
  process.env = { ...process.env, ...loadEnv(configEnv.mode, process.cwd(), '') };

  return defineConfig({
    base: process.env.VITE_APP_BASE_URL,
    plugins: [
      react(),
      VitePWA({
        workbox: {
          globPatterns: ['**/*'],
        },
        includeAssets: ['**/*'],
        manifest: {
          'theme_color': '#FFFFFF',
          'background_color': '#FFFFFF',
          'display': 'standalone',
          'scope': process.env.VITE_APP_BASE_URL,
          'start_url': process.env.VITE_API_BASE_URL,
          'name': 'split bill easy',
          'short_name': 'split bill easy',
          'description':
            'Effortlessly divide restaurant bills among friends. Accurate, customizable, with tip calculator & multiple currencies. Dine stress-free!',
          'icons': [
            {
              'src': './icon-192x192.png',
              'sizes': '192x192',
              'type': 'image/png',
            },
            {
              'src': './icon-256x256.png',
              'sizes': '256x256',
              'type': 'image/png',
            },
            {
              'src': './icon-384x384.png',
              'sizes': '384x384',
              'type': 'image/png',
            },
            {
              'src': './icon-512x512.png',
              'sizes': '512x512',
              'type': 'image/png',
            },
          ],
        },
      }),
    ],
    resolve: {
      alias: [
        { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
        { find: '@pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
        { find: '@widgets', replacement: fileURLToPath(new URL('./src/widgets', import.meta.url)) },
        { find: '@features', replacement: fileURLToPath(new URL('./src/features', import.meta.url)) },
        { find: '@entities', replacement: fileURLToPath(new URL('./src/entities', import.meta.url)) },
        { find: '@shared', replacement: fileURLToPath(new URL('./src/shared', import.meta.url)) },
      ],
    },
  });
};
