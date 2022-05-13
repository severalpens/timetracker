import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
import * as types from '../API';
import { API } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { graphqlOperation } from 'aws-amplify';
import { ModelProjectConnection } from '../API';


const todoDetails = {
    id: 'some_id',
  };
const deleteProject = async (input: types.Project) => {
    const updatedProject = await API.graphql({ query: mutations.updateProject, variables: {input}});
}

const deleteTask = async (input: types.Task) => {
    const updatedTask = await API.graphql(graphqlOperation(mutations.updateTask, { input }));
}

const deleteEntry = async (input: types.Task) => {
    const updatedEntry = await API.graphql(graphqlOperation(mutations.updateEntry, { input }));
}

