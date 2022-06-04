import React from 'react';
import * as db from '../../../db/db';
import Table from './table/Table';
import Form from './form/Form';
import { API } from 'aws-amplify';
import { graphqlOperation, Hub, Auth } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
import * as subscriptions from '../../../graphql/subscriptions';
import * as mutations from '../../../graphql/mutations';
import { Authenticator } from '@aws-amplify/ui-react';
import { GraphQLResult } from '@aws-amplify/api-graphql'


class Page extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      components: [],
      filtered: [],
      parentSet: [],
      toggleReload: true,
      parentFilterValue: "All"
    }

    this.setComponents = this.setComponents.bind(this);
    this.getParents = this.getParents.bind(this);

  }

  async componentDidMount() {
    await this.seed();
    await this.getParents();
    await this.setComponents();
  }


  getParents = async () => {
    const { cType } = this.props;
    const p = await db.getParentSet(cType, false);
    this.setState({
      parentSet: p
    })
  }

  seed = async () => {
    let q = await API.graphql({ query: queries.listComponents, authMode: "AMAZON_COGNITO_USER_POOLS" });
    let c = q.data.listComponents.items;
    if (c.length === 0) {
      const dt = new Date().getTime();
      const input = {
        parentId: "index",
        type: "app",
        name: "App",
        description: "",
        isActive: true,
        startTime: dt,
        endTime: dt,
        children: '{"foo":"4983","bar":"5","bike":"uvFWj","a":"43677","b":"3ajA","name":"66706","prop":"52107"}'
      }
      await API.graphql({
        query: mutations.createComponent,
        variables: { input },
        authMode: 'AMAZON_COGNITO_USER_POOLS'
      })
    }
  }

  setComponents = async () => {
    const { cType } = this.props;
    let c = await db.getByCType(cType);
    this.setState({
      components: c
    })

  }

  render() {
    const { cType, pType } = this.props;
    const { components, parentSet, filtered } = this.state;
    const { create, update, deleteOne, cancel, reload, setComponents } = this;
    const tableProps = {
      components,
      filtered,
      update,
      setComponents,
      cancel
    }

    if (this.state.components) {

      return (
        <Authenticator>
          <div className="flex">
            <div className="ml-16 my-16 w-1/2">
              <h2 className="font-medium leading-tight text-4xl mt-0 mb-10 text-blue-600 capitalize">{cType + "s"}</h2>
              <div className="w-full">
                <Table tableProps={tableProps}></Table>
              </div>
            </div>
            <div className="ml-16 my-16 w-1/3">
              <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 pb-10">Add New:</h2>
              <Form cType={cType} pType={pType} setComponents={this.setComponents} ></Form>
            </div>
          </div>
        </Authenticator>
      )
    }
  }
}

export default Page
