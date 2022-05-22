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


    this.setTasks.bind(this);
    this.setRecords.bind(this);
    this.startTask.bind(this);
    this.stopTask.bind(this);
    this.newRecord.bind(this);
  }

  async componentDidMount() {
    await this.setTasks();
    await this.setRecords();
  }

  setTasks = async () => {
    const unsorted = await getByCType("task");
    const tasks = unsorted.sort((x, y) => y.name - x.name);
    this.setState({
      tasks: tasks
    })
  }

  setRecords = async () => {
    this.setState({
      records: await getByCType("record")
    })
  }


  startTask = async (t) => {
    //  await db.stopAllTasks();
    console.log("startTask",t);
    let t2 = { ...t };
    t2.description = "running";
    t2.startTime = new Date().getTime();

      await db.update(t2);

    await this.newRecord(t2);
    await this.setTasks();
    await this.setRecords();
  }

  newRecord = async (t) => {
   let result =  await db.create({
      type: "record",
      parentId: t.name,
      startTime: new Date().getTime()
    });
    this.setState({
      currentRecord: result
    })
  }


  oldRecord = async () => {
    let r = this.state.currentRecord;
    r.endTime = new Date().getTime();
    this.setState({
      currentRecord: r
    })
    await db.update(r);
  }



  stopTask = async (t) => {
    console.log("stopTask",t)
    let t2 = { ...t };
    t2.description = "";
    t2.endTime = new Date().getTime();

      await db.update(t2);

    await this.oldRecord();
    await this.setRecords();
  }


  render() {
    return (
      <div className="flex">
        <div className="ml-16 my-16 w-1/2">
          <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 capitalize">{this.props.cType + "s"}</h2>
          <div className="w-full">
            <Table tasks={this.state.tasks} startTask={this.startTask} stopTask={this.stopTask}></Table>
          </div>
        </div>
        <div className="ml-16 my-16 w-1/2">
          <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 capitalize">Records</h2>
          <div className="w-full">
            <div hidden={true} className="flex pb-10" >
            </div>
            <Table2 records={this.state.records}></Table2>
          </div>
        </div>
      </div>
    )
  }
}

