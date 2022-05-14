import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
import * as types from '../API';
import { API } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { graphqlOperation } from 'aws-amplify';



const updateComponent = async (component: types.Component) => {
    const input: types.UpdateComponentInput = {
        id: component.id,
        name: component.name,
        _version: component._version
    }
    
    // const updatedComponent = await API.graphql({ query: mutations.updateComponent, variables: {input:input}});
    const updatedComponent = await API.graphql(graphqlOperation(mutations.updateComponent, { input }));
    console.log("updateComponent", updatedComponent);

}


export const updateComponent2 = async (input: types.Component) => {
}

export default updateComponent;