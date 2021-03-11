import { SET_USER, FETCH_PROFILE, UPDATE_PROFILE } from '../actions/types';

const initialState = {
	user: null,
	profile: null,
	loading: true,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				user: action.payload,
			};
		case FETCH_PROFILE:
			return {
				...state,
				profile: action.payload,
				loading: action.payload == null ? true : false,
			};
		case UPDATE_PROFILE:
			const updatedProfile = action.payload;
			return {
				...state,
				profile: updatedProfile,
			};

		default:
			return state;
	}
};

export default reducer;
