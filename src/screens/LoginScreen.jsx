import { Box, Button, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import Nav from '../layout/Nav'
import {styles} from '../styles/LoginScreenStyle'
import SignUpScreen from './SignUpScreen'

export default function LoginScreen() {
    const classes = styles()
    const [signIn, setSignIn] = useState(false)

    return (
        <div className={classes.loginScreen}>
            <Box component="div" className="loginScreen__background">
                <Nav signIn={()=>setSignIn(true)}/>
                <div className="loginScreen__gradient">
                    <div className="loginScreen__body">
                        {signIn ? (
                        <SignUpScreen/>
                        ): (
                        <>
                            <Typography variant="h3">Unlimited films, TV programmes and more.</Typography>
                    
                            <Typography variant="h5">Watch anywhere. Cancel at any time.</Typography>
                    
                            <Typography variant="h6">
                                Ready to watch? Enter your email to create or restart your membership. 
                            </Typography>
                    
                            <div className={classes.loginScreenInput}>
                                <form className="loginScreen__form">
                                    <TextField 
                                        type="email" 
                                        placeholder="Email address"
                                        variant="outlined"
                                        margin="dense"
                                    />
                                    <Button 
                                        className="loginScreen__button"
                                        onClick={()=> setSignIn(true)}>
                                        GET STARTED
                                    </Button>
                                </form>
                            </div>
                        </>)}
                    </div>
                </div>
            </Box>
        </div>
    )
}
