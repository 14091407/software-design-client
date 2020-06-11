import React, { useState } from 'react'
import Form from '../components/form'
import _ from 'lodash'

const ObservingProgramFilter = props => {
  const {list} = props
  const [status, setStatus] = useState(false)
  const [data, setData] = useState({
    make: '',
    model: '',
    manufacturer: '',
    year: '',
    size: '',
    weight: '' 
  })

  const onChangeStatusTrue = e => {
    e.preventDefault()
    setStatus(true)
  }

  const onChangeStatusFalse = e => {
    e.preventDefault()
    setStatus(false)
  }

  const handleObjectChange = e => {
    const { name, value } = e.target
    const split = name.split('observing-program-filter-form-')
    const split2 = split[1].split('.')
    const split3 = split2[0].split('set')
    eval(split2[0])({
      ...eval(lowercaseFirstLetter(split3[1])),
      [split2[1]]: value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    if (data.make == '' || data.model == '' || data.manufacturer == '' || data.year == '' || data.size == '' || data.weight =='') return
    props.handleOnChange({
      ...data,
      size: parseFloat(data.size),
      weight: parseFloat(data.weight)
    })
    setData({
      make: '',
      model: '',
      manufacturer: '',
      year: '',
      size: '',
      weight: ''
    })
    setStatus(false)
  }

  const removeList = (e, index) => {
    e.preventDefault()
    props.handleRemove(index)
  }

  function lowercaseFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }

  const formInput = [
    {type: 'text', placeholder: 'Make', value: data.make, set: 'Data.make'},
    {type: 'text', placeholder: 'Model', value: data.model, set: 'Data.model'},
    {type: 'text', placeholder: 'Manufactuer', value: data.manufacturer, set: 'Data.manufacturer'},
    {type: 'date', placeholder: 'Year', value: data.year, set: 'Data.year', label: 'Year'},
    {type: 'number', placeholder: 'Size', value: data.size, set: 'Data.size'},
    {type: 'number', placeholder: 'Weight', value: data.weight, set: 'Data.weight'},
  ].map(o => {
    o.key = `observing-program-filter-form-set${o.set}`
    return o
  })

  return(
    <div>
      <div className='add-list-header'>
        <h3>Observing Program Filter</h3>
        <button onClick={onChangeStatusTrue}>Add</button>
      </div>
      {list != undefined && list.length > 0 && (
      <table><tbody>
        <tr>
          <th>Number</th>
          <th>Make</th>
          <th>Model</th>
          <th>Manufacturer</th>
          <th>Year</th>
          <th>Size</th>
          <th>Weight</th>
        </tr>
        {_.range(0, list.length).map(value => (
        <tr key={`special-equipment-${value}`}>
          <td>{value + 1}</td>
          <td>{list[value].make}</td>
          <td>{list[value].model}</td>
          <td>{list[value].manufacturer}</td>
          <td>{list[value].year}</td>
          <td>{list[value].size}</td>
          <td>{list[value].weight}</td>
          <td><button className='remove-button' onClick={(e) => removeList(e, value)}>Remove</button></td>
        </tr>
        ))}
      </tbody></table>
      )}
      {status && (
        <div>
          <Form list={formInput} handleOnChange={handleObjectChange}/>
          <div className='add-button-container'>
            <button onClick={onSubmit}>Save</button>
            <button onClick={onChangeStatusFalse}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ObservingProgramFilter