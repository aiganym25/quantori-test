import React from 'react';
import paths from './paths';
import HomeSection from "../pages/HomePage/sections/HomeSection/HomeSection";
import ContactSection from "../pages/HomePage/sections/ContactSection/ContactSection";
import AboutSection from "../pages/HomePage/sections/AboutSection/AboutSection";
import MainPage from "../pages/MainPage/MainPage";

const routerProps = {
    mainPage: {
        path: paths.MainPage,
        element: <MainPage />,
    },
    homePage: {
        path: paths.HomePage,
        element: <HomeSection />,
    },
    homeSection: {
        path: paths.HomeSection,
        element: <HomeSection/>,
    },
    contactSection: {
        path: paths.ContactSection,
        element: <ContactSection/>,
    },
    aboutSection: {
        path: paths.AboutSection,
        element: <AboutSection/>,
    },
};

export default routerProps;
