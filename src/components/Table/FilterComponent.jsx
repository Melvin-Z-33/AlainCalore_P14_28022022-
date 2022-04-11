import React from 'react';
import styled from 'styled-components';

const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;
	margin-left: 18px;

	&:hover {
		cursor: pointer;
	}
`;

export default function FilterComponent({ filterText, onFilter, onClear }) {
	return (
		<>
			<span>Search :</span>
			<TextField
				id="search"
				type="text"
				aria-label="Search Input"
				value={filterText}
				onChange={onFilter}
			/>
		</>
	);
}
