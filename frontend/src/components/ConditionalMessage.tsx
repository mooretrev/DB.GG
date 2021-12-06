import React from 'react'
import { Grid, Typography } from '@mui/material';
import Theme from '../styles/Theme';

export interface GeneralErrorProp {
    conditional: boolean;
    message: string;
    onReset: () => void;
}

export default function ConditionalMessage({ onReset, conditional, message }: GeneralErrorProp) {
    const content = (
        <Grid container justifyContent="center">
            <Typography sx={{color: Theme.palette.error.main}} variant="body1">
                {message}
            </Typography>
        </Grid>
    )

    return conditional ? content : <div />;
}