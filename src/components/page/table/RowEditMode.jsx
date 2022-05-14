
import TextBox from './RowEditModeTextBox';
import { useState, useEffect } from 'react';


export default function RowEditMode({ component, mutationRequest, setInEditMode }) {
	const [updatedComponent, setUpdatedComponent] = useState(component)
	const handleChange = (e) => {
		updatedComponent.name = e.target.value;
	}

	const submitHandler = async (e) => {
		e.preventDefault();
		await mutationRequest(updatedComponent, "update");
		setInEditMode(false);
	}

	const resetHandler = async (e) => {
		//e.preventDefault();
		await mutationRequest(component, "cancel");
		setInEditMode(false);
	}


	return (
		<tr key={component.id}>
			<td id="input1" className="px-6 py-4 whitespace-nowrap w-full">
				<form className="flex justify-between" onSubmit={submitHandler} onReset={resetHandler}>
					<TextBox component={updatedComponent} handleChange={handleChange} />
					<div className="flex">
						<button type="submit" className="ml-5 border px-6 py-2.5 border-black rounded-md">Submit</button>
						<button type="reset" className="ml-5 border px-6 py-2.5 border-black rounded-md">Cancel</button>
					</div>
				</form>
			</td>
		</tr>
	)
}
