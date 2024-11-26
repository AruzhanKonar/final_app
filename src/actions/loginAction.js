import { loginApi } from "../services/authApi";
import { LOGIN_ERROR, LOGIN_SUCCESS } from "../types";


export const loginAction = (body) => async(dispatch) => {
    localStorage.setItem("token", "12345dd");
    await loginApi(body).then((response)=>{
        localStorage.setItem("token", response.data.token);
        dispatch({
            type: LOGIN_SUCCESS,
        }).catch(()=>{
            dispatch({
            type: LOGIN_ERROR,
            }); 
        });
    });
};