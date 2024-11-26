import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_PASSWORD } from "../types";
import { SET_EMAIL } from "../types";
import { loginAction } from "../actions/loginAction";
import { useSelector } from "react-redux";

const LoginPage = () => {
    const {email,password} = useSelector((state) => state.loginReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEmailChanged = (value)=> {
        dispatch ( {
            type: SET_EMAIL,
            payload: value,
        });
    };

    const handlePasswordChanged = (value)=> {
        dispatch ( {
            type: SET_PASSWORD,
            payload: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            email,
            password,
        };
        dispatch(loginAction(body));
    }

    useEffect(()=> {
        if(localStorage.getItem("token")) {
        navigate("/")
        } 
        } , []);
    return (
        <div>
            Login Page
            <form onSubmit={handleSubmit}>
                <input type="email" onChange={(e)=>handleEmailChanged(e.target.value)} 
                placeholder="Email" />
                <input type="password" onChange={(e)=>handlePasswordChanged(e.target.value)} 
                placeholder="Password"/>
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginPage;