import React, { useState } from 'react';

import DatePicker, { registerLocale } from 'react-datepicker';
import fr from 'date-fns/locale/fr';
import { useSelector, useDispatch } from 'react-redux';
// import 'react-datepicker/dist/react-datepicker.css';

export default function Datepicker() {
	registerLocale(('fr', fr));
	const date = useSelector((state) => state.dateOfBirth);
	const dispatch = useDispatch();

	const changeBirth = (date) => {
		dispatch({
			type: 'IS_BIRTHDAY',
			payload: { dateOfBirth: date },
		});
	};

	const [startDate, setStartDate] = useState(new Date());
	return (
		<>
			<DatePicker selected={startDate} onChange={(date) => changeBirth(date)} />
			<div>{date}</div>
		</>
	);
}
