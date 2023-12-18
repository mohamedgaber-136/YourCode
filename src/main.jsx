import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import global_en from "./translations/en/global.json";
import global_ar from "./translations/ar/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { createBrowserRouter,createRoutesFromElements, Routes, Route, RouterProvider } from "react-router-dom";
import { SignUp } from "./Pages/SignUp/SignUp.jsx";
import NavbarComp from "./Components/NavBar/Navbar.jsx";
import SubNavBar from "./Components/SubNavBar/SubNavBar.jsx";
import { FooterBar } from "./Components/FooterBar/FooterBar.jsx";
import { Login } from "./Pages/Login/Login.jsx";
import GlobalContextProvider from "./Context/GlobalContext.jsx";
import { CheckNavBar } from "./Components/CheckNavBar/CheckNavBar.jsx";
import { MainProfile } from "./Pages/Profile/MainProfile/MainProfile.jsx";
import { CheckFooter } from "./Components/CheckFooter/CheckFooter.jsx";
import { ExploreContent } from "./Pages/ExploreContent/ExploreContent.jsx";
import { FavouriteCourses } from "./Pages/Profile/FavouriteCourses/FavouriteCourses.jsx";
import { RootLayout } from "./Layout/RootLayout.jsx";
import { ProfileData } from "./Pages/Profile/ProfileData/ProfileData.jsx";
import { SavedQuestions } from "./Pages/Profile/savedQuestions/SavedQuestions.jsx";
import { QuizInfo } from "./Pages/Profile/QuizeInfo/QuizInfo.jsx";
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
const router = createBrowserRouter(
  createRoutesFromElements(
   
  <Route path="/" element={<RootLayout/>}>
    <Route index element={<App />} />
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/MainProfile" element={<MainProfile />} >
      <Route path="profileData" element={ <ProfileData/>} />
      <Route path="SavedQuestions" element={<SavedQuestions/>}/>
      <Route path="FavouriteCourses" element={<FavouriteCourses/>}/>
      <Route path="QuizesInfo" element={<QuizInfo/>}/>
    </Route>
    <Route path="/Explore/:content/:section" element={<ExploreContent/>} />
  </Route>

  )
)
ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18next}>
    <GlobalContextProvider>
     <RouterProvider router={router}/>
    </GlobalContextProvider>  
    </I18nextProvider>
);
