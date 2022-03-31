import React from 'react';
import { Link } from 'react-router-dom';
import Datepicker from '../components/Datepicker/Datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function EmployeeList() {
	return (
		<>
			<div id="employee-div" className="container">
				<h1>Current Employees</h1>
				<table id="employee-table" className="display"></table>

				<Link to="/"> Home </Link>
			</div>
			<Datepicker className="form-control" />
		</>
	);
}
