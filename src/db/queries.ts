import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
import * as types from '../API';
import { API } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { graphqlOperation } from 'aws-amplify';
import { ModelComponentConnection, Component } from '../API';
import { isEmpty } from 'class-validator';


export const getAll = async () => {
    const allComponents: GraphQLResult<any> = await API.graphql({ query: queries.listComponents });
    const data = allComponents.data;
    const listComponents = data.listComponents;

    const filtered: Array<Component>  = listComponents.items
        .filter((c: types.Component) => c._deleted == null)

    return filtered;
}

export const getByCType = async (cType: string) => {
    const allComponents: GraphQLResult<any> = await API.graphql({ query: queries.listComponents });
    const data = allComponents.data;
    const listComponents = data.listComponents;
 
    const filtered: Array<Component>  = listComponents.items
        .filter((c: types.Component) => c._deleted == null)
        .filter((c: types.Component) => c.type === cType)
    return filtered;
 }
 
 export const getParentSet = async (cType: string, strict?: boolean) => {
    let pType = "";
    switch (cType) {
       case "project":
           pType = "app"
           break;
           case "task":
               pType = "project"
               break;
               case "record":
                   pType = "task"
                   break;
        default:
            break;
    }
   const allComponents: GraphQLResult<any> = await API.graphql({ query: queries.listComponents });
   const data = allComponents.data;
   const cList = data.listComponents;
   const pIdArray: Array<string>  = cList.items
       .filter((c: types.Component) => c._deleted == null)
       .filter((c: types.Component) => c.type === pType)
       .map((x:any) => x.name);

       const pIdSet = [... new Set(pIdArray)]
       if(pIdSet.length === 0 && cType === "project"){
           pIdSet.push("app")
       }
       if(!strict){
           pIdSet.push("All")
       }
   return pIdSet;
}
 

export const getComponents2 = async () => {
    const allComponents: GraphQLResult<any> = await API.graphql(graphqlOperation(queries.listComponents));
    const data: ModelComponentConnection = allComponents.data;
    const items: Array<types.Component | null> = data.items;
    return items;

}

