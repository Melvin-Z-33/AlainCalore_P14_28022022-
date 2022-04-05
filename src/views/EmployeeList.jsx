import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Select from 'react-dropdown-select';

export default function EmployeeList() {
	return (
		<>
			<div id="employee-div" className="container">
				<h1>Current Employees</h1>
				<table id="employee-table" className="display"></table>
				<Link to="/"> Home </Link>
			</div>
		</>
	);
}
