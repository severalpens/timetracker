import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
import {Component} from '../API';
import { API } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { graphqlOperation } from 'aws-amplify';


const createComponent = async (input: Component) => {
    const newComponent = await API.graphql({ query: mutations.createComponent, variables: { input } });
}
