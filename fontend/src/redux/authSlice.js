import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            currentUser: null,
            error: false,
            isFetching: false
        },
        company: {
            currentCompany: null,
            error: false,
        }
    },
    reducers: {
        loginStart: (state) => {
            state.user.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.user.currentUser = action.payload;
        },
        loginFailed: (state) => {
            state.user.error = true;
        },
        registerStart: (state) => {
            state.user.isFetching = true;
        },
        registerSuccess: (state) => {
            state.user.success = true;
        },
        registerFailed: (state) => {
            state.user.error = true;
        },
        logOut: (state) => {
            state.user.currentUser = null;
        },
        createCompnay: (state, action) => {
            state.company.currentCompany = action.payload;
            state.company.error = false;
        },
        createCompnayFailed: (state) => {
            state.company.error = true;
        }
    }
})

export const {
    loginStart,
    loginSuccess,
    loginFailed,
    registerStart,
    registerSuccess,
    registerFailed,
    createCompnay,
    logOut,
    createCompnayFailed
} = authSlice.actions;

export default authSlice.reducer;