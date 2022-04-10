import React from 'react';
import styled from 'styled-components';

export default function SelectMaxEntries() {
	// let a = document.querySelector('select');
	// console.log(a);
	function moveCounter() {
		let a = document.querySelector('.sc-llJcti');
		let b = document.querySelector('#header-maxentry');
		b.appendChild(a);
	}
	setTimeout(moveCounter, 30);

	return (
		<div className="select-max-entry" id="header-maxentry">
			{/* <select className="border border-black mx-2 py-1 text-sm"> */}
			{/* onChange={(event) => {setFunction(parseInt(event.target.value))}} > */}
			{/* <option value={10} selected>
					10
				</option>
				<option value={25}>25</option>
				<option value={50}>50</option>
				<option value={100}>100</option>
			</select> */}
			<span>Show</span>
			<span>entries</span>
		</div>
	);
}
