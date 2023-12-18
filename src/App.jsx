import OurCoursesSection from "./Components/OurCourses/OurCoursesSection";
import { CoursesIcons } from "./Components/CoursesIcons/CoursesIcons";
import { Header } from "./Components/Header/Header";
import { BenefitsSection } from "./Components/Benefits/BenefitsSection";
import { AskedQuestionsSection } from "./Components/AskedQuestions/AskedQuestionsSection";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./Context/GlobalContext";
import { ModalForSignIn } from "./Components/ModalForSignIn/ModalForSignIn";
import {Helmet} from "react-helmet";

function App() {
 
  return (<>
<Helmet>
        <title>YourCode</title>
        <meta name="description" content="Helmet application" />
    </Helmet>

  const { lang } = useContext(GlobalContext);
  console.log(lang, "lang");
  console.log("lang");
  useEffect(() => {
    return () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  }, []);
  return (
    <div className="bg-light">
      <Header />
      <CoursesIcons />
      <BenefitsSection />
      <OurCoursesSection />
      <AskedQuestionsSection />
      {/* <ModalForSignIn/> */}
    </div>
  </>
  );
}

export default App;
