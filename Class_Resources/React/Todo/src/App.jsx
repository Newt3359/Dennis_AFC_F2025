import {useState} from "react";


function App() {

    const [newToDo, setNewToDo] = useState('')

    const [todos, setTodos] = useState([])

    const handleChange = (event) =>{

        setNewToDo(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        setTodos(
            [...todos, newToDo]
        )
        setNewToDo('')
    }

  return (
    <>
        <h1>To Do App</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <input
                type={"text"}
                autoComplete="off"
                placeholder={"What are we doing today"}
                name={"new To Do"}
                value={newToDo}
                onChange={handleChange}
                />
            </label>
            <button type={"submit"}>Add New</button>
        </form>
        <p>To Do List</p>

        <ol>
            {todos.map((item, index) =>{

                return(
                    <li key={index}>{item}</li>
                )
            })}
        </ol>
    </>
  )
}

export default App
