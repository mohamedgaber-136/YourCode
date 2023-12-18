import React from "react";
import { Inputs } from "../../Components/Inputs/Inputs";
import Img from "./Leonardo_Diffusion_XL_software_Thinking_0.jpg";
import {useNavigate} from 'react-router-dom'
import {Helmet} from "react-helmet";

export const Login = () => {
  let navigator = useNavigate()
  const InputsDataNames = [
    {
      type: "text",
      span: "UserName Or Email",
    },
    {
      type: "password",
      span: "Password",
    },
  ];
  return (
    <>

<Helmet>
        <title>Login</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    <div className="d-flex justify-content-center align-items-center SignParent container">
      <div className="d-flex justify-content-center SignIn flex-column flex-md-row  ">
        <div className=" signImgParent">
          <img src={Img} alt="signInImage" />
        </div>

        <form className="form ">
          <p className="title">Login </p>
          <p className="message">Login and continue Your Journey </p>
          <div className="flex">
            {InputsDataNames.map((item, ind) => (
              <Inputs type={item.type} spanText={item.span} />
            ))}
          </div>

          <button className="submit" >Submit</button>
        </form>
      </div>
      <i className="fa-solid fa-xmark CloseForm" onClick={()=>{navigator('/')}}></i>
    </div>
    </>

  );
};
