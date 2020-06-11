import React from 'react'
import _ from 'lodash'

const Form = props => {
  const {list} = props

  const handleOnChange = e => {
    props.handleOnChange(e)
  }

  return(
    <div>
      {list != undefined && (
        <div>{list.map(l => {
          if (l.type == 'textarea') {
            return (
              <textarea 
                className='input-textarea' 
                placeholder={l.placeholder}
                key={l.key} 
                name={l.key} 
                value={l.value} 
                onChange={handleOnChange}></textarea>
            )
          } 
          else if (l.type == 'dropdown') {
            return(
              <div key={l.key} className='input-form-container'>
                <label>{l.label}</label>
                <div className="select">
                  <select name={l.key} onChange={handleOnChange}>
                    <option defaultValue disabled>{l.placeholder}</option>
                    {_.range(0, l.options.length).map(value => (
                      <option key={`${l.key}-${value}`}>{l.options[value]}</option>
                    ))}
                  </select>
                </div>
              </div>
            )
          }
          else {
            return (
              <div key={l.key} className='input-form-container'>
                <label>{l.label}</label>
                <input 
                  className='input-form'
                  type={l.type}
                  placeholder={l.placeholder}
                  value={l.value}
                  name={l.key}
                  maxLength={l.maxLength == undefined ? null : l.maxLength}
                  onChange={handleOnChange}
                  disabled={l.disabled ? true : false}
                />
              </div>
            )
          }
        })}</div>
      )}
    </div>
  )
}

export default Form