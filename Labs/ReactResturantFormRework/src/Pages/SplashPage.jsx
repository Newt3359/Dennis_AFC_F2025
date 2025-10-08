import Logo from "../assets/Logo.png"


function SplashPage(){


    return(
        <>
            <h1 id="HomeTitle" className="d-flex justify-content-center align-items-center text-white mt-5">Welcome Partner</h1>
            <div id="ImageContainer" className="d-flex justify-content-center align-items-center">
                <img src={Logo} alt="Barn with farm animals around it"/>
            </div>
        </>

    )
}

export default SplashPage;