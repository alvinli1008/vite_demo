/* eslint-env node */
import { defineConfig } from 'vite';
// import legacy from '@vitejs/plugin-legacy'; // 为打包后的文件提供传统浏览器兼容性支持
import vitePluginImp from 'vite-plugin-imp'; // 自动加载组件样式
import path from 'path';

import antOverride from './theme.config';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    // include: ['.js', '.jsx'],
  },
  plugins: [
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/lib/${name}/style/index.less`
        }
      ]
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: antOverride
      }
    }
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  }
});
