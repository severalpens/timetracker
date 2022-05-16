import React, { useState , useEffect} from 'react';

export default function Row({task, startTask, stopTask}) {
const [toggle, setToggle] = useState(false)
    const toggleHandler = (e) => {
        if(toggle === false){
            startTask(task)
        }
        else{
            stopTask(true)
        }
        setToggle(!toggle);

      }
    
      return (
                   <tr key={task.id}>
                      <td className="flex justify-between px-6 whitespace-nowrap w-82">
                      <div className=" px-6 whitespace-nowrap w-82 text-sm text-gray-900">{task.parentId}</div>
                      <div className=" px-6 whitespace-nowrap w-82 text-sm text-gray-900">{task.name}</div>
                        <div className="flex">
                            <ToggleButton toggle={toggle} toggleHandler={toggleHandler}/>
                        </div>
            
                      </td>
                    </tr>
      )
    }

    
    function ToggleButton({toggle, toggleHandler}) {
        if(toggle){
            return (
                <button  onClick={toggleHandler} className="border m-4  px-6 py-2.5 border-black rounded-md">Running</button>
                )
            }
            return (
          <button  onClick={toggleHandler} className="border m-4  px-6 py-2.5 border-black rounded-md">Inactive</button>
      )
    }
    
