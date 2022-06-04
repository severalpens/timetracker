import React, { useState } from 'react';
import RowDisplayMode from './RowDisplayMode';
import RowEditMode from './RowEditMode';

const Row = ({component,  update, setComponents, cancel}) => {
    const [inEditMode, setInEditMode] = useState(false)


    if (inEditMode) {
        return (
            <RowEditMode component={component}  setInEditMode={setInEditMode} update={update} setComponents={setComponents} cancel={cancel}/>
        )
    }
    return (
        <RowDisplayMode  component={component} setInEditMode={setInEditMode} setComponents={setComponents}  />
    )
}

export default Row;