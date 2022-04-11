import React from 'react';
import styled from 'styled-components';

export default function SelectMaxEntries() {
	function moveCounter() {
		let a = document.querySelector('.sc-llJcti');
		let b = document.querySelector('#header-maxentry');
		b.appendChild(a);
	}
	setTimeout(moveCounter, 30);

	return (
		<div className="select-max-entry" id="header-maxentry">
			<span>Show</span>
			<span>entries</span>
		</div>
	);
}
