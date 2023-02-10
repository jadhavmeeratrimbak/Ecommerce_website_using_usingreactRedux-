import * as actionTypes from "./action";

export const addCounter = (product) => ({
  type: actionTypes.ADD_COUNTER,
  payload: product,
});

export const reduceCounter = (id) => ({
  type: actionTypes.REDUCE_COUNTER,
  payload: id,
});

