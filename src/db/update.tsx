import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
import * as types from '../API';
import { API } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { graphqlOperation } from 'aws-amplify';
import { ModelProjectConnection } from '../API';



export const updateProject = async (input: types.Project) => {
    const updatedProject = await API.graphql({ query: mutations.updateProject, variables: {input}});
}


export const updateTask = async (input: types.Task) => {
    const updatedTask = await API.graphql(graphqlOperation(mutations.updateTask, { input }));
}

export const updateEntry = async (input: types.Task) => {
    const updatedEntry = await API.graphql(graphqlOperation(mutations.updateEntry, { input }));
}
