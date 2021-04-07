import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { countReducer } from "./reducers/countReducer";
import rootSaga from "./rootSaga";

const rootReducer = combineReducers({
  countReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type ReduxDispatch = typeof store.dispatch;
