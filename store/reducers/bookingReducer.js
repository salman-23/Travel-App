import { CREATE_BOOKING } from "../actions/types";

const initialState = {
  bookedFlights: [],
  bookingLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOKING:
      const { flightId } = action.payload;
      return {
        ...state,
        bookedFlights: [...state.bookedFlights, flightId],
        bookingLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
