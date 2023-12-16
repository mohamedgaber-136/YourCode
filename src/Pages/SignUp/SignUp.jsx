import React from "react";
import "./SignIn.css";
import { Inputs } from "../../Components/Inputs/Inputs";
import Img from "./Leonardo_Diffusion_XL_software_Thinking_2.jpg";
export const SignUp = () => {
  const InputsDataNames = [
    { type: "text", span: "FirstName" },
    { type: "text", span: "LastName" },
  ];
  const InputsDataPasswords = [
    { type: "password", span: "password" },
    { type: "password", span: "Confirm Password" },
  ];
  return (
    <div className="d-flex justify-content-center align-items-center SignParent">
      <div className="d-flex justify-content-center SignIn flex-column flex-md-row  ">
        <div className=" signImgParent">
          <img src={Img} alt="signInImage" />
        </div>
        <form
          className="form "
         
        >
          <p className="title">Register </p>
          <p className="message">Signup now and get full access to our app. </p>
          <div className="flex">
            {InputsDataNames.map((item, ind) => (
              <Inputs key={ind} type={item.type} spanText={item.span} />
            ))}
          </div>
          <label>
            <input type="email" class="input" />
            <span className="text-dark">Email</span>
          </label>
          <div className="flex"></div>
          {InputsDataPasswords.map((item, ind) => (
            <Inputs type={item.type} spanText={item.span} />
          ))}
          <button className="submit">Submit</button>
          <p className="signin">
            Already have an acount ? <a href="#">Signin</a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};
