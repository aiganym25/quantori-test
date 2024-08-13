import {Typography} from "@mui/material";
import {StyledFooterWrapper} from "./StyledFooter";

export default function Footer() {
    return <StyledFooterWrapper>
        <Typography sx = {{position: 'absolute', right: "15px"}}>@ Copyright 2024</Typography>
    </StyledFooterWrapper>
}