export const INITIAL_STATE = { employees: [] };

export default function userReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'SAVE_USER': {
			return {
				...state,

				user: action.payload,
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
		case 'ADD_DATA': {
			return {
				employees: [...state.employees, action.payload],
			};
		}

		default:
			return state;
	}
}
