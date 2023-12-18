import React from 'react'
import { IoPersonOutline,IoBookSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { RiQuestionnaireLine } from "react-icons/ri";
import { FaChartBar } from "react-icons/fa";

export const SidNavProfile = () => {
  return (
    <nav className="bg-dark ProfileNav d-flex  justify-content-center align-items-center">
    <ul className="d-flex flex-column justify-content-center gap-3 align-items-center">
      <li className='sidBarImg'><img src="./src/Components/NavBar/Leonardo_Diffusion_XL_logo_YourCodesoftwaremind_0-removebg.png" alt="logo" /></li>
      <li className="text-white" title={'Profile'}>
     <Link to={'profileData'}>
        <IoPersonOutline />
     </Link>
      </li>
      <li className="text-white" title={'YourCourses'}>
      <Link to={'FavouriteCourses'}>
      <IoBookSharp />
      </Link>
      </li>
      <li className="text-white">
        <Link to={'SavedQuestions'} title={'SavedQuestions'}>
      <RiQuestionnaireLine />
        </Link>
      </li>
      <li className="text-white">
        <Link to={'QuizesInfo'} title={'QuizesInfo'}>
      <FaChartBar />
        </Link>
      </li>
     
    </ul>
  </nav>  )
}
