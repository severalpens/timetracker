
import RowEditModeTextBox from './RowEditModeTextBox';
import { useState, useEffect } from 'react';
import RowEditForRecord from './RowEditForRecord';


const RowEditMode = ({ component, update, deleteOne, cancel, setInEditMode }) => {
	const [updatedComponent, setUpdatedComponent] = useState(component)
	const handleChange = (e) => {
		updatedComponent.name = e.target.value;
	}
	const handleStartTimeChange = (e) => {
		updatedComponent.startTime = e.target.value;
	}
	const handleEndTimeChange = (e) => {
		updatedComponent.endTime = e.target.value;
	}
	const submitHandler = async (e) => {
		e.preventDefault();
		await update(updatedComponent);
		setInEditMode(false);
	}

	const resetHandler = async (e) => {
		//e.preventDefault();
		await cancel(component);
		setInEditMode(false);
	}


	return (
		<tr key={component.id}>
			<td id="input1" className="px-6 py-4 whitespace-nowrap w-full">
				<form className="flex justify-between" onSubmit={submitHandler} onReset={resetHandler}>
					<RowEditModeInputBoxes component={component} handleChange={handleChange} handleStartTimeChange={handleStartTimeChange} handleEndTimeChange={handleEndTimeChange} />
					<div className="flex">
						<button type="submit" className="ml-5 border px-6 py-2.5 border-black rounded-md">Submit</button>
						<button type="reset" className="ml-5 border px-6 py-2.5 border-black rounded-md">Cancel</button>
					</div>
				</form>
			</td>
		</tr>
	)
}


function RowEditModeInputBoxes({ component, handleChange,handleStartTimeChange,handleEndTimeChange }) {
	if (component.type === "record") {
		return (
			<div>
				<RowEditForRecord component={component} handleStartTimeChange={handleStartTimeChange} handleEndTimeChange={handleEndTimeChange} />
			</div>
		)
	}
	return (
		<div>
			<RowEditModeTextBox component={component} handleChange={handleChange} />
		</div>
	)
}

export default RowEditMode