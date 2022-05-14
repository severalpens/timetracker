import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
import {Component, DeleteComponentInput} from '../API';
import { API, graphqlOperation } from 'aws-amplify';


const deleteComponent = async (component: Component) => {
    const input: DeleteComponentInput = {id: component.id, _version:component._version}
    const id = component.id;
    const asdf = await API.graphql(graphqlOperation(mutations.deleteComponent, { input }));

    //const deletedComponent = await API.graphql({ query: mutations.deleteComponent, variables: {input}});
}

export default deleteComponent;