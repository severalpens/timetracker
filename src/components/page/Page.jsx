import getComponents from '../../db/getComponents.ts';
import processMutation from '../../db/processMutation.ts';
import { useEffect, useState } from 'react'
import Table from './table/Table';
import Form from './form/Form';
import React from 'react';


export default class PageAsClass extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {components:[], component:{}}
    this.props = props;
    this.mutationRequest.bind(this);

  }

  async componentDidMount(){
    const components = await getComponents();
    this.setState({components:components});
    this.setState({component:{}});
    console.log(this.props.cType)

  }

  
   mutationRequest = async (component, mType) => {
    const components = await processMutation(component, mType);
    console.log(components);
    this.setState({components:components});
  }


  render() {
    return (
      <div className="flex">
        <div className="ml-16 my-16 w-1/2">
          <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 pb-10 capitalize">{this.props.cType}</h2>
          <div className="flex w-full">
            <Table components={this.state.components} mutationRequest={this.mutationRequest}></Table>
          </div>
        </div>
        <Form mutationRequest={this.mutationRequest}></Form>
      </div>
    )
  }
}

