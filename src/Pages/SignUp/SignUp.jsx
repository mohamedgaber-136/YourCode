import React from "react";
import "./SignIn.css";
import { Inputs } from "../../Components/Inputs/Inputs";
import Img from "./Leonardo_Diffusion_XL_software_Thinking_2.jpg";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
export const SignUp = () => {
  let navigator = useNavigate();

  const InputsDataNames = [
    { type: "text", span: "FirstName" },
    { type: "text", span: "LastName" },
  ];
  const InputsDataPasswords = [
    { type: "password", span: "password" },
    { type: "password", span: "Confirm Password" },
  ];
  const UserData = (e) => {
    e.preventDefault();
    const user = {
      FirstName: e.target[0].value,
      LastName: e.target[1].value,
      Email: e.target[2].value,
      password: e.target[3].value,
    };
    sendUserData(user);
  };

  const sendUserData = async (user) => {
    const apiRequest = "http://localhost:4000/users/SignUp";
    await axios
      .post(apiRequest, user, {
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        console.log("success");
      });
  };

  return (
    <>
      <Helmet>
        <title>Signup</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="d-flex justify-content-center align-items-center SignParent container">
        <div className="d-flex justify-content-center SignIn flex-column flex-md-row  ">
          <div className=" signImgParent">
            <img src={Img} alt="signInImage" />
          </div>
          <form className="form " onSubmit={UserData}>
            <p className="title">Register </p>
            <p className="message">
              Signup now and get full access to our app.{" "}
            </p>
            <div className="flex">
              {InputsDataNames.map((item, ind) => (
                <Inputs key={ind} type={item.type} spanText={item.span} />
              ))}
            </div>
            <label>
              <input type="text" className="input" />
              <span className="text-dark">Email</span>
            </label>
            <div className="flex"></div>
            {InputsDataPasswords.map((item, ind) => (
              <Inputs type={item.type} spanText={item.span} />
            ))}
            <button className="submit">
              Submit
            </button>
            <p className="signin">
              Already have an acount ? <a href="/">Signin</a>{" "}
            </p>
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
