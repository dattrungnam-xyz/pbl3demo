// import axios from 'axios'
import { loginFailed, loginStart, loginSuccess } from './authSlice'


export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
      await fetch("http://localhost:8080/v1/auth/login",{
           method: 'post',
           headers: {
            'Content-Type': 'application/json',
           },
           body: JSON.stringify(user),
        }).then(res => res.json())
        .then(res => dispatch(loginSuccess(res)))
        navigate("/")
        
    } catch (error) {
        dispatch(loginFailed())
    }
}