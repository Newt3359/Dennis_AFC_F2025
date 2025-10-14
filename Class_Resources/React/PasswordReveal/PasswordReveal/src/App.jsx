import {useState} from "react";

function App() {


    const [showPassword, setShowPassword] = useState(true)
    function handleClick(){
        setShowPassword(!showPassword)
    }

  return (
    <>
      <h1>App Password Reveal</h1>
        <label>password:</label>
        <input
            type={showPassword ? "password" : "text"}
            required
            name={"passwd"}
            placeholder='password'
        />
        <button onClick={handleClick}>toggle view</button>
    </>
  )
}

export default App
