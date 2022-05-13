import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
import * as types from '../API';
import { API } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { graphqlOperation } from 'aws-amplify';
import { ModelProjectConnection } from '../API';



export const getProject = async (id: string) => {
    const oneProject = await API.graphql(graphqlOperation(queries.getProject, { id }));
}

export const getTask = async (id: string) => {
    const oneProject = await API.graphql({ query: queries.getProject, variables: { id } });
}

export const getEntry = async (id: string) => {
    const oneEntry = await API.graphql({ query: queries.getEntry, variables: { id } });
}
