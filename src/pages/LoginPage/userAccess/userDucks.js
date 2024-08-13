import { createReducer } from "@reduxjs/toolkit";

export const userModule = "user";
const SET_SHOW_LOGIN = `${userModule}/SHOW_LOGIN`;

const initialState = {
    showLogin: false,
};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(SET_SHOW_LOGIN, (state, action) => {
            console.log(action.payload)
            state.showLogin = action.payload;
        });
});

export const setShowLogin = (res) => async (dispatch) =>
    dispatch({
        type: SET_SHOW_LOGIN,
        payload: res
    });

export const login =
    ({ form, module, navigate, redirectPath }) =>
        async (dispatch) => {
            try {
                let values = form.getValues();
                values.module = module;
                console.log(values);
                // let { data } = await UserApi.login(values);
                // dispatch(setUser(data));
                // const response = await fetch('https://dummyjson.com/auth/login', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify({
                //
                //         username: 'emilys',
                //         password: 'emilyspass',
                //         expiresInMins: 30, // optional, defaults to 60
                //     })
                // });

               // if (navigate && redirectPath) navigate(redirectPath);
            } catch (error) {
               // setFormErrors(form, error);
               // handleError(error, i18next.t("userAccess_authError"));
            }
        };