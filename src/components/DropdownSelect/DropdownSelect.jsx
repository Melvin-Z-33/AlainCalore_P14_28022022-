import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function DropdownSelect(props) {
	const defaultOption = '';
	const options = props.list.map((el) => el.name);

	return (
		<Dropdown
			options={options}
			// onChange={onSelect}
			value={defaultOption}
			placeholder={options[0]}
			id="state"
			className="stated"
		/>
	);
}
