import api from '../_api';

export async function get(req, res) {
  const { slug } = req.params;
  api(res, `
    query {
      experience(filter: {slug: {eq: "${slug}"}}) {
        name
        icon {
          url
          alt
        }
        description
      }
    }
  `)  
}