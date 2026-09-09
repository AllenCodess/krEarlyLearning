import { NavBar } from "./src/components/NavBar";
import { Route, Routes } from "react-router";
import { HomePage } from "./src/pages/HomePage";
import { AboutPage } from "./src/pages/AboutPage";
import { ProgramPage } from "./src/pages/ProgramsPage";
import { TuitionandEnrollment } from "./src/pages/TutionandEnrollmentPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/programs" element={<ProgramPage />}></Route>
        <Route path="/tuitionandenrollment" element={<TuitionandEnrollment />}></Route>
      </Routes>
    </>
  );
}

export default App;
