import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
import * as types from '../API';
import { API } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { graphqlOperation } from 'aws-amplify';
import { ModelComponentConnection } from '../API';


 const getComponents = async () => {
    const allComponents: GraphQLResult<any> = await API.graphql({ query: queries.listComponents });
    const data = allComponents.data;
    const listComponents = data.listComponents;
    const items = listComponents.items.filter((x: types.Component) => x._deleted == null);
    return items;
}

const getComponents2 = async () => {
    const allComponents: GraphQLResult<any> = await API.graphql(graphqlOperation(queries.listComponents));
    const data: ModelComponentConnection = allComponents.data;
    const items: Array<types.Component | null> = data.items;
    return items;

}

export default getComponents;
