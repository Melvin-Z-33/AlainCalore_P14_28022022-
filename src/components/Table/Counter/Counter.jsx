import { React } from 'react';
import './counter.css';

export default function Counter(props) {
	const { nbrForFilter, resultLength } = props;

	function moveCounter() {
		let counter = document.getElementById('counterCustom');
		let nav = document.querySelector('nav');

		if (nav !== null) {
			nav.append(counter);
		}
	}
	setTimeout(moveCounter, 100);

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
