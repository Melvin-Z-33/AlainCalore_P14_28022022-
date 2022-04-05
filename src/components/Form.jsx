import React from 'react';
import Datepicker from '../components/Datepicker/Datepicker';
import { useSelector, useDispatch } from 'react-redux';
import DropdownSelect from './DropdownSelect/DropdownSelect';
import listCity from '../listCity.js';

export default function Form() {
	console.log(listCity);

	const saveEmploye = () => {
		console.log('oki');
	};
	const dispatch = useDispatch();

	// const [dataForm, setDataForm] = {
	// 	firstname: '',
	// 	lastname: '',
	// };

	const handleForm = (e) => {
		e.preventDefault();
		// const newObjState = { ...dataForm };

		// dispatch({
		// 	type: 'ADDDATA',
		// 	payload: newObjState,
		// });
	};

	const handleInputs = (e) => {
		// if (e.target.classList.contains('inp-firstname')) {
		// 	const newObjState = { ...dataForm, firstame: e.target.value };
		// 	setDataForm(newObjState);
		// } else if (e.target.classList.contains('inp-lastname')) {
		// 	const newObjState = { ...dataForm, lastname: e.target.value };
		// 	setDataForm(newObjState);
		// }
	};

	return (
		<>
			<form action="#" id="create-employee">
				<label htmlFor="first-name">First Name</label>
				<input
					type="text"
					id="first-name"
					onChange={handleInputs}
					className="inp-firstname"
				/>

				<label htmlFor="last-name">Last Name</label>
				<input type="text" id="last-name" onChange={handleInputs} />

				<label htmlFor="date-of-birth">Date of Birth</label>

				{/* <input
					type="text"
					// name={this.props.name}
					className="answer"
					// value={this.props.value}
					// onChange={this.props.handleChange}
					id="date-of-birth"
				/> */}
				<Datepicker className="answer" id="date-of-birth" category="birthday" />

				<label htmlFor="start-date">Start Date</label>
				<Datepicker id="start-date" category="startingday" />

				<fieldset className="address">
					<legend>Address</legend>

					<label htmlFor="street">Street</label>
					<input id="street" type="text" />

					<label htmlFor="city">City</label>
					<input id="city" type="text" />
					<label htmlFor="state">State</label>
					{/* <select name="state" id="state"></select> */}
					<DropdownSelect list={listCity} id="state" />

					<label htmlFor="zip-code">Zip Code</label>
					<input id="zip-code" type="number" />
				</fieldset>

				<label htmlFor="department">Department</label>
				<select name="department" id="department">
					<option>Sales</option>
					<option>Marketing</option>
					<option>Engineering</option>
					<option>Human Resources</option>
					<option>Legal</option>
				</select>
			</form>
			<button onClick={handleForm}>Save</button>
		</>
	);
}
