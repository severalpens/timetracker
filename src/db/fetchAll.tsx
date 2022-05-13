import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
import * as types from '../API';
import { API } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { graphqlOperation } from 'aws-amplify';
import { ModelProjectConnection } from '../API';


export const getProjects = async () => {
    const allProjects: GraphQLResult<any> = await API.graphql({ query: queries.listProjects });
    const data: ModelProjectConnection = allProjects.data;
    const items: Array<types.Project | null> = data.items;
}

export const getTasks = async () => {
    const allProjects: GraphQLResult<any> = await API.graphql(graphqlOperation(queries.listTasks));
    const data: ModelProjectConnection = allProjects.data;
    const items: Array<types.Project | null> = data.items;

}

export const getEntries = async () => {
    const allProjects: GraphQLResult<any> = await API.graphql({ query: queries.listProjects });
    const data: ModelProjectConnection = allProjects.data;
    const items: Array<types.Project | null> = data.items;
}

