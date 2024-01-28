import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 세 번째 매개변수를 ''로 설정하면 `VITE_` 접두사에 관계없이 모든 환경 변수를 불러옴
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      react(),
      tsconfigPaths(),
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: { enabled: true },
        manifest: {
          name: 'pawsitive',
          short_name: 'pawsitive',
          start_url: '',
          display: 'standalone',
          orientation: 'portrait',
          theme_color: '#ffffff',
          icons: [
            {
              src: '/maskable_icon_x192.png',
              type: 'image/png',
              sizes: '192x192',
              purpose: 'any',
            },
            {
              src: '/maskable_icon_x192.png',
              type: 'image/png',
              sizes: '192x192',
              purpose: 'maskable',
            },
            {
              src: '/maskable_icon.png',
              type: 'image/png',
              sizes: '512x512',
              purpose: 'any',
            },
            {
              src: '/maskable_icon.png',
              type: 'image/png',
              sizes: '512x512',
              purpose: 'maskable',
            },
          ],
        },
      }),
    ],
    server: {
      port: 3000,
      host: true,
      origin: 'http://0.0.0.0',
    },
    define: {
      __VITE_KAKAO_MAP_API_KEY__: JSON.stringify(env.VITE_KAKAO_MAP_API_KEY),
    },
  }
})
