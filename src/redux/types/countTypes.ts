export interface CountState {
  count: number;
}

export enum CountActionTypes {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  ASYNC_INCREMENT = "ASYNC_INCREMENT",
  ASYNC_DECREMENT = "ASYNC_DECREMENT",
}

export interface IncrementCountAction {
  type: CountActionTypes.INCREMENT;
}

export interface DecrementCountAction {
  type: CountActionTypes.DECREMENT;
}

export interface AsyncIncrementAction {
  type: CountActionTypes.ASYNC_INCREMENT;
}

export type CountActions = IncrementCountAction | DecrementCountAction;
