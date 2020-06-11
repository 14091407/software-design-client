import React from 'react'

const Nav = props => {
  return(
    <nav>
      <div className='nav-container'>
        <a href='/'>Home</a>
        <a href='/signin'>Sign In</a>
        {/* <a href='/signup'>Get Started</a> */}
      </div>
    </nav>
  )
}

export default Nav