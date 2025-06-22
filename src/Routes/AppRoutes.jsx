import { Route, Routes, HashRouter, Navigate } from "react-router-dom";
import Splash from "../pages/splash/Splash";
import Contact from "../pages/contact/Contact";
import Experience from "../pages/experience/Experience";
import Projects from "../pages/projects/Projects";
import Education from "../pages/education/Education";
import Home from "../pages/home/Home";
export default function AppRoutes(propss) {
    return (
        <div>
            <HashRouter basename="/">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Splash theme={propss.theme} setTheme={propss.setTheme} />
                        }
                    />
                    <Route
                        path="/home"
                        element={
                            <Home theme={propss.theme} setTheme={propss.setTheme} />
                        }
                    />
                    <Route
                        path="/education"
                        element={
                            <Education theme={propss.theme} setTheme={propss.setTheme} />
                        }
                    />
                    <Route
                        path="/experience"
                        element={
                            <Experience theme={propss.theme} setTheme={propss.setTheme} />
                        }
                    />
                    <Route
                        path="/projects"
                        element={
                            <Projects theme={propss.theme} setTheme={propss.setTheme} />
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <Contact theme={propss.theme} setTheme={propss.setTheme} />
                        }
                    />
                </Routes>
            </HashRouter>
        </div>
    );
}
