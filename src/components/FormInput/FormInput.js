import React from 'react'
import './FormInput.scss'

const FormInput = (props) => (
  <div className='group'>
    <input className='form-input' name={props.name} onChange={props.handleChange} type={props.type} value={props.value} />
    {props.label && props.value.length>0 && 
      <label className='shrink form-input-label'>{props.label}</label>
    }
    {props.label && props.value.length===0 &&
      <label className='form-input-label'>{props.label}</label>
    }
    {props.label===null &&
      null
    }
   </div>
)

export default FormInput