import React, { useState } from 'react';
import RowDisplayMode from './RowDisplayMode';
import RowEditMode from './RowEditMode';

export default function Row({component,  mutationRequest}) {
    const [inEditMode, setInEditMode] = useState(false)


    if (inEditMode) {
        return (
            <RowEditMode component={component}  setInEditMode={setInEditMode} mutationRequest={mutationRequest}/>
        )
    }
    return (
        <RowDisplayMode  component={component} setInEditMode={setInEditMode} mutationRequest={mutationRequest}/>
    )
}
