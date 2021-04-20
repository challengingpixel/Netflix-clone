import { Box, Button, FormControl, Paper, TextField, Typography } from '@material-ui/core'
import React, { useRef } from 'react'
import { auth } from '../firebase'
import {styles} from '../styles/SignUpScreenStyle'

export default function SignUpScreen(props) {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const classes = styles()
    
    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=> {
            console.log(authUser)
        }).catch(error => {
            alert(error.message)
        })
    }

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=> {
            console.log(authUser)
        }).catch(error => {
            alert(error.message)
        })
    }
    return (
        <Paper className={classes.signUpScreen}>
            <FormControl>
                <Typography variant="h3" className="signUpScreen__title">
                    Sign in
                </Typography>
                <TextField
                    className="signUpScreen__input"
                    type="email" 
                    placeholder="Email"
                    variant="outlined"
                    margin="normal"
                    InputProps={{
                        style: {backgroundColor: '#fff', border: 0}
                    }}
                    inputRef={emailRef}
                />
                <TextField
                    className="signUpScreen__input"
                    type="password" 
                    placeholder="Password"
                    variant="outlined"
                    margin="normal"
                    InputProps={{
                        style: {backgroundColor: '#fff', border: 0}
                    }}
                    inputRef={passwordRef}
                />
                <Button
                    className="signUpScreen__button" 
                    type="submit"
                    color="secondary"
                    variant="contained"
                    size="large"
                    fullWidth
                    disableElevation
                    onClick={signIn}>
                    Sign in
                </Button>
                <Typography variant="overline" className="signUpScreen__overline">
                    New to Netflix?
                    <Box component="span" onClick={register}>
                        Sign up now.
                    </Box>
                </Typography>
            </FormControl>
        </Paper>
    )
}
