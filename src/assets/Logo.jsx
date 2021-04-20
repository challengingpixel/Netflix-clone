import React from 'react'

export default function Logo(props) {
    return (
        <img onClick={props.home} style={{width: 150, cursor:"pointer"}} src="/Netflix_logo.png" alt=""/>
    );
}