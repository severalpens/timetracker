/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateComponentInput = {
  id?: string | null,
  parentId: string,
  type: string,
  name: string,
  description: string,
  startTime?: number | null,
  endTime?: number | null,
  _version?: number | null,
};

export type ModelComponentConditionInput = {
  parentId?: ModelStringInput | null,
  type?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  startTime?: ModelIntInput | null,
  endTime?: ModelIntInput | null,
  and?: Array< ModelComponentConditionInput | null > | null,
  or?: Array< ModelComponentConditionInput | null > | null,
  not?: ModelComponentConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Component = {
  __typename: "Component",
  id: string,
  parentId: string,
  type: string,
  name: string,
  description: string,
  startTime?: number | null,
  endTime?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateComponentInput = {
  id: string,
  parentId?: string | null,
  type?: string | null,
  name?: string | null,
  description?: string | null,
  startTime?: number | null,
  endTime?: number | null,
  _version?: number | null,
};

export type DeleteComponentInput = {
  id: string,
  _version?: number | null,
};

export type ModelComponentFilterInput = {
  id?: ModelIDInput | null,
  parentId?: ModelStringInput | null,
  type?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  startTime?: ModelIntInput | null,
  endTime?: ModelIntInput | null,
  and?: Array< ModelComponentFilterInput | null > | null,
  or?: Array< ModelComponentFilterInput | null > | null,
  not?: ModelComponentFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelComponentConnection = {
  __typename: "ModelComponentConnection",
  items:  Array<Component | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateComponentMutationVariables = {
  input: CreateComponentInput,
  condition?: ModelComponentConditionInput | null,
};

export type CreateComponentMutation = {
  createComponent?:  {
    __typename: "Component",
    id: string,
    parentId: string,
    type: string,
    name: string,
    description: string,
    startTime?: number | null,
    endTime?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateComponentMutationVariables = {
  input: UpdateComponentInput,
  condition?: ModelComponentConditionInput | null,
};

export type UpdateComponentMutation = {
  updateComponent?:  {
    __typename: "Component",
    id: string,
    parentId: string,
    type: string,
    name: string,
    description: string,
    startTime?: number | null,
    endTime?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteComponentMutationVariables = {
  input: DeleteComponentInput,
  condition?: ModelComponentConditionInput | null,
};

export type DeleteComponentMutation = {
  deleteComponent?:  {
    __typename: "Component",
    id: string,
    parentId: string,
    type: string,
    name: string,
    description: string,
    startTime?: number | null,
    endTime?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type GetComponentQueryVariables = {
  id: string,
};

export type GetComponentQuery = {
  getComponent?:  {
    __typename: "Component",
    id: string,
    parentId: string,
    type: string,
    name: string,
    description: string,
    startTime?: number | null,
    endTime?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListComponentsQueryVariables = {
  filter?: ModelComponentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListComponentsQuery = {
  listComponents?:  {
    __typename: "ModelComponentConnection",
    items:  Array< {
      __typename: "Component",
      id: string,
      parentId: string,
      type: string,
      name: string,
      description: string,
      startTime?: number | null,
      endTime?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncComponentsQueryVariables = {
  filter?: ModelComponentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncComponentsQuery = {
  syncComponents?:  {
    __typename: "ModelComponentConnection",
    items:  Array< {
      __typename: "Component",
      id: string,
      parentId: string,
      type: string,
      name: string,
      description: string,
      startTime?: number | null,
      endTime?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateComponentSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateComponentSubscription = {
  onCreateComponent?:  {
    __typename: "Component",
    id: string,
    parentId: string,
    type: string,
    name: string,
    description: string,
    startTime?: number | null,
    endTime?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateComponentSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateComponentSubscription = {
  onUpdateComponent?:  {
    __typename: "Component",
    id: string,
    parentId: string,
    type: string,
    name: string,
    description: string,
    startTime?: number | null,
    endTime?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteComponentSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteComponentSubscription = {
  onDeleteComponent?:  {
    __typename: "Component",
    id: string,
    parentId: string,
    type: string,
    name: string,
    description: string,
    startTime?: number | null,
    endTime?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};
