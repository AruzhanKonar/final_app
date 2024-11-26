import { fetchEmployeeApi } from "../services/employeeApi";
import { FETCH_EMPLOYEE_SUCCESS } from "../types";

export const fetchEmployeeAction = () => async(dispatch) => {
    await fetchEmployeeApi().then((response)=>{
        dispatch({
            type: FETCH_EMPLOYEE_SUCCESS,
            payload: response.data,
        });
    });
};