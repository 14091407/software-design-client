import React, { useState, useEffect } from 'react'

const Hoc = WrappedComponent => () => {
  const [componentMount, setComponentMount] = useState(false)
  
  useEffect(() => {
    setComponentMount(true)
  }, [])
  
  return(
    <div>
      {componentMount && <WrappedComponent />}
    </div>
  )
}

export default Hoc