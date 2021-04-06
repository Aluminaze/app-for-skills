import React from "react";
import useReduxSelector from "hooks/useReduxSelector";
import "./App.css";
import { useDispatch } from "react-redux";
import { asyncIncrementAC } from "redux/reducers/actions";

function App() {
  const count = useReduxSelector((state) => state.countReducer.count);
  const dispatch = useDispatch();
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
