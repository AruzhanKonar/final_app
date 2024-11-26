import { LOGIN_SUCCESS, SUCCESS, LOGIN_ERROR, ERROR, SET_EMAIL, SET_PASSWORD } from "../types";

const initialState = {
    email:"",
    password:"",
    status:"",
};

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload,
            };
            case SET_PASSWORD:
            return {
                ...state,
                password: action.payload,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                status: SUCCESS,
            };
            case LOGIN_ERROR:
            return {
                ...state,
                status: ERROR,
            };
            default:
                return state;
                
    }
};

export default loginReducer;