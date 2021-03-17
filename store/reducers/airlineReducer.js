import { FETCH_AIRLINES } from "../actions/types";

const initialState = {
  airlines: [],
  airlineLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AIRLINES:
      return {
        ...state,
        airlines: action.payload.airlines,
        airlineLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
