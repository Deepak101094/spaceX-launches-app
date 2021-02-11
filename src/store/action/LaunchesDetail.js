import {
  FETCH_LAUNCH_DETAIL_INIT,
  FETCH_LAUNCH_DETAIL_SUCCESS,
  FETCH_LAUNCH_DETAIL_FAIL,
} from "../actionType";
import axios from "axios";
import { BASE_URL, ALL_LAUNCHES } from "../../utilities/api";

const fetchLaunchDetail = (flight_number) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_LAUNCH_DETAIL_INIT,
      payload: {
        data: {},
        success: false,
        isLoading: true,
        errMsg: "",
      },
    });
    try {
      const url = `${BASE_URL}${ALL_LAUNCHES}/${flight_number}`;
      const response = await axios.get(url);
      const data = response?.data ?? {};
      let success = false;
      if (data && Array.isArray(data) && (response?.status ?? 0) === 200) {
        success = true;
      }
      dispatch({
        type: FETCH_LAUNCH_DETAIL_SUCCESS,
        payload: {
          data,
          success,
          isLoading: false,
          errMsg: "",
        },
      });
    } catch (error) {
      const err = error?.response?.data?.message ?? "something went wrong!";
      dispatch({
        type: FETCH_LAUNCH_DETAIL_FAIL,
        payload: {
          data: {},
          success: false,
          isLoading: false,
          error: err,
        },
      });
    }
  };
};
export default fetchLaunchDetail;
