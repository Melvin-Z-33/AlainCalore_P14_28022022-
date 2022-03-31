import React from 'react';
import Datepicker from '../components/Datepicker/Datepicker';
import { useSelector, useDispatch } from 'react-redux';

export default function Form(props) {
	const saveEmploye = () => {
		console.log('oki');
	};
	const dispatch = useDispatch();

	const handleForm = (e) => {
		e.preventDefault();
		dispatch[{
			type: 'ADDDATA',
			payload: dataForm,
		}]

		
	};

	const [dataForm, setDataForm] = {
		firstname: '',
		lastname: '',
	};

	const handleInputs = (e) => {
		if (e.target.classList.contains('inp-firstname')) {
			const newObjState = { ...dataForm, firstame: e.target.value };
			setDataForm(newObjState);
		}
	    else if (e.target.classList.contains('inp-lastname')) {
		const newObjState = { ...dataForm, lastname: e.target.value };
		setDataForm(newObjState);
	}

	return (
		<>
			<form action="#" id="create-employee">
				<label for="first-name">First Name</label>
				<input
					type="text"
					id="first-name"
					onChange={handleInputs}
					className="inp-firstname"
				/>

				<label for="last-name">Last Name</label>
				<input type="text" id="last-name" onChange={handleInputs} />

				<label for="date-of-birth">Date of Birth</label>

				<input
					type="text"
					// name={this.props.name}
					className="answer"
					// value={this.props.value}
					// onChange={this.props.handleChange}
					id="date-of-birth"
				/>

				<label for="start-date">Start Date</label>
				<input id="start-date" type="text" />

				<fieldset className="address">
					<legend>Address</legend>

					<label for="street">Street</label>
					<input id="street" type="text" />

					<label for="city">City</label>
					<input id="city" type="text" />

					<label for="state">State</label>
					<select name="state" id="state"></select>

					<label for="zip-code">Zip Code</label>
					<input id="zip-code" type="number" />
				</fieldset>

				<label for="department">Department</label>
				<select name="department" id="department">
					<option>Sales</option>
					<option>Marketing</option>
					<option>Engineering</option>
					<option>Human Resources</option>
					<option>Legal</option>
				</select>
			</form>
			<Datepicker />
			<button onClick={handleForm}>Save</button>
		</>
	);
}
