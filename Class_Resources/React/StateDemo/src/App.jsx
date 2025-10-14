import {useState} from "react";

function App() {
    const [days, setDays] = useState(300)
    const [firstName, setFirstName] =useState("")
    const [dogs, setDogs]=useState(["Milly", "Lulu", "Chauncey"])



  return (
    <>
     <h1>App state demo</h1>
    </>
  )
}

export default App
