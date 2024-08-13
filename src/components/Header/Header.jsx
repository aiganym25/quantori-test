import {
    StyledNav,
    StyleHeaderMenu,
    StyleHeaderMenuItem,
    StyledHeaderLogo,
    StyledHeaderWrapper,
    StyledHeader,
    StyledMenuIcon,
    MenuPhone, LoginButton
} from "./StyledHeader";
import { Link } from 'react-router-dom';
import {Avatar, Divider, Menu, MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import {setShowLogin} from "../../pages/LoginPage/userAccess/userDucks";

export default function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLoginButtonClick = () => {
        dispatch(setShowLogin(true));
    };

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
                            <StyledNav>
                                <StyleHeaderMenu>
                                    <StyleHeaderMenuItem>
                                        <a href="/#home">Home</a>
                                    </StyleHeaderMenuItem>
                                    <StyleHeaderMenuItem>
                                        <a href="/#contact">Contact</a>
                                    </StyleHeaderMenuItem>
                                    <StyleHeaderMenuItem>
                                        <a href="/#about">About</a>
                                    </StyleHeaderMenuItem>
                                </StyleHeaderMenu>
                            </StyledNav>
                            <StyledMenuIcon>
                                <MenuIcon onClick={handleClick} style={{color: '#31bfe1', fontSize: 35}}/>
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
                        <a href="/#home">Home</a>
                    </MenuItem>
                    <Divider/>
                    <MenuItem>
                        <a href="/#contact">Contact</a>
                    </MenuItem>
                    <Divider/>
                    <MenuItem>
                        <a href="/#about">About</a>
                    </MenuItem>
                    <Divider/>
                    <MenuItem>
                        <div onClick={handleLoginButtonClick}>Login</div>
                    </MenuItem>
                </Menu>
            </MenuPhone>
    </StyledHeader>
}