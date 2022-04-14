import React, { useState } from 'react';

export default function SelectMaxEntries() {
	const [nbrEntries, setNbrEntries] = useState(false);

	let nav;
	function moveCounter() {
		let numberOfEntries = document.querySelector('.gnaqej');
		let headerEntries = document.getElementById('header-maxentry');
		nav = document.querySelector('nav');

		if (nav === null) {
			setNbrEntries(false);
		}

		if (nav !== null) {
			setNbrEntries(true);
			headerEntries.append(numberOfEntries);
		}
	}
	setTimeout(moveCounter, 100);

	return (
		<>
			{nbrEntries ? (
				<div className="select-max-entry" id="header-maxentry">
					<span>Show</span>
					<span>entries</span>
				</div>
			) : (
				<>
					<div className="select-max-entry" id="header-maxentry">
						<span>Show</span>
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
