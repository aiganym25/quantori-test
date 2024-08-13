import {
    StyledHeaderLogo,
    StyledHeaderWrapper,
    StyledHeader,
    StyledMenuIcon,
    MenuPhone, LoginButton, Content
} from "./StyledHeader";
import { Link } from 'react-router-dom';
import {Avatar, Divider, Menu, MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {setShowLogin} from "../../pages/LoginPage/userDucks";
import Button from "@mui/material/Button";
import {headerModule, setHeaderContent} from "./headerDucks";
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();
    const chosenHeaderContent = useSelector((state) => state[headerModule].chosenHeaderContent);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLoginButtonClick = () => {
        dispatch(setShowLogin(true));
    };

    const changeHeaderContent = (path) => {
        dispatch(setHeaderContent(path));
        navigate(path);
    }

    return <StyledHeader>
            <div className="container">
                <StyledHeaderWrapper>
                    <div className="space-between">
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <StyledHeaderLogo>
                                <Link to={'/'}>
                                    <Avatar src="/broken-image.jpg" sx={{backgroundColor: '#2d772d'}}/>
                                </Link>
                            </StyledHeaderLogo>
                            <Content>
                                <div className="choice">
                                    <Button
                                        className="choice-item-1"
                                        component="a"
                                        style={{
                                            backgroundColor: chosenHeaderContent === 'home' ? '#2d772d' : '#f1f2f5',
                                            color: chosenHeaderContent === 'home' ? "#fff" : '#2d772d',
                                        }}
                                        onClick={()=> changeHeaderContent('home')}
                                    >
                                        Home
                                    </Button>
                                    <Button
                                        className="choice-item-2"
                                        component="label"
                                        style={{
                                            backgroundColor:  chosenHeaderContent === 'contact' ? '#2d772d' :'#f1f2f5',
                                            color: chosenHeaderContent === 'contact' ? "#fff" : '#2d772d',
                                        }}
                                        onClick={()=> changeHeaderContent('contact')}
                                    >
                                        Contact
                                    </Button>
                                    <Button
                                        className="choice-item-3"
                                        component="label"
                                        style={{
                                            backgroundColor:  chosenHeaderContent === 'about' ? '#2d772d' :'#f1f2f5',
                                            color: chosenHeaderContent === 'about' ? "#fff" : '#2d772d',
                                        }}
                                        onClick={()=> changeHeaderContent('about')}
                                    >
                                        About
                                    </Button>
                                </div>
                            </Content>
                            <StyledMenuIcon>
                                <MenuIcon onClick={handleClick} style={{color: '#2d772d', fontSize: 35}}/>
                            </StyledMenuIcon>
                        </div>
                        <LoginButton onClick={handleLoginButtonClick}>Login</LoginButton>
                    </div>
                </StyledHeaderWrapper>
            </div>
            <MenuPhone>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            top: '80px !important',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.25))',
                            mt: 1.5,
                            mr: 2,
                            bgcolor: '#fff',
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: '#fff',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                    <MenuItem>
                        <a href="/home">Home</a>
                    </MenuItem>
                    <Divider/>
                    <MenuItem>
                        <a href="/contact">Contact</a>
                    </MenuItem>
                    <Divider/>
                    <MenuItem>
                        <a href="/about">About</a>
                    </MenuItem>
                    <Divider/>
                    <MenuItem>
                        <div onClick={handleLoginButtonClick}>Login</div>
                    </MenuItem>
                </Menu>
            </MenuPhone>
    </StyledHeader>
}