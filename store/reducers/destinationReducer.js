import { FETCH_DESTINATIONS } from "../actions/types";

const initialState = {
  destinations: [],
  destinationLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DESTINATIONS:
      return {
        ...state,
        destinations: action.payload,
        destinationLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
