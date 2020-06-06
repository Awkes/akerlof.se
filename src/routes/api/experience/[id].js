import api from '../_api';

export async function get(req, res) {
  const { id } = req.params;
  api(res, `
    query MyQuery {
      experience(filter: {id: {eq: "${id}"}}) {
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