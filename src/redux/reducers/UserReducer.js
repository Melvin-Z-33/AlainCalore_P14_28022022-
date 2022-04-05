export const INITIAL_STATE = {
	firstName: '',
	lastName: '',
	dateOfBirth: '',
	dateStart: '',
	address: {
		street: '',
		city: '',
		state: '',
		zipCode: '',
	},
	department: '',
};

export default function userReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'IS_LOGGED_USER': {
			return {
				...state,
				firstName: action.payload.firstName,
				lastName: action.payload.lastName,
			};
		}
		case 'UPDATE_NAME': {
			return {
				...state,
				firstName: action.payload.firstName,
				lastName: action.payload.lastName,
			};
		}

		case 'IS_BIRTHDAY': {
			return {
				...state,

				dateOfBirth: action.payload,
			};
		}

		case 'IS_STARTDATE': {
			return {
				...state,

				dateStart: action.payload,
			};
		}
		case 'ADDDATA': {
			return {
				...state,
				dataForm: action.payload,
			};
		}

		default:
			return state;
	}
}
