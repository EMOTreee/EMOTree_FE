import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'
import { viteMockServe } from 'vite-plugin-mock'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
    svgr({
      svgrOptions: {
        icon: true, // SVG를 아이콘처럼 사용 가능
        // titleProp, ref 등 필요한 옵션 설정 가능
      },
    }),
    viteMockServe({
      mockPath: './src/mock',
    })
  ],
})
