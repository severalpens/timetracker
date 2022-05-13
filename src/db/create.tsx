import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
import * as types from '../API';
import { API } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { graphqlOperation } from 'aws-amplify';
import { ModelProjectConnection } from '../API';


const dummyNewProject: types.Project = {
    name: 'Project1',
    __typename: 'Project',
    id: '',
    createdAt: '',
    updatedAt: '',
    _version: 0,
    _lastChangedAt: 0
};

const createProject = async (input: types.Project) => {
    const newProject = await API.graphql({ query: mutations.createProject, variables: { input } });
}

const createTask = async (input: types.Task) => {
    const newTask = await API.graphql(graphqlOperation(mutations.createTask, { input })); // equivalent to above example
}

const createEntry = async (input: types.Entry) => {
    const newEntry = await API.graphql({ query: mutations.createEntry, variables: { input } });
}
