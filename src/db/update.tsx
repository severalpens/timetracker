import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
import * as types from '../API';
import { API } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { graphqlOperation } from 'aws-amplify';



export const updateComponent = async (input: types.Component) => {
    const updatedProject = await API.graphql({ query: mutations.updateComponent, variables: {input}});
}


export const updateComponent2 = async (input: types.Component) => {
    const updatedComponent = await API.graphql(graphqlOperation(mutations.updateComponent, { input }));
}
