/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBuisness = /* GraphQL */ `
  mutation CreateBuisness(
    $input: CreateBuisnessInput!
    $condition: ModelBuisnessConditionInput
  ) {
    createBuisness(input: $input, condition: $condition) {
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
export const updateBuisness = /* GraphQL */ `
  mutation UpdateBuisness(
    $input: UpdateBuisnessInput!
    $condition: ModelBuisnessConditionInput
  ) {
    updateBuisness(input: $input, condition: $condition) {
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
export const deleteBuisness = /* GraphQL */ `
  mutation DeleteBuisness(
    $input: DeleteBuisnessInput!
    $condition: ModelBuisnessConditionInput
  ) {
    deleteBuisness(input: $input, condition: $condition) {
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
