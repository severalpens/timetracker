import React, { useState , useEffect} from 'react';
import RowDisplayMode from './RowDisplayMode';
import RowEditMode from './RowEditMode';

export default function Row({component}) {
    const [inEditMode, setInEditMode] = useState(false)

    console.log("Row",component)

return(

    <RowDisplayMode component={component} />
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
