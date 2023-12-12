import OurCoursesSection from "./Components/OurCourses/OurCoursesSection";
import { CoursesIcons } from "./Components/CoursesIcons/CoursesIcons";
import { Header } from "./Components/Header/Header";
import { BenefitsSection } from "./Components/Benefits/BenefitsSection";
import { AskedQuestionsSection } from "./Components/AskedQuestions/AskedQuestionsSection";

function App() {
  return (
    <div className="bg-light">
      <Header />
      <CoursesIcons />
      <BenefitsSection />
      <OurCoursesSection />
      <AskedQuestionsSection/>
    </div>
  );
}

export default App;
