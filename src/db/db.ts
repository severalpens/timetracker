import { API } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api-graphql'
import { graphqlOperation,Hub, Auth } from 'aws-amplify'
import {
    CreateComponentInput,
    UpdateComponentInput,
    DeleteComponentInput,
} from '../API';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as types from '../API';
import {  Component } from '../API';
import { AnyRecord } from 'dns';
    

export const getAll = async () => {
    const allComponents: GraphQLResult<any> = await API.graphql({ query: queries.listComponents });
    const data = allComponents.data;
    const listComponents = data.listComponents;

    const filtered: Array<Component> = listComponents.items
        .filter((c: types.Component) => c._deleted == null)

    return filtered;
}


export const getByCType = async (cType: string) => {
    const allComponents: GraphQLResult<any> = await API.graphql({ query: queries.listComponents, authMode:"AMAZON_COGNITO_USER_POOLS"});
    const data = allComponents.data;
    const listComponents = data.listComponents;

    const filtered: Array<Component> = listComponents.items
       .filter((c:any) => c._deleted == null)
       .filter((c: types.Component) => c.type === cType)
        .sort((a: types.Component, b: types.Component) => {
            if (a.parentId > b.parentId) {
                return 1;
            }
        
            if (a.parentId < b.parentId) {
                return -1;
            }
        
            return 0;
        });
    return filtered;
}

export const getParentSet = async (cType: string, strict?: boolean) => {
    const typeMap = [
        {cType:"project",pType:"app"},
        {cType:"task",pType:"project"},
        {cType:"record",pType:"task"}
    ];
    const pType = typeMap.find(x => x.cType === cType)?.pType || "";
    const allComponents: Array<Component> = await getByCType(pType);
    const parentIds =   allComponents.map((x: any) => x.name);

    const parentIdSet = [...new Set(parentIds)];

    if (parentIdSet.length === 0 && cType === "project") {
        parentIdSet.push("app")
    }

    if (!strict) {
        parentIdSet.push("All")
    }

    return parentIdSet;
}


export const create = async (component: Component) => {
    let graphQLResult: GraphQLResult<any>;
    const input: CreateComponentInput = {
        parentId: component.parentId || "",
        type: component.type || "",
        name: component.name || "",
        startTime: component.startTime || new Date().getTime(),
        endTime: component.endTime || null,
        description: component.description || "",
    }
    graphQLResult = await API.graphql({
        query: mutations.createComponent,
        variables: { input },
        authMode: 'AMAZON_COGNITO_USER_POOLS'
    })
    const data = graphQLResult.data;
    const result = data.createComponent;
    return result;
}

export const update = async (component: Component) => {
    let graphQLResult: GraphQLResult<any>;
    const input: UpdateComponentInput = {
        id: component.id,
        parentId: component.parentId || "",
        type: component.type || "",
        name: component.name || "",
        startTime: component.startTime,
        endTime: component.endTime,
        isActive: component.isActive,
        children: component.children || "[]",
        description: component.description || "",
        _version: component._version,
    }
    graphQLResult = await API.graphql({
        query: mutations.updateComponent,
        variables: { input },
        authMode: 'AMAZON_COGNITO_USER_POOLS'
    })
    const data = graphQLResult.data;
    const result = data.updateComponent;
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



