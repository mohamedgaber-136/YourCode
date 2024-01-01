import React from 'react'
import './QuizSection.css'
export const QuizSection = () => {
  return (
    <div className='QuizSectionParent d-flex justify-content-center align-items-center position-relative'>
         <div className="w-100 position-absolute top-0">
        <img src="./images/wave-haikei-dark.svg" width={"100%"} />
      </div>
        <div className="QuizChild d-flex">
        </div>
        </div>
  )
}
