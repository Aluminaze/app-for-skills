import React from "react";
import useReduxSelector from "hooks/useReduxSelector";
import "./App.css";
import { asyncIncrementAC } from "redux/reducers/actions";
import useReduxDispatch from "hooks/useReduxDispatch";

function App() {
  const count = useReduxSelector((state) => state.countReducer.count);
  const dispatch = useReduxDispatch();

  return (
    <div className="App">
      <span>Count: {count}</span>
      <button onClick={() => dispatch(asyncIncrementAC())}>
        ASYNC INCREMENT
      </button>
    </div>
  );
}

export default App;
