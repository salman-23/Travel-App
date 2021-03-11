import { SEARCH_FLIGHT } from "../actions/types";

import instance from "./instance";

export const searchFlight = (filter, navigation) => {
  return async (dispatch) => {
    try {
      filter = {
        ...filter,
        arrivalDate: filter.arrivalDate.split("/").reverse().join("-"),
        departureDate: filter.departureDate.split("/").reverse().join("-"),
      };
      console.log(filter);
      const res = await instance.post("/flights/search", filter);
      await dispatch({
        type: SEARCH_FLIGHT,
        payload: res.data,
      });
      navigation.push("FlightList");
    } catch (error) {
      console.log(error);
    }
  };
};
