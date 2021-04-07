import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "redux/store";

const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useReduxSelector;
