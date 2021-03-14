import { CREATE_BOOKING } from "./types";

export const bookingCreate = (flightId, navigation, roundtrip, peek) => async (
  dispatch
) => {
  await dispatch({
    type: CREATE_BOOKING,
    payload: { flightId },
  });
  navigation.push(
    peek === "FlightList" && roundtrip ? "ReturnFlights" : "Home"
  );
};
