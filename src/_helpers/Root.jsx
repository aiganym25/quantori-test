import Header from "../components/Header/Header";
import LoginComponent from "../components/LoginComponent/LoginComponent";
import {Route, Routes} from "react-router-dom";
import routerProps from "./routerProps";
import Page404 from "../pages/Page404/Page404";
import Footer from "../components/Footer/Footer";
import React from "react";
import {useSelector} from "react-redux";
import {userModule} from "../components/LoginComponent/userDucks";
import {Box} from "@mui/material";
import MainHeader from "../components/MainHeader/MainHeader";

export default function Root() {
    const user = useSelector((state) => state[userModule].user);

    return user === null ? <div>
        <Header />
        <LoginComponent />
        <Routes>
            <Route {...routerProps.homePage} />
            <Route {...routerProps.homeSection} />
            <Route {...routerProps.aboutSection} />
            <Route {...routerProps.contactSection} />
            <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
    </div> : <Box sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "darkgrey"
    }}>
        <MainHeader/>
        <Routes>
            <Route {...routerProps.mainPage} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    </Box>
}