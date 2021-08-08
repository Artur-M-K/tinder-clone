import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>
            <img 
                src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-768x432.jpg" 
                alt="tinder" 
                className="header__logo"
                />
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large"/>
                </IconButton>
            
        </div>
    )
}

export default Header