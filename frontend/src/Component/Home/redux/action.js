//Write the ActionCreator functions here

import {
  GET_POST_DATA_REQUEST,
  GET_POST_DATA_SUCCESS,
  GET_POST_DATA_FAILURE,
} from "./actiontype";

export const req = () => {
  console.log("req");
  return {
    type: GET_POST_DATA_REQUEST,
  };
};
export const succ = (data) => {
  console.log("succ");
  return {
    type: GET_POST_DATA_SUCCESS,
    payload: data,
  };
};
export const fail = () => {
  console.log("err");
  return {
    type: GET_POST_DATA_FAILURE,
  };
};
