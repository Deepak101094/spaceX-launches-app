import {
  FETCH_LAUNCHES_INIT,
  FETCH_LAUNCHES_SUCCESS,
  FETCH_LAUNCHES_FAIL,
} from "../actionType";
import axios from "axios";
import { BASE_URL, ALL_LAUNCHES } from "../../utilities/api";

const fetchLaunches = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_LAUNCHES_INIT,
      payload: {
        data: [],
        success: false,
        isLoading: true,
        errMsg: "",
      },
    });
    try {
      const url = `${BASE_URL}${ALL_LAUNCHES}`;
      const response = await axios.get(url);
      const data = response?.data ?? [];
      console.log(data);
      let success = false;
      if (
        data &&
        Array.isArray(data) &&
        (data || []).length > 0 &&
        (response?.status ?? 0) === 200
      ) {
        success = true;
      }
      dispatch({
        type: FETCH_LAUNCHES_SUCCESS,
        payload: {
          data,
          success,
          isLoading: false,
          errMsg: "",
        },
      });
    } catch (error) {
      const err = error?.response?.data?.message ?? "something went wrong";
      dispatch({
        type: FETCH_LAUNCHES_FAIL,
        payload: {
          data: [],
          success: false,
          isLoading: false,
          errMsg:err,
        },
      });
    }
  };
};
export default fetchLaunches;
