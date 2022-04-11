import React from 'react';
import Datepicker from '../Datepicker/Datepicker';
import { useDispatch } from 'react-redux';
import DropdownSelect from '../DropdownSelect/DropdownSelect';
import listCity from '../../listCity.js';
import Modale from '../Modale/Modale';
import '../Modale/modale.css';

export default function Form() {
	const dispatch = useDispatch();

	const handleForm = (e) => {
		e.preventDefault();

		const user = {
			firstname: document.getElementById('first-name').value,
			lastname: document.getElementById('last-name').value,
			dateBirth: document.getElementById('birthDay').value,
			startingDay: document.getElementById('startingDay').value,
			street: document.getElementById('street').value,
			city: document.getElementById('city').value,
			state: document.getElementsByClassName('Dropdown-placeholder')[0].innerHTML,
			zipcode: document.getElementById('zip-code').value,
			department: document.getElementById('department').value,
		};

		dispatch({
			type: 'ADD_DATA',
			payload: user,
		});
	};

	return (
		<>
			<form action="#" id="create-employee">
				<label htmlFor="first-name">First Name</label>
				<input type="text" id="first-name" className="inp-firstname" />

				<label htmlFor="last-name">Last Name</label>
				<input type="text" id="last-name" />

				<label htmlFor="date-of-birth">Date of Birth</label>

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
			<Modale secondFunction={handleForm} buttonText="save" modalText="Employee Created!" />
		</>
	);
}
