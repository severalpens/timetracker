import { Component } from '../API'
import * as queries from '../graphql/queries'
import * as mutations from '../graphql/mutations'
import * as subscriptions from '../graphql/subscriptions'
import { API } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api-graphql'
import { graphqlOperation } from 'aws-amplify'
import {
  CreateComponentInput,
  UpdateComponentInput,
  DeleteComponentInput,
} from '../API';


  export const create = async (component: Component) => {
    let result: GraphQLResult<any>;
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
    return result;
    }


    export const update = async (component: Component) => {
      let result: GraphQLResult<any>;
      const input: UpdateComponentInput = {
        id: component.id,
        name: component.name || "",
        _version: component._version,
      }
      result = await API.graphql(
        graphqlOperation(mutations.updateComponent, { input }),
      )
      return result;
      }
    
    
    export const deleteOne = async (component: Component) => {
      let result: GraphQLResult<any>;
      const input: DeleteComponentInput = {
        id: component.id || "",
        _version: component._version
      }
      result = await API.graphql({
        query: mutations.deleteComponent,
        variables: { input },
      })
      return result;
      }
  
      export const cancel = async (component: Component) => {

      }
  
  

  