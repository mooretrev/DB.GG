import React from 'react'
import { Grid, TextField } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

export default function Home() {
    return (
        <Grid sx={{
           padding: '3rem 3rem' 
        }} container spacing={2}>
            <Grid item xs={12}>
                <TextField fullWidth variant="outlined" label="Search" />
            </Grid>
            <Grid item xs={12}>
                <DataGrid 
                sx={{
                    
                }}
                autoHeight
                columns={[
                    {
                        headerName: 'Name',
                        field: 'name',
                        flex: 2,
                    },
                    {
                        headerName: 'Description',
                        field: 'description',
                        flex: 4,
                    },
                    {
                        headerName: 'Copy Sold',
                        field: 'copies_sold',
                        flex: 1,
                    }
                ]}
                rows={[{
                    id: 1,
                    name: 'Halo Infinity',
                    description: 'A lovely fps',
                    copies_sold: 1000000,
                }]}
                 />
            </Grid>
        </Grid>
    )
}
