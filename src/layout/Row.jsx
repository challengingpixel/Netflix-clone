import { Box, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import axios from '../axios'
import {styles} from '../styles/RowStyle'
import clsx from "clsx";

export default function Row({fetchUrl, isLargeRow, title}) {
    const classes = styles()
    const [movies, setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/"
    useEffect(()=> {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    },[fetchUrl])
    return (
        <Box className={classes.row}>
            <Typography align="left" className="row__title" variant="h5">{title}</Typography>
            <Box spacing={2} className="row__posters">
                {movies.map((movie) => (
                    (isLargeRow && movie.poster_path) || 
                    (!isLargeRow && movie.backdrop_path)) && (
                        <img className={clsx('row__poster', isLargeRow && 'row__posterLarge')}
                        key={movie.id}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name}></img>
                    )
                )}
            </Box>
        </Box>
    )
}
