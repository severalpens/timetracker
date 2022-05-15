import { getAll, getByCType, getParentSet } from '../../db/queries.ts';
import { create, update, deleteOne, cancel } from '../../db/mutations.ts';
import Table from './table/Table';
import Table2 from './table2/Table2';
import React from 'react';


export default class Timer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      components: [],
      parentSet: []
    }

    this.props = props;
    this.mutation.bind(this);

  }
  async componentDidMount() {
    await this.getComponents();
  }
  getComponents = async () => {
    const {cType} = this.props;
    const c = await getByCType(cType)
    this.setState({
      components: c
    })
    this.setState({
      parentSet: await getParentSet(cType)
    })
    this.setState({
      mntFinished: true
    })
  }


  mutation = async (component, mType) => {
    switch (mType) {
      case 'create':
        await create(component)
        break;
      case 'update':
        await update(component)
        break;
      case 'delete':
        await deleteOne(component)
        break;
      case 'cancel':
        await cancel(component)
        break;

      default:
        break;
    }
    await this.getComponents();
  }


  render() {
    const { cType, pType } = this.props;
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
         <div className="ml-16 my-16 w-1/2">
          <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 capitalize">Records</h2>
          <div className="w-full">
            <div hidden={true} className="flex pb-10" >
            </div>
            <Table2 components={this.state.components} mutationRequest={this.mutation}></Table2>
          </div>
        </div>
      </div>
    )
  }
}

