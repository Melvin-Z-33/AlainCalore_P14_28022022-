import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Select from 'react-dropdown-select';
import { useSelector } from 'react-redux';

export default function EmployeeList() {
	const test = useSelector((state) => state.employees);
	console.log(test);
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
