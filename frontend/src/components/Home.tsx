import React, {useState} from 'react'
import { Grid, TextField } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import people from './logo.png'

import "./styles.css"

export default function Home() {
    const [input, setInput] = useState(0);

    return (
        <Grid sx={{
            padding: '3rem 3rem'
        }} container spacing={2}>
            <Grid container justifyContent="center" item xs={12}>
                <img className="imageHeight" src={people} alt="Logo" />
            </Grid>
            <Grid item xs={12}>
                <SearchBar
                    onChange={(newInput) => setInput(newInput)}
                    onRequestSearch={() => '/game/api/?search=' + input}
                    />
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
