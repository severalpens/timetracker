import React, { useState , useEffect} from 'react';
import RowDisplayMode from './RowDisplayMode';
import RowEditMode from './RowEditMode';
const initialComponent = {
    
      id:'',
  name:'',
  description:'',
  startTime: '',
  endTime: '',
  parentId: '',
  type:''
  }

export default function Row(props) {
    const [inEditMode, setInEditMode] = useState(false)
const [component,setComponent] = useState(initialComponent)

    useEffect(() => {
      setComponent(props.component)
      return () => {
        
      }
    }, [])
  
return(

    <RowDisplayMode  component={props.component} />
)

    // if (inEditMode) {
    //     return (
    //         <RowEditMode component={component}  />
    //     )
    // }
    // return (
    //     <RowDisplayMode  component={component} />
    // )
}
