import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProgramPage } from "./pages/ProgramsPage";
import { TuitionandEnrollment } from "./pages/TutionandEnrollmentPage";

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
