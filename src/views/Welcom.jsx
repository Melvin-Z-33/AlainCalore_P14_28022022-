import React from 'react';
import Form from '../components/';

export default function Welcom() {
	return (
		<>
			<div class="title">
				<h1>HRnet</h1>
			</div>

			<div class="container">
				<a href="employee-list.html">View Current Employees</a>
				<h2>Create Employee</h2>
				<Form />

				<button onclick="saveEmployee()">Save</button>
			</div>
			<div id="confirmation" class="modal">
				Employee Created!
			</div>
		</>
	);
}
