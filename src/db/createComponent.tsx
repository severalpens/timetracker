import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
import {Component,CreateComponentInput} from '../API';
import { API } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { graphqlOperation } from 'aws-amplify';


const createComponent = async (component: Component) => {
    const input: CreateComponentInput = {
        parentId: component.parentId,
        type:component.type || "",
        name: component.name || "",
        description: component.description
    }
    const newComponent = await API.graphql({ query: mutations.createComponent, variables: { input } });
    console.log(newComponent);
}

export default createComponent;
