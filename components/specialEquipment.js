import React, { useState } from 'react'
import Form from '../components/form'
import _ from 'lodash'

const SpecialEquipment = props => {
  const {list} = props
  const [status, setStatus] = useState(false)
  const [data, setData] = useState({
    equipmentName: '',
    ownerName: '',
    installedDate: ''
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
    const split = name.split('special-equipment-form-')
    const split2 = split[1].split('.')
    const split3 = split2[0].split('set')
    eval(split2[0])({
      ...eval(lowercaseFirstLetter(split3[1])),
      [split2[1]]: value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    if (data.equipmentName == '' || data.ownerName == '' || data.installedDate == '') return
    props.handleOnChange(data)
    setData({
      equipmentName: '',
      ownerName: '',
      installedDate: ''
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
    {type: 'text', placeholder: 'Equipments Name', value: data.equipmentName, set: 'Data.equipmentName'},
    {type: 'text', placeholder: 'Owner Name', value: data.ownerName, set: 'Data.ownerName'},
    {type: 'date', placeholder: 'Installed Date', value: data.installedDate, set: 'Data.installedDate', label: 'Installed Date'},
  ].map(o => {
    o.key = `special-equipment-form-set${o.set}`
    return o
  })

  return(
    <div>
      <div className='add-list-header'>
        <h3>Special Equipment</h3>
        <button onClick={onChangeStatusTrue}>Add</button>
      </div>
      {list != undefined && list.length > 0 && (
      <table><tbody>
        <tr>
          <th>Number</th>
          <th>Equipment name</th>
          <th>Owner name</th>
          <th>Installed date</th>
          <th></th>
        </tr>
        {_.range(0, list.length).map(value => (
        <tr key={`special-equipment-${value}`}>
          <td>{value + 1}</td>
          <td>{list[value].equipmentName}</td>
          <td>{list[value].ownerName}</td>
          <td>{list[value].installedDate}</td>
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

export default SpecialEquipment