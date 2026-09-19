import { NavBar } from "./src/components/NavBar";
import { Route, Routes } from "react-router";
import { HomePage } from "./src/pages/HomePage";
import { AboutPage } from "./src/pages/AboutPage";
import { ProgramPage } from "./src/pages/ProgramsPage";
import { Contact } from "./src/pages/Contact";
import { Login } from "./src/pages/Login";
import AdminProtectedRoute from "./src/components/AdminProtectedRoute";
import { TuitionandEnrollment } from "./src/pages/TutionandEnrollmentPage";
import { SignUp } from "./src/pages/SignUp";
import { ParentPortal } from "./src/pages/ParentPortal";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { loginSuccess } from "./src/slices/userSlice";
import AdminPortal from "./src/pages/AdminPortal";
import ProtectedRoute from "./src/components/ProtectedRoute";

function App() {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const restore = async () => {
      try {
        const res = await fetch("/api/v1/users/me");
        if (res.ok) {
          const user = await res.json();
          dispatch(loginSuccess({ name: user.name, role: user.role }));
        }
      } catch (err) {
        console.error(err.message);
      } finally {
        setChecking(false);
      }
    };
    restore();
  }, [dispatch]);

  if (checking) return <p>Loading...</p>;
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
        <Route path="/tuitionandenrollment" element={<TuitionandEnrollment />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/parentportal" element={<ParentPortal />}></Route>
          <Route element={<AdminProtectedRoute />}>
            <Route path="/admin" element={<AdminPortal />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
