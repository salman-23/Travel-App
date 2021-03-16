import { FETCH_TRAVELCLASSES } from "../actions/types";

const initialState = {
  travelClasses: [],
  travelClassLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRAVELCLASSES:
      return {
        ...state,
        travelClasses: action.payload,
        travelClassLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
