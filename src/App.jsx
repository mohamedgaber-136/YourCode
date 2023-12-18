import OurCoursesSection from "./Components/OurCourses/OurCoursesSection";
import { CoursesIcons } from "./Components/CoursesIcons/CoursesIcons";
import { Header } from "./Components/Header/Header";
import { BenefitsSection } from "./Components/Benefits/BenefitsSection";
import { AskedQuestionsSection } from "./Components/AskedQuestions/AskedQuestionsSection";
import { ModalForSignIn } from "./Components/ModalForSignIn/ModalForSignIn";
import {Helmet} from "react-helmet";

function App() {
 
  return (<>
<Helmet>
        <title>YourCode</title>
        <meta name="description" content="Helmet application" />
    </Helmet>

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
