import {useState} from "react";


function App() {

    const [count, setCount] = useState(0)
    const [isSeven, setSeven] = useState(false)

    const handleClick = () => {
    let newCount = Math.floor(Math.random()*10+1)
        setCount(newCount)
        setSeven(newCount === 7)
    }

  return (
    <>
      <h1>Dice Roller</h1>


        <button
            onClick={handleClick}
            style={{
                visibility: isSeven ? "hidden" : "visible",
                fontSize: "24px"
            }}
        >Roll</button>
        <p>{count}</p>
        {isSeven && <h1>You win!!</h1>}
    </>
  )
}

export default App
