import React, { useState } from 'react';
import EntryRowDisplayMode from './EntryRowDisplayMode';
import EntryRowEditMode from './EntryRowEditMode';

export default function EntryRow(props) {
    const {entry, setEntry} = props;
    const [inEditMode, setInEditMode] = useState(false)
    if (inEditMode) {
        return (
            <EntryRowEditMode entry={entry} setInEditMode={setInEditMode}  setEntry={setEntry}  />
        )
    }
    return (
        <EntryRowDisplayMode  entry={entry} setInEditMode={setInEditMode}  setEntry={setEntry} />
    )
}
