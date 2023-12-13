import OurCoursesSection from "./Components/OurCourses/OurCoursesSection";
import { CoursesIcons } from "./Components/CoursesIcons/CoursesIcons";
import { Header } from "./Components/Header/Header";
import { BenefitsSection } from "./Components/Benefits/BenefitsSection";
import { AskedQuestionsSection } from "./Components/AskedQuestions/AskedQuestionsSection";
import { useContext } from "react";
import { GlobalContext } from "./Context/GlobalContext";
import { ModalForSignIn } from "./Components/ModalForSignIn/ModalForSignIn";

function App() {
  const { lang } = useContext(GlobalContext);
  console.log(lang, "lang");
  console.log("lang");
  return (
    <div className="bg-light">
      <Header />
      <CoursesIcons />
      <BenefitsSection />
      <OurCoursesSection />
      <AskedQuestionsSection />
      <ModalForSignIn/>
    </div>
  );
}

export default App;
