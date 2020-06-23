import api from '../_api';

export async function get(req, res) {
  const { slug } = req.params;
  api(res, `
    query {
      project(filter: {slug: {eq: "${slug}"}}) {
        title
        screenshot {
          url
          alt
        }
        description(markdown: true)
        siteUrl
        repositoryUrl
      }
      projectPage {
        repositoryLabel
        siteLabel
      }
    }
  `)  
}