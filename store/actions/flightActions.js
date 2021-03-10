import { SEARCH_FLIGHT } from "../actions/types";

import instance from "./instance";

export const searchFlight = (filter) => {
  return async (dispatch) => {
    try {
      filter = {
        ...filter,
        arrivalDate: filter.arrivalDate.replace(/[/]/g, "-"),
        departureDate: filter.departureDate.replace(/[/]/g, "-"),
      };
      console.log(filter);
      const res = await instance.post("/flights/search", filter);
      console.log("success");
      dispatch({
        type: SEARCH_FLIGHT,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
