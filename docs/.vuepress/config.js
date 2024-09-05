import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import {defineNoteConfig, plumeTheme} from "vuepress-theme-plume";




export default defineUserConfig({
  lang: 'zh-CN',
  base: '/design-pattern/',
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
              text: '设计模式七大原则',
              icon: 'arcticons:the-talos-principle', // 侧边栏图标
              items: ['SingleResponsibility','InterfaceSegregation'], // 简化写法，主题会自动补全为 `foo.md`
              collapsed: true,
            }
          ],

        }
      ]
    }
  }),

  bundler: viteBundler(),
})
