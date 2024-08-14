import {MainPageWrapper} from "./StyledMainPage";
import {Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {userModule} from "../../components/LoginComponent/userDucks";

export default function MainPage() {
    const user = useSelector((state) => state[userModule].user);

    return <MainPageWrapper>
        <Typography variant = "h4">{`Congratulations, ${user.firstName} ${user.lastName}!`}</Typography>
        <Typography variant = "h4">You have successfully logged in</Typography>

    </MainPageWrapper>
}