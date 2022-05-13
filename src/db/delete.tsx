import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
import {Component} from '../API';
import { API } from 'aws-amplify';


const deleteComponent = async (input: Component) => {
    const updatedComponent = await API.graphql({ query: mutations.updateComponent, variables: {input}});
}

