import React from 'react';
import * as db from '../../db/db.ts';
import {getParentSet} from './utils'
import Table from './table/Table';
import Form from './form/Form';
const typeMap = [
  {cType:"project",pType:"app"},
  {cType:"task",pType:"project"},
  {cType:"record",pType:"task"}
];



export default class Page extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      components: [],
      parentSet: [],
      parentSetStrict: []
    }

    this.mutation.bind(this);

  }

  async componentDidMount() {
    await this.getComponents();
  }

  getComponents = async () => {
    const { cType } = this.props;
    const c = await db.getByCType(cType)
    this.setState({
      components: c
    })
    this.setState({
      parentSet: await getParentSet(c,cType,false)
    })
    this.setState({
      parentSetStrict: await getParentSet(c,cType,true)
    })
  }

  create = async (c) => {
    await db.create(c)
    await this.getComponents();
  }

  update = async (c) => {
    await db.update(c)
    await this.getComponents();
  }

  deleteOne = async (c) => {
    await db.deleteOne(c)
    await this.getComponents();
  }

  cancel = async (c) => {
    await this.getComponents();
  }


  render() {
    const { cType, pType } = this.props;
    let p = this.state.parentSet.map(x => <option key={x} value={x}>{x}</option>)

    return (
      <div className="flex">
        <div className="ml-16 my-16 w-1/2">
          <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 capitalize">{cType + "s"}</h2>
          <div className="w-full">
            <div hidden={true} className="flex pb-10" >
              <label htmlFor="parent" className="align-bottom  border font-medium leading-tight text-xl  text-blue-600 capitalize">{pType}:</label>
              <select id='parent' name='parent' className="border mx-4 px-6 border-black rounded-md form-select"
                aria-label="Default select example" onChange={this.handleParentChange}>
                {this.state.parentSet.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <Table components={this.state.components} mutationRequest={this.mutation}></Table>
          </div>
        </div>
        <div className="ml-16 my-16 w-1/3">
          <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 pb-10">Add New:</h2>
          <div className="flex pb-10 " >
            <label htmlFor="parent" className="align-bottom  border font-medium leading-tight text-xl  text-blue-600 capitalize">{this.getParentType()}:</label>
            <select id='parent' name='parent' className="border mx-4 px-6 border-black rounded-md form-select"
              aria-label="Default select example" onChange={this.handleParentChange}>
              {p}
            </select>
          </div>
          <Form mutationRequest={this.mutation} cType={cType} ></Form>
        </div>
      </div>
    )
  }
}

