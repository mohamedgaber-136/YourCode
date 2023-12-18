import React from 'react'
import './FavouriteCard.css'
export const FavouriteCard = () => {
  return (
<div className="card">
        <div className="profile-pic">
            <img src="/src/assets/CourseImage_6.png" alt="CourseImg" />        
        </div>
        <div className="bottom  d-flex justify-content-center align-align-items-center  ">
            <div className="content">
                <span className="name">UI-UX</span>
                <span className="about-me">Lorem ipsum dolor sit amet consectetur adipisicinFcls </span>
            </div>
           <div class="bottom-bottom  d-flex justify-content-center align-align-items-center ">
         
            <button className="button text-dark">Continue</button>
           </div>
        </div>
    </div>  )
}
