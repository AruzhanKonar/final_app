import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers ({
    employeeReducer,  
    loginReducer,
});

export default rootReducer;