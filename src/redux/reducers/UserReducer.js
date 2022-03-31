export const INITIAL_STATE = {
	firstName: '',
	lastName: '',
	dateOfBirth: 1,
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
		case 'IS_LOGOUT': {
			return {
				...state,
				showSignIn: true,
			};
		}

		default:
			return state;
	}
}
