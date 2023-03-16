import { defineConfig,loadEnv} from 'vite'
import type { UserConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// 自动导入element-plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

const root = process.cwd()
function pathResolve(dir: string) {
  return resolve(root, '.', dir)
}

export default defineConfig(({ command, mode }: ConfigEnv): UserConfig=>{
    return {
      plugins: [
          vue(),
          AutoImport({
              // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
              // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
              resolvers: [
                  ElementPlusResolver(),
                  // Auto import icon components
                  // 自动导入图标组件
                  IconsResolver({
                      prefix: 'Icon',
                  }),
              ],

          }),

          Components({
              resolvers: [
                  // Auto register icon components
                  // 自动注册图标组件
                  IconsResolver({
                      enabledCollections: ['ep'],
                  }),
                  // Auto register Element Plus components
                  // 自动导入 Element Plus 组件
                  ElementPlusResolver(),
              ],
          }),

          Icons({
              autoInstall: true,
          }),

      ],
      resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.less', '.css'],
        alias: [
          {
            find: /\@\//,
            replacement: `${pathResolve('src')}/`
          }
        ]
      },
    }
})