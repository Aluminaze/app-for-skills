import {
  CountActions,
  CountState,
  CountActionTypes,
} from "redux/types/countTypes";

export const countState: CountState = {
  count: 0,
};

export const countReducer = (
  state = countState,
  action: CountActions
): CountState => {
  switch (action.type) {
    case CountActionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case CountActionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
