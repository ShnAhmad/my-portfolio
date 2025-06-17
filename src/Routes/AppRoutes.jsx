import { Route, Routes, HashRouter, Navigate } from "react-router-dom";
import Splash from "../components/pages/splash/Splash";
import Contact from "../components/pages/contact/Contact";
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
                        path="/Contact"
                        element={
                            <Contact theme={propss.theme} setTheme={propss.setTheme} />
                        }
                    />
                </Routes>
            </HashRouter>
        </div>
    );
}
