import React from 'react'
import { GiCampCookingPot } from "react-icons/gi";


const Header = () => {
    return (
        <div className='header-container'>
            <head>
                <title>Sugguested Recipe's</title>
            </head>
            <header className='header'>
                <h1>A place for pasta lovers!</h1>
                <nav className='nav-bar'>
                    <a href='#icon'><GiCampCookingPot/></a>
                    <a href='#home'>Home</a>
                    <a href='#about'>About</a>
                    <a href='#cookbook'>My cookbook</a>
                </nav>
            </header>
            <main className='main-container'>
                <h2>Welcome to Pasta Craze!</h2>
                <p>This website is designed to intrigue those who's heart melts at the taste <br />
                    of a savory pasta that you selected within this list of mouth-watering recipes!
                </p>
                <img src='./pictures/yum-pasta.gif' alt='A girl enjoying pasta!' className='savory' />
            </main>
            <hr />

        </div>
    )
}

export default Header