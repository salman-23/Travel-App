import { CREATE_BOOKING, SET_DETAILS, SET_FLIGHTS } from "../actions/types";
const initialState = {
  bookings: [],
  flights: {
    departing: null,
    returning: null,
  },
  passengersCount: 0,
  travelClassId: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOKING:
      const { flights, newBooking } = action.payload;
      return {
        ...state,
        bookings: [...state.bookings, newBooking],
      };
    case SET_DETAILS:
      const { passengersCount, travelClassId } = action.payload;
      return {
        ...state,
        passengersCount,
        travelClassId,
      };
    case SET_FLIGHTS:
      const { departing, returning } = action.payload;
      return {
        ...state,
        flights: {
          departing: departing ?? state.flights.departing,
          returning: returning ?? state.flights.returning,
        },
      };
    default:
      return state;
  }
};

export default reducer;
