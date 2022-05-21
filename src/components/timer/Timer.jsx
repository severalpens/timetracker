import { getAll, getByCType } from '../../db/db.ts';
import Table from './table/Table';
import Table2 from './table2/Table2';
import React from 'react';
import * as db from '../../db/db';


export default class Timer extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      tasks: [],
      records: [],
    }

    this.props = props;

  }

  async componentDidMount() {
    await this.setTasks();
    await this.setRecords();
  }

  setTasks = async () => {
    const unsorted = await getByCType("task");
    const tasks  = unsorted.sort((x,y) => y.name - x.name);
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
    await this.stopTask(t);
    await db.update({
      id: t.id,
      _version: t._version,
      description: "running",
      startTime: new Date().getTime()
    });
    
    await this.newRecord(t);
    await this.setRecords();
    this.render();
 }

  newRecord = async (t) => {
    const ar = await db.create({
      type: "record",
      parentId: t.name,
      startTime: new Date().getTime()
    });
    this.setState({
      activeRecord: ar
    })
  }

  
  stopTask = async (t) => {
      t.endTime = new Date().getTime();
      t.description = "";
      await db.update(t);
      let ar = this.state.activeRecord;
      ar.endTime = new Date().getTime();
      ar.name = ar.endTime -ar.startTime;
      await db.update(ar);
      this.setState({
        activeRecord: ar
      })

    await this.Tasks();
    await this.setRecords();
    this.render();
}
  
    
  render() {
    const { cType, pType } = this.props;
    const {tasks, records, activeRecord} = this.state;
    const {startTask, stopTask, newRecord} = this;
    const table1 = {
      startTask,
      stopTask,
      tasks,
      activeRecord
    }
    return (
      <div className="flex">
        <div className="ml-16 my-16 w-1/2">
          <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 capitalize">{cType + "s"}</h2>
          <div className="w-full">
            <Table table1={table1} ></Table>
          </div>
        </div>       
         <div className="ml-16 my-16 w-1/2">
          <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 capitalize">Records</h2>
          <div className="w-full">
            <div hidden={true} className="flex pb-10" >
            </div>
            <Table2 records={records}></Table2>
          </div>
        </div>
      </div>
    )
  }
}

