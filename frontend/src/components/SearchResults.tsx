import React from 'react'
import { useParams, useNavigate } from 'react-router'
import axios from 'axios';
import useLoading from '../hooks/useLoading';
import GameData from '../interface/GameData';
import { Grid, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export default function SearchResults() {
    const [searchResult, setSearchResults] = React.useState<GameData[]>([]);
    const [numResults, setNumResults] = React.useState(0);
    const [pageNum, setPageNum] = React.useState(0);

    const { search } = useParams();
    const navigate = useNavigate()
    const { setContent, setError, setLoading, render } = useLoading()

    const getData = async (page: number) => {
        try {
            setLoading(true)
            const url = (`/api/game/?search=${encodeURIComponent(search as string)}&page=${page}`)
            const response = await axios.get(url)
            setSearchResults(response.data.results)
            setNumResults(response.data.count)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setError(true)
            setLoading(false)
        }

    }


    React.useEffect(() => {
        getData(1)
    }, [])


    setContent(
        <Grid
            container
            spacing={2}
            sx={{
                padding: '2rem 2rem'
            }}
        >
            <Grid item xs={12}>
                <Typography variant="h3">
                    Number of Results {numResults}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <DataGrid
                    autoHeight
                    onRowClick={(rowDetails) => {
                        navigate(`/game/${rowDetails.id}`)
                    }}
                    pagination
                    pageSize={100}
                    rowCount={numResults}
                    paginationMode="server"
                    page={pageNum}
                    onPageChange={async (page) => {
                        setPageNum(page)
                        getData(page + 1)
                    }}
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
                            headerName: 'Date Released',
                            field: 'date_released',
                            flex: 1,
                        },
                        {
                            headerName: 'Copy Sold',
                            field: 'copies_sold',
                            flex: 1,
                        }
                    ]}
                    rows={searchResult}
                />
            </Grid>
        </Grid>
    )

    return render();
}
