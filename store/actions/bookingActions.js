import { CREATE_BOOKING, SET_DETAILS, SET_FLIGHTS } from "./types";
import instance from "./instance";
import { Alert } from "react-native";

const bookingAlert = () => {
  Alert.alert(
    "Booking Confirmation",
    "Your flight has been booked successfully ✈"
  );
};

export const bookingCreate = (
  passengers,
  bookingReducer,
  user,
  navigation
) => async (dispatch) => {
  try {
    const { travelClassId } = bookingReducer;
    const chosenFlights = bookingReducer.flights;
    const flights = [chosenFlights.departing];
    if (chosenFlights.returning) flights.push(chosenFlights.returning);
    passengers = passengers.map((passenger) => ({
      ...passenger,
      birthDate: passenger.birthDate.split("/").reverse().join("-"),
    }));
    const res = await instance.post(`/booking`, {
      passengers,
      flights,
      travelClassId,
      userId: user ? user.id : null,
    });
    await dispatch({
      type: CREATE_BOOKING,
      payload: res.data,
    });
    navigation.push("Home");
    bookingAlert();
  } catch (error) {
    console.log(error);
  }
};

export const passengersDetails = (passengersCount, travelClassId) => {
  return {
    type: SET_DETAILS,
    payload: { passengersCount, travelClassId },
  };
};

export const chosenFlights = (
  flightId,
  navigation,
  roundtrip,
  type,
  route
) => async (dispatch) => {
  await dispatch({
    type: SET_FLIGHTS,
    payload: { [type]: flightId },
  });
  navigation.push(
    route.pathname === "FlightList" && roundtrip ? "ReturnFlights" : "Booking"
  );
};
