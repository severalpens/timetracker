/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createComponent = /* GraphQL */ `
  mutation CreateComponent(
    $input: CreateComponentInput!
    $condition: ModelComponentConditionInput
  ) {
    createComponent(input: $input, condition: $condition) {
      id
      parentId
      type
      name
      description
      isActive
      startTime
      endTime
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateComponent = /* GraphQL */ `
  mutation UpdateComponent(
    $input: UpdateComponentInput!
    $condition: ModelComponentConditionInput
  ) {
    updateComponent(input: $input, condition: $condition) {
      id
      parentId
      type
      name
      description
      isActive
      startTime
      endTime
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteComponent = /* GraphQL */ `
  mutation DeleteComponent(
    $input: DeleteComponentInput!
    $condition: ModelComponentConditionInput
  ) {
    deleteComponent(input: $input, condition: $condition) {
      id
      parentId
      type
      name
      description
      isActive
      startTime
      endTime
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
