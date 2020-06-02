import api from './_api';

export async function get(req, res) {
  api(res, `
    query {
      about {
        text(markdown: true)
        image {
          url
          alt
        }
      }
    }
  `)  
}