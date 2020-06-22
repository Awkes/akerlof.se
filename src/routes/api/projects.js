import api from './_api';

export async function get(req, res) {
  api(res, `
    query {
      allProjects(orderBy: position_ASC) {
        title
        screenshot {
          url
          alt
        }
        description(markdown: true)
        siteUrl
        repositoryUrl
        slug
      }
      projectPage {
        repositoryLabel
        siteLabel
      }
    }
  `)  
}