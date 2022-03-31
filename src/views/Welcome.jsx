import React from 'react';
import Form from '../components/Form';
import { Link } from 'react-router-dom';

export default function Welcome() {
	return (
		<>
			<div className="title">
				<h1>HRnet</h1>
			</div>

			<div className="container">
				<Link to="/employe-list"> View Current Employees </Link>

				<h2>Create Employee</h2>
				<Form />

				{/* <button onclick="saveEmployee()">Save</button> */}
			</div>
			<div id="confirmation" className="modal">
				Employee Created!
			</div>
		</>
	);
}
