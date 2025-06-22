import { Route, Routes, HashRouter, Navigate } from "react-router-dom";
import Splash from "../pages/splash/Splash";
import Contact from "../pages/contact/Contact";
import Experience from "../pages/experience/Experience";
import Projects from "../pages/projects/Projects";
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
                        path="/contact"
                        element={
                            <Contact theme={propss.theme} setTheme={propss.setTheme} />
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
                </Routes>
            </HashRouter>
        </div>
    );
}
