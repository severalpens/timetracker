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
    const {id,parentId, startTime, endTime, isActive} = this.props.record;
     
     return (
         <tr  className=" px-6" key={id}>
            <td className=" px-6 whitespace-nowrap  text-sm text-gray-900">{id}</td>
            <td className=" px-6 whitespace-nowrap  text-sm text-gray-900">{parentId}</td>
            <td className=" px-6 whitespace-nowrap  text-sm text-gray-900">{isActive?"true":"false"}</td>
            <td className=" px-6 whitespace-nowrap  text-sm text-gray-900">{new Date(startTime).toLocaleString('en-AU', {  })}</td>
            <td className=" px-6 whitespace-nowrap  text-sm text-gray-900">{new Date(endTime).toLocaleString('en-AU', {  })}</td>
            <td className=" px-6 whitespace-nowrap  text-sm text-gray-900">{}</td>
        </tr>
    )
}
}
