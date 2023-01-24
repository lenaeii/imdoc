import { defaultTheme } from '@vuepress/theme-default'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { searchPlugin } from '@vuepress/plugin-search'

export default {
    base: '/imdoc/',
    title: 'Inductive Miner Visualizer',
    plugins: [
      externalLinkIconPlugin({
  
      }),

      searchPlugin({
        // options
      }),
    ],
    theme: defaultTheme(
        

        {navbar: [
        // NavbarItem
     {
         text: 'Github',
         link: 'https://github.com/',
        },
        // NavbarGroup

        

       {
         text: 'Drop-down',
         children: ['Education.md', 'README.md'],
        },
        // string - page file path
        'File',
      ],

      
    }
  ),

    
  }