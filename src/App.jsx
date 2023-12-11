import { CoursesIcons } from "./Components/CoursesIcons/CoursesIcons";
import { Header } from "./Components/Header/Header";
import NavbarComp from "./Components/NavBar/Navbar";
import SubNavBar from "./Components/SubNavBar/SubNavBar";

function App() {
  return (
    <div className="bg-light">
      <NavbarComp />
      <SubNavBar />
      <Header />
      <CoursesIcons/>
    </div>
  );
}

export default App;
