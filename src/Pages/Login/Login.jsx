import React from "react";
import { Inputs } from "../../Components/Inputs/Inputs";
import Img from "./Leonardo_Diffusion_XL_software_Thinking_0.jpg";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";

export const Login = () => {
  let navigator = useNavigate();
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

  const logInData = (e) => {
    e.preventDefault();
    const user = {
      Email: e.target[0].value,
      password: e.target[1].value,
    };
    sendUserData(user);
  };

  const sendUserData = async (user) => {
    const apiRequest = "http://localhost:4000/users/LogIn";
    await axios
      .post(apiRequest, user, {
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        console.log("success To log in ");
      });
  };

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

          <form className="form " onSubmit={logInData}>
            <p className="title">Login </p>
            <p className="message">Login and continue Your Journey </p>
            <div className="flex">
              {InputsDataNames.map((item, ind) => (
                <Inputs type={item.type} spanText={item.span} />
              ))}
            </div>

            <button className="submit">Submit</button>
          </form>
        </div>
        <i
          className="fa-solid fa-xmark CloseForm"
          onClick={() => {
            navigator("/");
          }}
        ></i>
      </div>
    </>
  );
};
