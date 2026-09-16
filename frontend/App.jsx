import { NavBar } from "./src/components/NavBar";
import { Route, Routes } from "react-router";
import { HomePage } from "./src/pages/HomePage";
import { AboutPage } from "./src/pages/AboutPage";
import { ProgramPage } from "./src/pages/ProgramsPage";
import { Contact } from "./src/pages/Contact";
import { Login } from "./src/pages/Login";
import { TuitionandEnrollment } from "./src/pages/TutionandEnrollmentPage";
import { SignUp } from "./src/pages/SignUp";
import { ParentPortal } from "./src/pages/ParentPortal";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/programs" element={<ProgramPage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/parentportal" element={<ParentPortal />}></Route>
        <Route path="/tuitionandenrollment" element={<TuitionandEnrollment />}></Route>
      </Routes>
    </>
  );
}

export default App;
