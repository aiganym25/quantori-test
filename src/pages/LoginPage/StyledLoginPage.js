import styled from "styled-components";
import {Card, TextField} from "@mui/material";

export const LoginWrapper = styled(Card)({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "32px 16px",
});

export const TextFieldStyled = styled(TextField)(() => ({
    color: '#C0C3CD',
    fontSize: '18px',
    fontWeight: '400',
    padding: 0,
    margin: 0,
    borderRadius: '20px',
    marginBottom: '15px',
    width: '100%',
    maxWidth: '100%',

}));

export const InputStyled = styled('input')(() => ({
    color: '#C0C3CD',
    fontSize: '18px',
    fontWeight: '400',
    height: '60px !important',
    borderRadius: '20px',
    margin: 0,
    paddingLeft: '5px',
    paddingRight: '5px',
    width: '100%',
    maxWidth: '100%',
}));

export const OutlinedButton = styled.button`
    background-color: #fff;
    border: 1px solid #2d772d;
    border-radius: 10px;
    color: #2d772d;
    font-size: 16px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-left: 15px;
    
    @media screen and (max-width: 700px) {
        display: none;
    }
    &:hover {
        background-color: rgba(45, 119, 45, 0.67);
    }
    &:focus {
        outline: none;
    }
`;
