import React from 'react'
import Cookies from 'js-cookie'

const Nav = props => {
  const handleSignOut = e => {
    e.preventDefault()
    Object.keys(Cookies.get()).forEach(function(cookieName) {
      Cookies.remove(cookieName);
    });
    window.location.href = '/'
  }

  return(
    <nav>
      <div className='nav-container'>
        <a href='/'>Home</a>
        {Cookies.get('token') ? <p onClick={handleSignOut}>Sign Out</p> : <a href='/signin'>Sign In</a>}
        {/* <a href='/signup'>Get Started</a> */}
      </div>
    </nav>
  )
}

export default Nav