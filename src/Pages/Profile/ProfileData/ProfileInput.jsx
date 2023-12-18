import React from 'react'
import './InputProfile.css'
export const ProfileInput = ({item,disabled}) => {
  return (
<div className="input-group">
  <input  type={item.type} name={item.label} autocomplete="off" className={disabled?"input":"enabled"} defaultValue={item.value} disabled={disabled}/>
  <label className="user-label">{item.label}</label>
</div>  )
}
