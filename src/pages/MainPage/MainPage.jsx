import {StyledMain} from "./StyledMainPage";
import HomeSection from "./sections/HomeSection/HomeSection";
import AboutSection from "./sections/AboutSection/AboutSection";
import ContactSection from "./sections/ContactSection/ContactSection";
import LoginPage from "../LoginPage/LoginPage";

export default function MainPage() {
    return <StyledMain>
        <HomeSection/>
        <AboutSection/>
        <ContactSection/>
        <LoginPage/>
    </StyledMain>
}