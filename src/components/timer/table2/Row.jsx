import React, { useState , useEffect} from 'react';
import RowDisplayMode from './RowDisplayMode';

export default function Row({component,  mutationRequest}) {
    const [inEditMode, setInEditMode] = useState(false)


    return (
        <RowDisplayMode  component={component} setInEditMode={setInEditMode} mutationRequest={mutationRequest}/>
    )
}
