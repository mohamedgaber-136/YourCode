import NavbarComp from "./Components/NavBar/Navbar";
import OurCoursesSection from "./Components/OurCourses/OurCoursesSection";
import { FooterBar } from "./Components/FooterBar/FooterBar";
import { CoursesIcons } from "./Components/CoursesIcons/CoursesIcons";
import { Header } from "./Components/Header/Header";
import SubNavBar from "./Components/SubNavBar/SubNavBar";
import { BenefitsSection } from "./Components/Benefits/BenefitsSection";

function App() {
  return (
    <div className="bg-light">
      <NavbarComp />
      <SubNavBar />
      <Header />
      <CoursesIcons />
      <BenefitsSection />
      <OurCoursesSection />
      <FooterBar />
    </div>
  );
}

export default App;
