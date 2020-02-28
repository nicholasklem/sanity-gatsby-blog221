export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e590250164f78338db9edfe',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog221-studio',
                  apiId: 'a818f672-8b70-4e7a-8b77-a07f8eaf9e0e'
                },
                {
                  buildHookId: '5e5902500889c35f68177667',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog221',
                  apiId: '74092ef3-cc2d-4189-aa5e-5b545e2eb990'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicholasklem/sanity-gatsby-blog221',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog221.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
