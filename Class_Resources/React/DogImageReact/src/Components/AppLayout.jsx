import {Outlet} from "react-router-dom"
import NavBar from "./NavBar.jsx";

const AppLayout = () => {
    return (
        <>
            {/* Navigation bar appears at the top on every page */}
            <NavBar />

            {/* Main content area for each page */}
            <div>
                {/* The child route (SplashPage, ResultsPage, or FormPage) will be displayed here */}
                <Outlet />
            </div>
        </>
    )
}

export default AppLayout;