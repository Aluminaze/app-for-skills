import {
  IncrementCountAction,
  DecrementCountAction,
  CountActionTypes,
  AsyncIncrementAction,
} from "redux/types/countTypes";

export const incrementAC = (): IncrementCountAction => {
  return {
    type: CountActionTypes.INCREMENT,
  };
};

export const decrementAC = (): DecrementCountAction => {
  return {
    type: CountActionTypes.DECREMENT,
  };
};

export const asyncIncrementAC = (): AsyncIncrementAction => {
  return {
    type: CountActionTypes.ASYNC_INCREMENT,
  };
};
