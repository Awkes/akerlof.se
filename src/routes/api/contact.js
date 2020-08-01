import api from './_api';

export async function get(req, res) {
  api(res, `
    query {
      contact {
        eMailErrorMsg
        eMailLabel
        eMailValidationRegexp
        messageErrorMsg
        messageLabel
        messageValidationRegexp
        nameErrorMsg
        nameLabel
        nameValidationRegexp
        submitLabel
        text(markdown: true)
        socialMediaLinks {
          name
          link
          icon {
            url
          }
        }
      }
    }
  `)
}