import {
  FETCH_LAUNCH_DETAIL_INIT,
  FETCH_LAUNCH_DETAIL_SUCCESS,
  FETCH_LAUNCH_DETAIL_FAIL,
} from "../actionType";

const fetchLaunchDetail = (state = {}, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case FETCH_LAUNCH_DETAIL_INIT:
      return {
        ...state,
        type,
        payload,
      };
    case FETCH_LAUNCH_DETAIL_SUCCESS:
      return {
        ...state,
        type,
        payload,
      };
    case FETCH_LAUNCH_DETAIL_FAIL:
      return {
        ...state,
        type,
        payload,
      };
    default:
      return state;
  }
};
export default fetchLaunchDetail;
