import { createStore, combineReducers, applyMiddleware } from "redux";
// import { logger }  from "redux-logger";

import counter from "./reducers/counterReducer"

export default createStore(
    combineReducers({counter}), 
    applyMiddleware() 
);