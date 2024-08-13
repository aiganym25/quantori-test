import { createReducer } from "@reduxjs/toolkit";

export const userModule = "user";
const SET_SHOW_LOGIN = `${userModule}/SHOW_LOGIN`;
const SET_USER = `${userModule}/SHOW_USER`;

const initialState = {
    showLogin: false,
    user: null
};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(SET_SHOW_LOGIN, (state, action) => {
            state.showLogin = action.payload;
        })
        .addCase(SET_USER, (state, action) => {
            state.user = action.payload;
        });
});

export const setShowLogin = (res) => async (dispatch) =>
    dispatch({
        type: SET_SHOW_LOGIN,
        payload: res
    });

export const setUserInfo = (res) => async (dispatch) =>
    dispatch({
        type: SET_USER,
        payload: res
    });


export const login =  ({ form, navigate }) => async (dispatch) => {
    let values = form.getValues();
    await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: values.username,
            password: values.password,
            expiresInMins: 30,
        })
    }).then(async (response) => {
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Something went wrong!');
        }
        navigate('/main');
        dispatch(setUserInfo(response.json));
        return response.json();
    }).catch((error) => {
        form.setError('username', {
            type: "custom",
            message: error.message,
        })
    });
};