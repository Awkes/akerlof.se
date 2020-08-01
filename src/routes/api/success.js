import api from './_api';

export async function get(req, res) {
  api(res, `
    query {
      contact {
        formSentMsg(markdown: true)
      }
    }
  `)
}