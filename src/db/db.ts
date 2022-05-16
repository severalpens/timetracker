import { API } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api-graphql'
import { graphqlOperation } from 'aws-amplify'
import {
    CreateComponentInput,
    UpdateComponentInput,
    DeleteComponentInput,
} from '../API';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as types from '../API';
import {  Component } from '../API';


export const getAll = async () => {
    const allComponents: GraphQLResult<any> = await API.graphql({ query: queries.listComponents });
    const data = allComponents.data;
    const listComponents = data.listComponents;

    const filtered: Array<Component> = listComponents.items
        .filter((c: types.Component) => c._deleted == null)

    return filtered;
}

export const getByCType = async (cType: string) => {
    const allComponents: GraphQLResult<any> = await API.graphql({ query: queries.listComponents });
    const data = allComponents.data;
    const listComponents = data.listComponents;

    const filtered: Array<Component> = listComponents.items
        .filter((c: types.Component) => c._deleted == null)
        .filter((c: types.Component) => c.type === cType)
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

    const parentIdSet = [... new Set(parentIds)];

    console.log('parentIdSet.length === 0')
    console.log(parentIdSet.length)
    console.log('cType === "project"')
    console.log(cType)

    if (parentIdSet.length === 0 && cType === "project") {
        parentIdSet.push("app")
    }

    if (!strict) {
        parentIdSet.push("All")
    }

    return parentIdSet;
}


export const create = async (component: Component) => {
    console.log("create",component)
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


