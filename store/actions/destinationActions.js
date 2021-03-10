import { FETCH_DESTINATIONS } from "../actions/types";
import instance from "./instance";

export const fetchDestinations = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/destinations");
      dispatch({
        type: FETCH_DESTINATIONS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
