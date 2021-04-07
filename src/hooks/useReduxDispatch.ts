import { ReduxDispatch } from "./../redux/store";
import { useDispatch } from "react-redux";

const useReduxDispatch = () => useDispatch<ReduxDispatch>();

export default useReduxDispatch;
