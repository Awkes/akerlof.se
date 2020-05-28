const fetch = require('node-fetch');

export default async function api(response, query) {
  const url = process.env.API_URL;
  const token = process.env.API_TOKEN;

  const options = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ query })
  }

  fetch(url, options)
    .then(res => res.json())
    .then(data => {
      if (data) {
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(data));
      }
    })
    .catch(console.error)
}