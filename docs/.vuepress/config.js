import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import {defineNoteConfig, plumeTheme} from "vuepress-theme-plume";




export default defineUserConfig({
  lang: 'zh-CN',
  base: './',
  title: '设计模式笔记',
  description: '记录学习设计模式笔记',
  theme: plumeTheme({
    notes: {
      dir: 'notes', // 声明所有笔记的目录
      link: '/', // 声明所有笔记默认的链接前缀， 默认为 '/'
      notes: [
        {
          dir: 'principle', // 声明笔记的目录，相对于 `notes.dir`
          link: '/principle/', // 声明笔记的链接前缀
          sidebar: [ // 配置侧边栏
            {
              text: '单一责任原则',
              icon: 'mdi:language-typescript', // 侧边栏图标
              items: ['SingleResponsibility'] // 简化写法，主题会自动补全为 `foo.md`
            },
            {
              text: '接口隔离原则',
              icon: 'mdi:language-typescript', // 侧边栏图标
              items: ['InterfaceSegregation'] // 简化写法，主题会自动补全为 `foo.md`
            }
          ]
        }
      ]
    }
  }),

  bundler: viteBundler(),
})
