import { FETCH_FLIGHTS } from "../actions/types";

const initialState = {
  flights: [],
  returnFlights: [],
  flightsLoading: true,
  roundtrip: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLIGHTS:
      return {
        ...state,
        flights: action.payload.flights,
        returnFlights: action.payload.returnFlights,
        roundtrip: action.payload.roundtrip,
        flightsLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
