import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import CombinedReducers from "./Reducers/CombinedReducers";
import { thunk } from "redux-thunk";


const myStore = createStore(CombinedReducers ,composeWithDevTools(applyMiddleware(thunk)));

export default myStore;