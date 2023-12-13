import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import global_en from "./translations/en/global.json";
import global_ar from "./translations/ar/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./Pages/SignUp/SignUp.jsx";
import NavbarComp from "./Components/NavBar/Navbar.jsx";
import SubNavBar from "./Components/SubNavBar/SubNavBar.jsx";
import { FooterBar } from "./Components/FooterBar/FooterBar.jsx";
import { Login } from "./Pages/Login/Login.jsx";
import GlobalContextProvider from "./Context/GlobalContext.jsx";
i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    ar: {
      global: global_ar,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <NavbarComp />
        <SubNavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <FooterBar />
      </BrowserRouter>
    </I18nextProvider>
  </GlobalContextProvider>
);
