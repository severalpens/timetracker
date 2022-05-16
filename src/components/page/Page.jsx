import React from 'react';
import * as db from '../../db/db';
import Table from './table/Table';
import Form from './form/Form';


export default class Page extends React.PureComponent {
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

    this.create.bind(this);
    this.update.bind(this);
    this.deleteOne.bind(this);
    this.cancel.bind(this);
    this.getComponents.bind(this);
    this.getParents.bind(this);
    this.reload.bind(this);
    this.cancel.bind(this);

  }

  async componentDidMount() {
    await this.getParents();
    await this.getComponents();
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

  getComponents = async () => {
    const { cType } = this.props;
    const c = await db.getByCType(cType)
    this.setState({
      components: c
    })
    this.setState({
      filtered: c.filter(x => x.parentId === this.state.parentFilterValue)
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

  handleParentSeletChange = (e) => {
    this.setState(
      {
        parentFilterValue: e.target.value
      }
    )
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

    const formProps = {
      create,
      cType,
      pType,
      reload
    }

    return (
      <div className="flex">
        <div className="ml-16 my-16 w-1/2">
          <h2 className="font-medium leading-tight text-4xl mt-0 mb-10 text-blue-600 capitalize">{cType + "s"}</h2>
          <div className="w-full">
            <Table tableProps={tableProps}></Table>
          </div>
        </div>
        <div className="ml-16 my-16 w-1/3">
          <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 pb-10">Add New:</h2>
          <Form formProps={formProps} ></Form>
        </div>
      </div>
    )
  }
}


  function TableFilterDD({pType, parentSet}) {
  return (
    <div hidden={true} className="flex pb-10" >
    <label htmlFor="parent" className="align-bottom  border font-medium leading-tight text-xl  text-blue-600 capitalize">{pType}:</label>
    <select className="
      form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700
      focus:bg-white 
      focus:border-blue-600 
      focus:outline-none
      "
      id="transactionId"
      name="transactionId"
      value={this.state.parentFilterValue}
      onChange={this.handleParentSeletChange}
    >
      {parentSet.map(x => <option key={x} value={x}>{x}</option>)}
    </select>
  </div>
  )
}
