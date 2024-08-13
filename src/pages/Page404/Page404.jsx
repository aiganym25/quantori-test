import React from 'react';
import { CssBox } from './Page404Style.js';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Page404() {
    return (
        <CssBox>
            <div className="container">
                <div className="error">#404</div>
                <div className="oops">Oops</div>
                <div className="not-found">The page is not found</div>
                <Button
                    component={Link}
                    to={'/'}
                    variant="contained"
                    color="primary"
                >Home
                </Button>
            </div>
        </CssBox>
    );
}
