import {
  FETCH_LAUNCHES_INIT,
  FETCH_LAUNCHES_SUCCESS,
  FETCH_LAUNCHES_FAIL,
} from "../actionType";

const fetchLaunches = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_LAUNCHES_INIT:
      return {
        ...state,
        type,
        payload,
      };
    case FETCH_LAUNCHES_SUCCESS:
      return {
        ...state,
        type,
        payload,
      };
    case FETCH_LAUNCHES_FAIL:
      return {
        ...state,
        type,
        payload,
      };
    default:
      return state;
  }
};
export default fetchLaunches;
