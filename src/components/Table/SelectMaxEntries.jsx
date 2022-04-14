import React, { useState } from 'react';

export default function SelectMaxEntries() {
	const [nbrEntries, setNbrEntries] = useState();

	let numberOfEntries = document.querySelector('.sc-llJcti');
	function moveCounter() {
		let headerEntries = document.getElementById('header-maxentry');
		let nav = document.querySelector('nav');
		console.log(numberOfEntries);
		if (numberOfEntries == null) {
			setNbrEntries(false);
			console.log('false');
		} else {
			setNbrEntries(true);
			headerEntries.append(numberOfEntries);
			console.log('true');
		}
	}
	setTimeout(moveCounter, 100);

	return (
		<>
			{numberOfEntries ? (
				<div className="select-max-entry" id="header-maxentry">
					<span>Show</span>
					<span>entries</span>
				</div>
			) : (
				<>
					<div className="select-max-entry" id="header-maxentry">
						<span>show</span>
						<span>entries</span>
						<select>
							<option value={10} defaultValue>
								10
							</option>
							<option value={25}>25</option>
							<option value={50}>50</option>
							<option value={100}>100</option>
						</select>
					</div>
				</>
			)}
		</>
	);
}
