import userReducer, {userModule} from "../pages/LoginPage/userDucks";
import headerReducer, {headerModule} from "../components/Header/headerDucks";

const reducers = {
    [userModule]: userReducer,
    [headerModule]: headerReducer,
};

export default reducers;
