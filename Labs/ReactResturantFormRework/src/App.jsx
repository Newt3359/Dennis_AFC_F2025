import SplashPage from "./Pages/SplashPage.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavBar from "./Components/AppNavBar.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import MenuPage from "./Pages/MenuPage.jsx";
import HiringPage from "./Pages/HiringPage.jsx";



function App() {

  return (
    <>
    <Router>
        <AppNavBar/>
        <Routes>
            <Route path="/" element={<SplashPage />}/>
            <Route path="/menu" element={<MenuPage/>}/>
            <Route path="/hiring" element={<HiringPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App
