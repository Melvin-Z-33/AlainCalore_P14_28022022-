import React from 'react';

export default function SelectMaxEntries() {
	let numberOfEntries = document.querySelector('.sc-llJcti');
	let headerEntries = document.querySelector('#header-maxentry');
	console.log(numberOfEntries);

	if (numberOfEntries === null) {
		alert('ok');
	}

	function moveCounter() {
		headerEntries.appendChild(numberOfEntries);
	}
	setTimeout(moveCounter, 30);

	return (
		<div className="select-max-entry" id="header-maxentry">
			<span>Show</span>
			<span>entries</span>
		</div>
	);
}
