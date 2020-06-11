import React from 'react'

const Card = props => {
  const {list} = props

  return(
    <div className='grid'>
      {list != undefined && list.map(l => (
        <a key={l.key} href={l.href} className='card'>
          <h3>{`${l.label}`} &rarr;</h3>
          <p>{l.description}</p>
        </a>
      ))}
    </div>
  )
}

export default Card