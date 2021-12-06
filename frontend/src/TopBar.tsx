import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { yellowColor } from './styles/Theme'
import Theme from './styles/Theme'

export default function TopBar() {
    return (
        <Grid container>
            <Grid item xs={6}>
            <Typography sx={{
                color: yellowColor,
                textShadow: `4px 4px ${Theme.palette.grey[900]}`,
            }} variant="h1">
                db.gg
            </Typography>
            </Grid>
            <Grid justifyContent="right" item container xs={6}>
                <Button 
                sx={{
                    marginRight: '4rem'
                }} variant="text">
                    Login
                </Button>
            </Grid>
        </Grid>
    )
}
