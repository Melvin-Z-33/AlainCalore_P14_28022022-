import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import DatePicker, { registerLocale, setDefaultLocale, getDefaultLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import fr from 'date-fns/locale/fr';
registerLocale('fr', fr);

export default function Datepicker(props) {
	const dispatch = useDispatch();
	const [startDate, setStartDate] = useState(new Date());

	const saveBirthdayDate = (date) => {
		setStartDate(date);

		dispatch({
			type: 'IS_BIRTHDAY',
			payload: {
				dateOfBirth: date.toLocaleDateString(),
			},
		});
	};

	const saveStartDate = (date) => {
		setStartDate(date);

		dispatch({
			type: 'IS_STARTDATE',
			payload: {
				dateStart: date.toLocaleDateString(),
			},
		});
	};
	return (
		<>
			{props.category === 'startingday' ? (
				<DatePicker
					selected={startDate}
					onChange={(date) => saveStartDate(date)}
					locale="fr"
				/>
			) : (
				<DatePicker
					selected={startDate}
					onChange={(date) => saveBirthdayDate(date)}
					locale="fr"
				/>
			)}
		</>
	);
}
