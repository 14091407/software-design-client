import React, { useState } from 'react'
import Form from '../components/form'
import _ from 'lodash'

const Exposures = props => {
  const {list} = props
  const [status, setStatus] = useState(false)
  const [data, setData] = useState('')

  const onChangeStatusTrue = e => {
    e.preventDefault()
    setStatus(true)
  }

  const onChangeStatusFalse = e => {
    e.preventDefault()
    setStatus(false)
  }

  const handleOnChange = e => {
    const {name, value} = e.target
    setData(value)
  }

  const onSubmit = e => {
    e.preventDefault()
    if (data == '') return
    props.handleOnChange(data)
    setData('')
    setStatus(false)
  }

  const removeList = (e, index) => {
    e.preventDefault()
    props.handleRemove(index)
  }

  return(
    <div>
      <div className='add-list-header'>
        <h3>Exposures</h3>
        <button onClick={onChangeStatusTrue}>Add</button>
      </div>
      {list != undefined && list.length > 0 && (
        <div>
          {_.range(0, list.length).map(value => (
            <div key={`exposures-list-${value}`} className='exposures-list'>
              <p>{list[value]}</p>
              <button onClick={(e) => removeList(e, value)}>Remove</button>
            </div>
          ))}
        </div>
      )}
      {status && (
        <div>
          <Form list={[
            {type: 'number', placeholder: 'Add Exposures', value: data, set: 'Data', key: 'exposures-form-setData'},
          ]} handleOnChange={handleOnChange}/>
          <div className='add-button-container'>
            <button onClick={onSubmit}>Save</button>
            <button onClick={onChangeStatusFalse}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Exposures