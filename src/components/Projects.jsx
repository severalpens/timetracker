import Page from './page/Page';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import { API } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api-graphql'
import { graphqlOperation, Hub, Auth } from 'aws-amplify'
import {
  CreateComponentInput,
  UpdateComponentInput,
  DeleteComponentInput,
} from '../API';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as types from '../API';
import { Component } from '../API';

import Navbar from './navbar/Navbar'

function Projects() {
  return (
    <Authenticator>
      { ({ signOut, user }) => {
         API.graphql({ query: queries.listComponents }).then((result) => {
          console.log(result.data.items);
        })

        return (
          <div>Hello</div>
        )

      }}


    </Authenticator>
  )
}


export default withAuthenticator(Projects)
