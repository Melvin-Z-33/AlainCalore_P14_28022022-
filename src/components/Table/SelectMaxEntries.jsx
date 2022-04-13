import React from 'react';

export default function SelectMaxEntries() {
	function moveCounter() {
		let a = document.querySelector('.sc-llJcti');
		let b = document.querySelector('#header-maxentry');
		b.append(a);
	}
	setTimeout(moveCounter, 30);

	return (
		<div className="select-max-entry" id="header-maxentry">
			<span>Show</span>
			<span>entries</span>
		</div>
	);
}
