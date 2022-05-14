
import TextBox from './TextBox';
import { useState, useEffect } from 'react';

export default function Form({mutationRequest}) {
  const [inEditMode, setInEditMode] = useState(true)
  const [component, setComponent] = useState({})

  const submitHandler = async (e) => {
    await mutationRequest(component, "create");
    setComponent({})
    setInEditMode(!inEditMode);
  }
  const handleChange = (e) => {
    component.name = e.target.value;
  }



  return (

    <div className="ml-16 my-16 w-1/3">
      <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 pb-10">Add New:</h2>
        <form className="width-full flex" onSubmit={submitHandler}>
          <TextBox className="width-full " component="component" handleChange={handleChange} />
          <button type="submit" className=" ml-5 border px-6 py-2.5 border-black rounded-md">Submit</button>
        </form>
    </div>


  )
}
