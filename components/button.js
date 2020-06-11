import React from 'react'

const Button = props => {
  const {label} = props
  return(
    <div className='button-container'><button>{label}</button></div>
  )
}

export default Button