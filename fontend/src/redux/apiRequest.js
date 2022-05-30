import axios from '../api/request';
import {
    loginStart,
    loginSuccess,
    loginFailed,
    registerStart,
    registerFailed,
    registerSuccess,
    createCompnay,
    createCompnayFailed
} from './authSlice';

export const loginUser = async(user, dispatch, navigeta) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('/v4/auth/login-user', user);
        dispatch(loginSuccess(res.data));
        navigeta('/');
    } catch (error) {
        dispatch(loginFailed());
    }
}

export const registerUser = async(user, dispatch, navigeta) => {
    dispatch(registerStart());
    try {
        await axios.post('/v4/auth/register-user', user);
        dispatch(registerSuccess());
        navigeta('/login');
    } catch (error) {
        dispatch(registerFailed());
    }
}

export const createCompanyName = async(companyName, token, dispatch, navigeta) => {
    try {
        const res = await axios.post('/v4/register/new-company-name', companyName, {
            headers: { authToken: `joinjapan ${token}` }
        });
        dispatch(createCompnay(res.data));
        navigeta('/job');
    } catch (error) {
        dispatch(createCompnayFailed());
    }
}

export const uploadFileToCloud = async(form) => {
    try {
        const res = await axios.post('/v4/upload-file-to-cloud', {
            data: form
        });
        console.log('apirequest ', res);
    } catch (error) {
        console.log(error);
    }
}