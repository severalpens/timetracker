import React, { useState } from 'react';
import RowDisplayMode from './RowDisplayMode';
import RowEditMode from './RowEditMode';

export default function Row({component,  update, deleteOne, cancel}) {
    const [inEditMode, setInEditMode] = useState(false)


    if (inEditMode) {
        return (
            <RowEditMode component={component}  setInEditMode={setInEditMode} update={update} deleteOne={deleteOne} cancel={cancel}/>
        )
    }
    return (
        <RowDisplayMode  component={component} setInEditMode={setInEditMode} deleteOne={deleteOne}  />
    )
}
