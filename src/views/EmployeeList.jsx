import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import FilterComponent from '../components/Table/FilterComponent';
import SelectMaxEntries from '../components/Table/SelectMaxEntries';
import Counter from '../components/Table/Counter/Counter';
import 'react-dropdown/style.css';

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
	const arrayOfEmployees = useSelector((state) => state.employees);
	const dataForFilter = arrayOfEmployees;

	// * FILTER FOR SEARCH BAR COMPONENT *

	const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);

	const filteredItems = dataForFilter.filter((item) => {
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

	//  * OPTIONS FOR PAGINATION *
	const paginationComponentOptions = {
		rowsPerPageText: 'Show',
		rangeSeparatorText: 'un',
		selectAllRowsItem: false,
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
				pagination={true}
				paginationPerPage={10}
				paginationComponentOptions={paginationComponentOptions}
				paginationTotalRows={0}
				subHeader
				subHeaderComponent={subHeaderComponentMemo}
				persistTableHead
				center={true}
				paginationRowsPerPageOptions={[10, 25, 50, 100]}
			/>
			<div className="footer-flex">
				<Counter resultLength={arrayOfEmployees} nbrForFilter={filteredItems} />
			</div>
			<Link to="/"> Home </Link>
		</>
	);
}