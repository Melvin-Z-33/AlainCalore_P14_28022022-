import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import fr from 'date-fns/locale/fr';
registerLocale('fr', fr);

/**
 * @return  Datepicker component
 * @param {string} props - to select component StartDate or Birthday
 */

export default function Datepicker(props) {
	const [startDate, setStartDate] = useState(new Date());

	const saveBirthdayDate = (date) => {
		setStartDate(date);
	};

	const saveStartDate = (date) => {
		setStartDate(date);
	};
	return (
		<>
			{props.category === 'startingday' ? (
				<DatePicker
					selected={startDate}
					onChange={(date) => saveStartDate(date)}
					locale="fr"
					id="startingDay"
					dateFormat="dd/MM/yyyy"
				/>
			) : (
				<DatePicker
					selected={startDate}
					onChange={(date) => saveBirthdayDate(date)}
					locale="fr"
					id="birthDay"
					dateFormat="dd/MM/yyyy"
				/>
			)}
		</>
	);
}
