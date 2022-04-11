export const INITIAL_STATE = { employees: [] };

export default function userReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'ADD_DATA': {
			return {
				employees: [...state.employees, action.payload],
			};
		}

		default:
			return state;
	}
}
