import axios from "axios";
import {useState, useEffect} from "react";

const RandomDogPage = () =>{
    const[imageSrc, setImageSrc] = useState("https://images.dog.ceo/breeds/pinscher-miniature/n02107312_6136.jpg")
    const baseURL = "https://dog.ceo/api"

    // // useEffect(cb(), dependencies)
    // useEffect(()=>{
    //     let route = "breeds/image/random"
    //     let endpoint = `${baseURL}/${route}`
    //     axios.get(endpoint)
    //         .then(response => {
    //             // updating state!!!
    //             setImageSrc(response.data.message)
    //             console.log(response.data.message)
    //             return response
    //         })
    //         .catch(error => console.log(error))
    // //     run how many times?
    // }, [])


    // this ONLY happens when user clicks the button
    const handleClick = (event)=>{
        event.preventDefault();
    //     making an HTTP request what verb?????  what is our endpoint?
        let route = "breeds/image/random"
        let endpoint = `${baseURL}/${route}`
        // if use
        axios.get(endpoint)
            .then(response => {
                // updating state!!!
                setImageSrc(response.data.message)
                console.log(response.data.message)
                return response
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <h1>Random Dog Image Generator</h1>
            {/*what event? Click?*/}
            <button onClick={handleClick}>Click me for Random Image</button>
            <br/>
            <img src={imageSrc} alt="random dog image"/>
        </>
    )
}

export default RandomDogPage;