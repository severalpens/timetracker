import { getAll, getByCType } from '../../db/db';
import Table from './table/Table';
import Table2 from './table2/Table2';
import React from 'react';
import * as db from '../../db/db';


export default class Timer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      tasks: [],
      records: [],
      currentRecord: {}
    }

    this.setComponents();

    this.setTasks = this.setTasks.bind(this);
    this.setRecords = this.setRecords.bind(this);
  }

  async componentDidMount() {
  }

  setComponents =  () => {
     this.setTasks();
     this.setRecords();
  }

  setTasks = async () => {
    const unsorted = await getByCType("task");
    const tasks = unsorted.sort((x, y) => y.name - x.name);
    this.setState({
      tasks: tasks
    })
  }

  setRecords = async () => {
    const unsorted = await getByCType("record");
    const records = unsorted.sort((x, y) => y.startTime - x.startTime);
    this.setState({
      records: records
    })
  }


  render() {
    if (this.state.tasks && this.state.records) {
      return (
        <div className="flex">
          <div className="ml-16 my-16 w-1/2">
            <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 capitalize">{this.props.cType + "s"}</h2>
            <div className="w-full">
              <Table tasks={this.state.tasks} setComponents={this.setComponents}></Table>
            </div>
          </div>
          <div className="ml-16 my-16 w-1/2">
            <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 capitalize">Records</h2>
            <div className="w-full">
              <div hidden={true} className="flex pb-10" >
              </div>
              <Table2 records={this.state.records} setRecords={this.setRecords}></Table2>
            </div>
          </div>
        </div>
      )
    }
  }
}

