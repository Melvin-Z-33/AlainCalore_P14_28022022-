import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Select from 'react-dropdown-select';
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import FilterComponent from '../components/Table/FilterComponent';
import SelectMaxEntries from '../components/Table/SelectMaxEntries';
import Pagination from '../components/Table/Pagination';
import Counter from '../components/Table/Counter';

const EmployeeTableWrapper = styled.div`
	width: 80%;
`;

const columns = [
	{
		name: 'First Name',
		selector: (row) => row.firstname,
		center: true,
		sortable: true,
	},
	{
		name: 'Last Name',
		selector: (row) => row.lastname,
		center: true,
		sortable: true,
	},
	{
		name: 'Start Date',
		selector: (row) => row.startingDay,
		center: true,
		sortable: true,
	},
	{
		name: 'Department',
		selector: (row) => row.department,
		center: true,
		sortable: true,
	},
	{
		name: 'Date of Birth',
		selector: (row) => row.dateBirth,
		center: true,
		sortable: true,
	},
	{
		name: 'Street',
		selector: (row) => row.street,
		center: true,
		sortable: true,
	},
	{
		name: 'City',
		selector: (row) => row.city,
		center: true,
		sortable: true,
	},
	{
		name: 'State',
		selector: (row) => row.state,
		center: true,
		sortable: true,
	},
	{
		name: 'Zip Code',
		selector: (row) => row.zipcode,
		center: true,
		sortable: true,
	},
];

export default function EmployeeList() {
	const test = useSelector((state) => state.employees);
	const data = test;
	console.log(test);

	// *filter
	const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
	// const filteredItems = data.filter(
	// 	(item) => item.lastname && item.firstname.toLowerCase().includes(filterText.toLowerCase()),
	// );

	const filteredItems = data.filter((item) => {
		return (
			item.firstname.toLowerCase().includes(filterText.toLowerCase()) ||
			item.lastname.toLowerCase().includes(filterText.toLowerCase()) ||
			item.department.toLowerCase().includes(filterText.toLowerCase()) ||
			item.city.toLowerCase().includes(filterText.toLowerCase()) ||
			item.state.toLowerCase().includes(filterText.toLowerCase()) ||
			item.street.toLowerCase().includes(filterText.toLowerCase())
		);
	});

	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent
				onFilter={(e) => setFilterText(e.target.value)}
				onClear={handleClear}
				filterText={filterText}
			/>
		);
	}, [filterText, resetPaginationToggle]);
	// *filter

	const paginationComponentOptions = {
		rowsPerPageText: 'Show',
		rangeSeparatorText: 'en',
		selectAllRowsItem: true,
		selectAllRowsItemText: 'Todos',
	};

	return (
		<>
			<div id="employee-div" className="container">
				<h1>Current Employees</h1>
				<table id="employee-table" className="display"></table>
			</div>
			<SelectMaxEntries />
			<DataTable
				columns={columns}
				data={filteredItems}
				pagination
				paginationComponentOptions={paginationComponentOptions}
				// paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
				subHeader
				subHeaderComponent={subHeaderComponentMemo}
				persistTableHead
				center={true}
			/>
			<div className="footer-flex">
				<Counter />
				<Pagination />
			</div>
			<Link to="/"> Home </Link>
		</>
	);
}
