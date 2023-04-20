// NOTE: DO NOT MODIFY the intial state structure in this file.
import {
  GET_POST_DATA_REQUEST,
  GET_POST_DATA_SUCCESS,
  GET_POST_DATA_FAILURE,
} from "./actiontype";

const initialState = {
  post: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_DATA_REQUEST:
      return { ...state, isLoading: true };
    case GET_POST_DATA_SUCCESS:
      // console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        post: [action.payload],
        isError: false,
      };
    case GET_POST_DATA_FAILURE:
      return { ...state, isLoading: false, post: [], isError: true };
    default:
      return state;
  }
};

export { reducer };
