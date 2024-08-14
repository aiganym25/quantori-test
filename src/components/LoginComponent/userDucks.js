import { createReducer } from "@reduxjs/toolkit";
import axios from 'axios';

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

export const setUserInfo = (res) => async (dispatch) => {
    dispatch({
        type: SET_USER,
        payload: res
    });
    localStorage.setItem('token', res.token);
    localStorage.setItem('refreshToken', res.refreshToken);
}

export const clearUserInfo = () => async (dispatch) => {
    dispatch({
        type: SET_USER,
        payload: null
    });
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
}


export const login = ({ form, navigate }) => async (dispatch) => {
    let values = form.getValues();

    try {
        const response = await axios.post('https://dummyjson.com/auth/login', {
            username: values.username,
            password: values.password,
            expiresInMins: 30,
        }, {
            headers: { 'Content-Type': 'application/json' }
        });

        dispatch(setUserInfo(response.data));
        navigate('/main');
    } catch (error) {
        form.setError('username', {
            type: "custom",
            message: error.response ? error.response.data.message : error.message,
        });
    }
};