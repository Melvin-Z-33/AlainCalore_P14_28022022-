import React from 'react';
import styled from 'styled-components';

export default function SelectMaxEntries() {
	return (
		<div className="select-max-entry">
			Show
			<select className="border border-black mx-2 py-1 text-sm">
				{/* onChange={(event) => {setFunction(parseInt(event.target.value))}} > */}
				<option value={10} selected>
					10
				</option>
				<option value={25}>25</option>
				<option value={50}>50</option>
				<option value={100}>100</option>
			</select>
			entries
		</div>
	);
}
