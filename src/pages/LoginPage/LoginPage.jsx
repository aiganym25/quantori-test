import { IconButton, Typography} from "@mui/material";
import {LoginWrapper, TextFieldStyled, InputStyled, OutlinedButton} from "./StyledLoginPage";
import {LoginButton} from "../../components/Header/StyledHeader";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import { Controller, useForm } from 'react-hook-form';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login, setShowLogin, userModule} from "./userAccess/userDucks";

export default function LoginPage() {
    const dispatch = useDispatch();

    const form = useForm({
        mode: 'all',
        shouldUnregister: true,
    });
    const [showPass, setShowPass] = useState(false);
    const showLogin = useSelector((state) => state[userModule].showLogin);

    const onSubmit = () => {
        dispatch(login({ form }));
    };
    const handleCloseButton = () => {
        dispatch(setShowLogin(false));
    };

    return showLogin && <LoginWrapper>
        <div className = "column">
            <div className="content-header">
                <Typography variant="h4" sx={{color: '#2d772d', fontWeight: 500}}>Login</Typography>
            </div>
            <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off">
                <Controller
                    control={form.control}
                    name={'username'}
                    defaultValue={''}
                    render={() => (
                        <TextFieldStyled
                            placeholder='Email'
                            fullWidth
                            InputProps={{
                                autoComplete: 'new-username',
                                form: {autoComplete: 'off'},
                            }}
                        >
                            <InputStyled/>
                        </TextFieldStyled>
                    )}
                />

                <Controller
                    control={form.control}
                    name={'password'}
                    defaultValue={''}
                    render={() => (
                        <TextFieldStyled
                            type={'password'}
                            placeholder='Password'
                            margin="normal"
                            fullWidth
                            InputProps={{
                                autoComplete: 'new-password',
                                endAdornment: (
                                    <IconButton style={{padding: 2}} onClick={() => setShowPass(!showPass)}>
                                        {showPass ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                ),
                            }}
                        >
                            <InputStyled autoComplete="off"/>
                        </TextFieldStyled>
                    )}
                />
                <div style = {{display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
                    <LoginButton onClick = {onSubmit}>Login</LoginButton>
                    <OutlinedButton onClick = {handleCloseButton}>Cancel</OutlinedButton>
                </div>

            </form>
        </div>

    </LoginWrapper>
}