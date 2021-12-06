import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { CircularProgress, Divider, Grid, Typography, } from '@mui/material'
import theme from '../styles/Theme'
import GameData from '../interface/GameData'

import "./gameDetail.css"

export default function GameDetail() {
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState('')
    const [gameData, setGameData] = React.useState<GameData | undefined>(undefined);


    const { id } = useParams();

    React.useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true)
                const response = await axios.get<GameData>(`/api/game/${id}/`)
                setGameData(response.data)
                setLoading(false)

            } catch (error) {
                setError('There was an error loading the game data.')
                setLoading(false)
            }
        }
        getData()
    }, [id])

    const content = (
        <Grid
            container
            spacing={2}
            sx={{
                padding: '0px 150px'
            }}
        >
            <Grid container justifyContent="center" xs={12}>
                <img
                    className="coverart"
                    src={gameData?.coverart}
                    alt="Coverart"
                />
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h2">
                    {gameData?.name}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">
                    {gameData?.description}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">
                    Copies Sold: {gameData?.copies_sold}
                </Typography>
            </Grid>

        </Grid>

    )
    return (
        <>
            { !loading && error === '' && content}
            { loading && <Grid container justifyContent="center"><CircularProgress /></Grid>}
            {error !== '' && (
                <Grid container justifyContent="center">
                    <Typography
                        sx={{
                            color: theme.palette.error.main
                        }}
                        variant="body1">{error}</Typography>
                </Grid>
            )}
        </>
    )
}
