import { FETCH_FLIGHTS } from "../actions/types";

const initialState = {
  flights: [],
  returnFlights: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLIGHTS:
      return {
        ...state,
        flights: action.payload.flights,
        returnFlights: action.payload.returnFlights,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
