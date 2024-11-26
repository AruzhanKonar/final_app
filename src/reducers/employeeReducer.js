import { FETCH_EMPLOYEE_SUCCESS } from "../types";

const initialState = {
    employeeList: [],
};

const employeeReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employeeList: action.payload,
            };
            default:
                return state;
    }
};

export default employeeReducer;