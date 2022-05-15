import { Component } from '../API'
import * as queries from '../graphql/queries'
import * as mutations from '../graphql/mutations'
import * as subscriptions from '../graphql/subscriptions'
import getComponents from './getComponents';
import { API } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api-graphql'
import { graphqlOperation } from 'aws-amplify'
import {
  CreateComponentInput,
  UpdateComponentInput,
  DeleteComponentInput,
} from '../API';

const processMutation = async (component: Component, mType: string) => {
  let result: GraphQLResult<any>;

  if (mType === 'update') {
    const input: UpdateComponentInput = {
      id: component.id,
      name: component.name || "",
      _version: component._version,
    }
    result = await API.graphql(
      graphqlOperation(mutations.updateComponent, { input }),
    )
  }
  if (mType === 'delete') {
    const input: DeleteComponentInput = {
      id: component.id,
      _version: component._version,
    }
    result = await API.graphql(
      graphqlOperation(mutations.deleteComponent, { input }),
    )
  }
  if (mType === 'cancel') {
  }
  if (mType === 'create') {
    const input: CreateComponentInput = {
      parentId: component.parentId || "",
      type: component.type || "",
      name: component.name || "",
      description: component.description || "",
    }
    result = await API.graphql({
      query: mutations.createComponent,
      variables: { input },
    })
  }
  const components = await getComponents();
  return components;
}


export default processMutation
