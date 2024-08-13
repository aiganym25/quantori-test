import Header from "../components/Header/Header";
import LoginPage from "../pages/LoginPage/LoginPage";
import {Route, Routes} from "react-router-dom";
import routerProps from "./routerProps";
import Page404 from "../pages/Page404/Page404";
import Footer from "../components/Footer/Footer";
import React from "react";
import {useSelector} from "react-redux";
import {userModule} from "../pages/LoginPage/userDucks";
import {Box} from "@mui/material";

export default function Root() {
    const user = useSelector((state) => state[userModule].user);

    return user === null ? <div>
        <Header />
        <LoginPage />
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
        aligItems: "center",
        backgroundColor: "darkgrey"
    }}>
        <Routes>
            <Route {...routerProps.mainPage} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    </Box>
}