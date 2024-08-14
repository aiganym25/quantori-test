import { IconButton, Typography} from "@mui/material";
import {LoginWrapper, TextFieldStyled, InputStyled, OutlinedButton, LoginButton} from "./StyledLoginComponent";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import { Controller, useForm } from 'react-hook-form';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login, setShowLogin, userModule} from "./userDucks";
import {fieldToProps} from "../../_helpers/formHooks";
import { useNavigate } from 'react-router-dom';

export default function LoginComponent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const form = useForm({
        mode: 'all',
        shouldUnregister: true,
    });
    const [showPass, setShowPass] = useState(false);
    const showLogin = useSelector((state) => state[userModule].showLogin);

    const onSubmit = () => {
        dispatch(login({ form, navigate }));

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
                    render={(fieldProps) => (
                        <TextFieldStyled
                            placeholder='Email'
                            fullWidth
                            {...fieldToProps(fieldProps)}
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
                    render={(fieldProps) => (
                        <TextFieldStyled
                            type={showPass ? 'text' : 'password'}
                            placeholder='Password'
                            margin="normal"
                            fullWidth
                            {...fieldToProps(fieldProps)}
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
                    <OutlinedButton onClick = {handleCloseButton}>Cancel</OutlinedButton>
                    <LoginButton type="submit" onClick = {onSubmit}>Login</LoginButton>
                </div>

            </form>
        </div>

    </LoginWrapper>
}