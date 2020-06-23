import api from './_api';

export async function get(req, res) {
  api(res, `
    query {
      menu {
        menuItems {
          label
          slug
          image {
            url
          }
        }
      }
    }
  `)  
}