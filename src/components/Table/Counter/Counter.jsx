import { React, useEffect, useState } from 'react';
import './counter.css';

export default function Counter(props) {
	const [firstEntryIndex, setFirstEntryIndex] = useState(0);

	const { nbrForFilter, resultLength } = props;

	// const { resultLength, nbrForFilter } = props;
	// useEffect(() => {
	// 	if(currentPage == 1){
	// 	  // if no entries, tell "Showing 0"
	// 	  if(resultLength == 0) setFirstEntryIndex(0)
	// 	  else setFirstEntryIndex(1)
	// 	}else setFirstEntryIndex( currentPage * maxEntries - 9)
	//   })

	function moveCounter() {
		let counter = document.getElementById('counterCustom');

		let nav = document.querySelector('nav');

		nav.appendChild(counter);
	}
	setTimeout(moveCounter, 30);

	return nbrForFilter.length === resultLength.length ? (
		<div className="counter" id="counterCustom">
			Showing 0 to {nbrForFilter.length} of {nbrForFilter.length} entries
		</div>
	) : (
		<div className="counter" id="counterCustom">
			Showing 1 to {nbrForFilter.length} of {nbrForFilter.length} entries (filtred from{' '}
			{resultLength.length} total entries)
		</div>
	);
}
