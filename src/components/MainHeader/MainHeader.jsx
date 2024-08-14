import {StyledMainHeader, StyledMenuIcon} from "./StyledMainHeader";
import {Logout} from "@mui/icons-material";
import {clearUserInfo} from "../LoginComponent/userDucks";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export default function MainHeader() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogoutClick = () => {
        dispatch(clearUserInfo());
        navigate('/home');
    }

    return <StyledMainHeader>
        <StyledMenuIcon>
            <Logout onClick = {handleLogoutClick} style={{color: '#2d772d', fontSize: 25}}/>
        </StyledMenuIcon>
    </StyledMainHeader>
}