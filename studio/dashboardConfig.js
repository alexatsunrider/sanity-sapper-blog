export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d15526967f924bb520b1730',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-rm8kifh1',
                  apiId: 'af05bb7f-04cf-4197-804c-5fdc804e571b'
                },
                {
                  buildHookId: '5d155269b359dad622a189f1',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-uzkcbdhj',
                  apiId: 'c37ddf25-1dbe-4740-a1fa-7828dfd23b59'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alexatsunrider/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-uzkcbdhj.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
