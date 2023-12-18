import React, { useState } from 'react'
import { ProfileInput } from './ProfileInput'

export const ProfileData = () => {
const [disabled, setDisabled] =useState(true)
  const inputsData = [{
    type:'text',label:'FirstName',value:'mohamed'

  },{    type:'text',label:'LastName',value:'gaber'
},{    type:'text',label:'Date of Birth',value:'13-6-1996'
},{    type:'text',label:'Nationality',value:'Egyptian'
},{    type:'Password',label:'Password',value:'123456'
},{
  type:'text',label:'Gender',value:'Male'
},{
  type:'text',label:'Description' ,value:'I am frontend Developer'
}]
  return (
<form action="" onSubmit={(e)=>{e.preventDefault()}} className='b profileForm py-5 flex-column flex-md-row  flex-wrap w-100 d-flex gap-4 justify-content-center align-items-center'>
  {
    inputsData.map((item,ind)=>   <ProfileInput key={ind} item={item} disabled={disabled} />
    )
  }

<button type='button' onClick={()=>{if(disabled){
  setDisabled(false)
}else{
  setDisabled(true)
}}} className='EditeBtn bn54'> <span className="bn54span">{disabled?'edite':'save'}</span></button>
</form>  )
}
