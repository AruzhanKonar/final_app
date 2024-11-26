import { deleteEmployeeApi } from "../services/employeeApi";
import { DELETE_EMPLOYEE_SUCCESS } from "../types";

export const deleteEmployeeAction = (id) => async(dispatch) => {
    await deleteEmployeeApi(id).then(()=>{
        dispatch({
            type: DELETE_EMPLOYEE_SUCCESS,
        });
    });
};