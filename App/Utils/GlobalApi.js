import { request, gql } from 'graphql-request'

const MASTER_URL = "https://api-eu-west-2.hygraph.com/v2/clrucvfg70zg401w1pjn4jhoy/master"

const getSlider = async () => {
    const query = gql`
    query GetSliders {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
    `
    const result = await request(MASTER_URL, query)
    return result
}


