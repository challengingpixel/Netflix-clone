import { Box, Button, Paper, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import {styles} from '../styles/BannerStyle'
import axios from '../axios'
import requests from '../Requests'

export default function Banner() {
    const classes = styles()
    const [movie, setMovie] = useState([])

    useEffect(()=> {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            )
            return request
        }
        fetchData()
    }, [])

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + '...': string
    }
    return (
        <Paper 
            className={classes.banner}
            elevation={0}
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center"
            }}>
            <Box className={classes.bannerContent}>
                <Typography variant="h4" className="banner__title">{movie?.title || movie?.name || movie?.original_name}</Typography>
                <Box className="banner__buttons">
                    <Button variant="contained" className="banner__button">Play</Button>
                    <Button variant="contained" className="banner__button">My List</Button>
                </Box>
                <Typography variant="subtitle1" className="banner__description">{truncate(movie?.overview, 150)}</Typography>
            </Box>
            {/* Bootom banner fade */}
            <div className="banner--fadeBottom"/>
        </Paper>
    )
}
