import OurCoursesSection from "./Components/OurCourses/OurCoursesSection";
import { CoursesIcons } from "./Components/CoursesIcons/CoursesIcons";
import { Header } from "./Components/Header/Header";
import { BenefitsSection } from "./Components/Benefits/BenefitsSection";

function App() {
  return (
    <div className="bg-light">
      <Header />
      <CoursesIcons />
      <BenefitsSection />
      <OurCoursesSection />
    </div>
  );
}

export default App;
