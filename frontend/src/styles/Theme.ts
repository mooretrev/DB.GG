import { createTheme } from '@mui/material'

export const yellowColor = '#efad28'

export default createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#474747',
            paper: '#474747',
        },
        primary: {
            main: yellowColor,
        },
    }
})
