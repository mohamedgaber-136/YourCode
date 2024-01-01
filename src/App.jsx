import OurCoursesSection from "./Components/OurCourses/OurCoursesSection";
import { CoursesIcons } from "./Components/CoursesIcons/CoursesIcons";
import { Header } from "./Components/Header/Header";
import { BenefitsSection } from "./Components/Benefits/BenefitsSection";
import { AskedQuestionsSection } from "./Components/AskedQuestions/AskedQuestionsSection";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./Context/GlobalContext";
import { ModalForSignIn } from "./Components/ModalForSignIn/ModalForSignIn";
import { Helmet } from "react-helmet";
import { QuizSection } from "./Components/QuizSection/QuizSection";
import { SectionTwo } from "./Components/SectionTwo/SectionTwo";
import { SectionFour } from "./Components/SectionFour/SectionFour";
import { SectionFive } from "./Components/SectionFive/SectionFive";
import { MobileDevelopSection } from "./Components/MobileDevelopSection/MobileDevelopSection";
import { SectionThree } from "./Components/SectionThree/SectionThree";

function App() {
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
    <>
      <Helmet>
        <title>YourCode</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="">
        <Header />
        <CoursesIcons />
        <BenefitsSection />
        <SectionFive />
        <SectionTwo />
        <SectionThree />
        {/* <SectionFour /> */}
        <MobileDevelopSection />
        <AskedQuestionsSection />
        <QuizSection />
        <OurCoursesSection />
        {/* <ModalForSignIn/> */} 
      </div>
    </>
  );
}

export default App;
