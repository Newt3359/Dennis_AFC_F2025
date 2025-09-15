
// https://dog.ceo/api/breeds/image/random

let btn = document.getElementsByTagName("button")[0]
let image = document.getElementsByTagName("img")[0]


const Base_URL = "https://dog.ceo/api"
let route = "breeds/image/random"

btn.addEventListener("click", () =>{

    console.log("it works")
    let endpoint = `${Base_URL}/${route}`

    fetch(endpoint)

        .then((response) =>{
            if (response.ok) {
                console.log("Response", response)
                let result = response.json()
                return result;
            }
            else {
                throw new Error("Not OK")
            }
        })

        .then((parseData) =>{
        console.log("Parsed Data", parseData.message)
            image.setAttribute("src", parseData.message)

        })

        .catch((errors) =>{
            console.log("Errors",errors.message)
        })

})





