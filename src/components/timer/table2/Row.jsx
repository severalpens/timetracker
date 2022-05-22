import React, {useState, useEffect, PureComponent}  from 'react';

export default class Row extends React.PureComponent {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            id:props.record.id,
            parentId:props.record.parentId,
            startTime: new Date(props.record.startTime),
            endTime: new Date(props.record.endTime),
            strStartTime: new Date(props.record.startTime).toLocaleString('en-AU', {  }),
            strEndTime: new Date(props.record.endTime).toLocaleString('en-AU', {  })
        }
    }
 render(){
    const {id,parentId, startTime, endTime, strStartTime, strEndTime} = this.state;
     
     return (
         <tr  className=" px-6" key={id}>
            <td className=" px-6 whitespace-nowrap  text-sm text-gray-900">{parentId}</td>
            <td className=" px-6 whitespace-nowrap  text-sm text-gray-900">{strStartTime}</td>
            <td className=" px-6 whitespace-nowrap  text-sm text-gray-900">{strEndTime}</td>
            <td className=" px-6 whitespace-nowrap  text-sm text-gray-900">{}</td>
        </tr>
    )
}
}
