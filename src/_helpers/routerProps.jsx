import React from 'react';
import paths from './paths';
import MainPage from "../pages/MainPage/MainPage";

const routerProps = {
    homePage: {
        path: paths.MainPage,
        element: <MainPage />,
    },
};

export default routerProps;
