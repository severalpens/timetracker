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
      records: [],
      tasks: [],
    }

    this.getTasks = this.getTasks.bind(this);
    this.getRecords = this.getRecords.bind(this);
    this.refresh = this.refresh.bind(this);

  }


  async componentDidMount() {
    await this.refresh();
  }
  
  async refresh(){
    await this.getTasks();
    await this.getRecords();

  }


  getTasks = async () => {
    const t = await db.getByCType("task");
    this.setState({
      tasks: t
    })
  }


  getRecords = async () => {
    let r = await db.getByCType("record");
    this.setState({
      records: r
    })

  }

  render() {
    if (this.state.tasks && this.state.records) {
      return (
        <div className="flex">
          <div className="ml-16 my-16 w-1/2">
            <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 capitalize">Tasks</h2>
            <div className="w-full">
              <Table tasks={this.state.tasks} records={this.state.records} refresh={this.refresh}></Table>
            </div>
          </div>
          <div className="ml-16 my-16 w-1/2">
            <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 capitalize">Records</h2>
            <div className="w-full">
              <Table2 records={this.state.records} refresh={this.refresh}></Table2>
            </div>
          </div>
        </div>
      )
    }
  }
}

