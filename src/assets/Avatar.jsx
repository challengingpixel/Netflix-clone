import React from 'react'

export default function Avatar(props) {
    return (
        <img onClick={props.profile} style={{width: `${props.size}px`, height: `${props.size}px`, cursor:'pointer'}} src="/NetflixAvatar.png" alt=""/>
    );
}