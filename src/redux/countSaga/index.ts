import { put, takeEvery, delay } from "redux-saga/effects";
import { incrementAC } from "redux/reducers/actions";
import { CountActionTypes } from "redux/types/countTypes";

// workers
function* incrementCount() {
  yield delay(2000);
  yield put(incrementAC());
}

// watcher
export default function* countWatcher() {
  yield takeEvery(CountActionTypes.ASYNC_INCREMENT, incrementCount);
}
