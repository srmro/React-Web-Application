import React from 'react'

const NavBar = () => {
  return (
    <div>
            <nav className='nav-bar'>
                   <GiCampCookingPot/>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/cookbook'>My cookbook</Link>
                </nav>
    </div>
  )
}

export default NavBar