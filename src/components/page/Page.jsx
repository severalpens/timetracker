import React from 'react';
import * as db from '../../db/db';
import Table from './table/Table';
import Form from './form/Form';
import { API } from 'aws-amplify';
import { graphqlOperation, Hub, Auth } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as subscriptions from '../../graphql/subscriptions';
import * as mutations from '../../graphql/mutations';
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

    this.update = this.update.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
    this.cancel = this.cancel.bind(this);
    this.setComponents = this.setComponents.bind(this);
    this.getParents = this.getParents.bind(this);
    this.reload = this.reload.bind(this);
    this.cancel = this.cancel.bind(this);

  }

  async componentDidMount() {
    await this.getParents();
    await this.setComponents();
  }

  reload = () => {
    this.render()
  }

  getParents = async () => {
    const { cType } = this.props;
    const p = await db.getParentSet(cType, false);
    this.setState({
      parentSet: p
    })
  }

  setComponents = async () => {
    const { cType } = this.props;
    const c = await db.getByCType(cType)
    this.setState({
      components: c
    })
    this.setState({
      filtered: c.filter(x => x.parentId === this.state.parentFilterValue)
    })
  }

  update = async (c) => {
    await db.update(c)
    await this.setComponents();
  }

  deleteOne = async (c) => {
    await db.deleteOne(c)
    await this.setComponents();
  }

  cancel = async (c) => {
    await this.setComponents();
  }

  render() {
    const { cType, pType } = this.props;
    const { components, parentSet, filtered } = this.state;
    const { create, update, deleteOne, cancel, reload } = this;
    const tableProps = {
      components,
      filtered,
      update,
      deleteOne,
      cancel
    }


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
          <Form  cType={cType} pType={pType} setComponents={this.setComponents} ></Form>
        </div>
      </div>
      </Authenticator>
    )
  }
}

export default Page
