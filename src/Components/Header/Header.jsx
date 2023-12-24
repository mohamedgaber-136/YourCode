import React, { useContext } from "react";
import "./header.css";
import { GlobalContext } from "../../Context/GlobalContext";
export const Header = () => {
  const { trans, checkLang } = useContext(GlobalContext);
  return (
    <>
      <header className="  d-flex justify-content-center align-items-center headerParent ">
        <div className="headerChild">
          <div
            dir={checkLang ? "ltr" : "rtl"}
            className="d-flex justify-content-center align-items-center gap-3 "
          >
            <i className="fa-solid fa-bolt  bg-white p-2 rounded-circle"></i>
            <h2 className="m-0 text-center text-white">
              <span className="textUnlock">{trans("Header.colored")}</span>{" "}
              {trans("Header.first")}
            </h2>
          </div>
          <h5 className="m-0 text-center text-white">{trans("Header.second")}</h5>
          <h6 className="m-0 text-center text-white">{trans("Header.third")} </h6>
          <div className="d-flex">
            <button className="btn  buttonsWithoutBorderRight">
              {trans("Header.explore")}
            </button>
            <button className="btn btn-dark buttonsWithoutBorderLeft ">
              {trans("Header.price")}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
