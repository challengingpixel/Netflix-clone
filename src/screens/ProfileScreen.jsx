import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'
import { selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux'
import { auth } from '../firebase'
import {styles} from '../styles/ProfileScreenStyle'
import Nav from '../layout/Nav'
import Avatar from '../assets/Avatar'

export default function ProfileScreen() {
    const classes = styles()
    const user = useSelector(selectUser)
    return (
        <Box className={classes.profileScreen}>
            <Nav/>
            <Box className={classes.profileScreenBody}>
                <Typography className="profileScreen__title" variant="h2">Edit Profile</Typography>
                <Box className="profileScreen__info">
                    <Avatar size={100}/>
                    <Box className="profileScreen__details">
                        <Typography variant="h6" className="profileScreen__user">{user.email}</Typography>
                        <Box className="profileScreen__plans">
                            <Typography className="profileScreen__plans__title" variant="h6">Plans</Typography>
                            <Button 
                                className="profileScreen__signOut"
                                type="submit"
                                color="secondary"
                                variant="contained"
                                size="large"
                                fullWidth
                                disableElevation
                                onClick={() => auth.signOut()}>
                                Sign Out
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
