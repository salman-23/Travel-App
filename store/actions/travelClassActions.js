import { FETCH_TRAVELCLASSES } from "../actions/types";
import instance from "./instance";

export const fetchTravelClasses = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/travelClasses");
      dispatch({
        type: FETCH_TRAVELCLASSES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
