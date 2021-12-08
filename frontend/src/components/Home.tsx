import React, {useState} from 'react'
import { Button, Grid, TextField } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import people from './logo.png'

import "./styles.css"
import { useNavigate } from 'react-router'

export default function Home() {
    const [input, setInput] = useState('');

    const navigate = useNavigate()

    return (
        <Grid sx={{
            padding: '3rem 3rem'
        }} container spacing={2}>
            <Grid container justifyContent="center" item xs={12}>
                <img className="imageHeight" src={people} alt="Logo" />
            </Grid>
            <Grid item xs={10}>
                <TextField fullWidth value={input} onChange={(event) => setInput(event.target.value)} label="Search" />
            </Grid>
            <Grid item container justifyContent="center" xs={2}>
                <Button variant="contained" onClick={() => navigate(`/search/${encodeURIComponent(input)}`)}>
                    Search
                </Button>
            </Grid>
        </Grid>
    )
}
