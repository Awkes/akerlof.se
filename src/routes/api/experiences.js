import api from './_api';

export async function get(req, res) {
  api(res, `
    query {
      allExperiences(orderBy: position_ASC) {
        name
        icon {
          url
          alt
        }
        slug
        name
      }
    }
  `)  
}