import userReducer, {userModule} from "../pages/LoginPage/userAccess/userDucks";

const reducers = {
    [userModule]: userReducer,
};

export default reducers;
