import { FETCH_FLIGHTS } from "../actions/types";

import instance from "./instance";

export const searchFlight = (filter, navigation) => {
  return async (dispatch) => {
    try {
      filter = {
        ...filter,
        departureDate: filter.departureDate.split("/").reverse().join("-"),
        returnDate: filter.returnDate
          ? filter.returnDate.split("/").reverse().join("-")
          : null,
      };
      console.log(filter);
      const res = await instance.post("/flights/search", filter);
      const { returnFlights, flights } = res.data;
      await dispatch({
        type: FETCH_FLIGHTS,
        payload: {
          flights,
          returnFlights,
        },
      });
      navigation.push("FlightList");
    } catch (error) {
      console.log(error);
    }
  };
};
