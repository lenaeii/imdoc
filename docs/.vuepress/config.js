import { defaultTheme } from '@vuepress/theme-default'

export default {
    base: '/imdoc/',
    title: 'Inductive Miner Visualizer',
    theme: defaultTheme({
        
        navbar: [
        // NavbarItem
        {
          text: 'Nav',
          link: '/foo/',
        },
        // NavbarGroup
        {
          text: 'Drop-down',
          children: ['/group/foo.md', '/group/bar.md'],
        },
        // string - page file path
        'File',
      ],

      
    }),

    
  }