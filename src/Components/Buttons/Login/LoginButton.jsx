import React from 'react'
import './LoginButton.css'
export const LoginButton = ({text,color}) => {
  return (
<button className="button rounded-pill" style={{backgroundColor:color}}>
  {text}
</button>
  )
}
