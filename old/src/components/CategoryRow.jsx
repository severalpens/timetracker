import React, { useState } from 'react';
import CategoryRowDisplayMode from './CategoryRowDisplayMode';
import CategoryRowEditMode from './CategoryRowEditMode';

export default function CategoryRow(props) {
    const {categories,category, setCategory, setName} = props;
    const [inEditMode, setInEditMode] = useState(false)
    if (inEditMode) {
        return (
            <CategoryRowEditMode category={category} setInEditMode={setInEditMode}  setCategory={setCategory} setName={setName} />
        )
    }
    return (
        <CategoryRowDisplayMode  category={category} setInEditMode={setInEditMode}  setCategory={setCategory} />
    )
}
