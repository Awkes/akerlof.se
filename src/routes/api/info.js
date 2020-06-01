import api from './_api';

export async function get(req, res) {
  api(res, `
    query {
      information {
        title
        firstName
        lastName
        url
      }
    }
  `)  
}