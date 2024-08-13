import { createReducer } from "@reduxjs/toolkit";

export const headerModule = "header";
const SET_HEADER_CONTENT = `${headerModule}/SET_HEADER_CONTENT`;

const initialState = {
    chosenHeaderContent: 'home',
};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(SET_HEADER_CONTENT, (state, action) => {
            state.chosenHeaderContent = action.payload;
        });
});

export const setHeaderContent = (res) => async (dispatch) =>
    dispatch({
        type: SET_HEADER_CONTENT,
        payload: res
    })