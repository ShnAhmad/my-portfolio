import { Route, Routes, HashRouter, Navigate } from "react-router-dom";
import Splash from "../components/pages/splash/Splash";
import Contact from "../components/pages/contact/Contact";
import Experience from "../components/pages/experience/Experience";
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
                </Routes>
            </HashRouter>
        </div>
    );
}
