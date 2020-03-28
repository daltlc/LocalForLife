/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBuisness = /* GraphQL */ `
  query GetBuisness($id: ID!) {
    getBuisness(id: $id) {
      id
      yourName
      nameOfBusiness
      description
      image
      deal
      siteURL
    }
  }
`;
export const listBuisnesss = /* GraphQL */ `
  query ListBuisnesss(
    $filter: ModelBuisnessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBuisnesss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        yourName
        nameOfBusiness
        description
        image
        deal
        siteURL
      }
      nextToken
    }
  }
`;
