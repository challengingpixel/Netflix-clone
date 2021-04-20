import { AppBar, Button, Toolbar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Logo from '../assets/Logo'
import {styles} from '../styles/NavStyle'
import Avatar from '../assets/Avatar'
import { useHistory } from 'react-router'

export default function Nav(props) {
    const classes = styles()
    const history = useHistory()
    const [show, handleShow] = useState(false)

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }
    useEffect(()=> {
        window.addEventListener("scroll", transitionNavBar)
        return ()=> window.removeEventListener("scroll", transitionNavBar)
    }, [])
    return (
        <>
            <AppBar 
                className={classes.root} 
                elevation={0} 
                color={show ? 'primary': 'transparent'}
                position="fixed">
                <Toolbar className="root__content">
                    {/* Logo */}
                    <Logo home={()=>history.push('/')}/>

                    {/* Avatar or Sign in button */}
                    {props.avatar ? <Avatar profile={()=>history.push('/profile')} size={30}/>: <Button onClick={props.signIn} size="small" disableElevation className="loginScreen__button">Sign in</Button>}
                </Toolbar>
            </AppBar>
        </>
    )
}
