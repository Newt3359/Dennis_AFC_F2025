import {useState} from "react";

const App =() => {

    //     difficult to manage with large input fields
    // const [firstName, setFirstName] = useState('')
    // const [age, setAge] = useState(18)

    const initialState={
        firstName: "",
        age: 21,
        email: ""
    }


    const [formData, setFormData] = useState(initialState)
    const {firstName, age,email} = formData

    function handleSubmit(event) {
        event.preventDefault()
        const payload = {
            firstName: firstName,
            age: age,
            email: email
        }
        console.log(payload)
        setFormData(initialState)
    }

    const handleChange =  (event) => {
        setFormData (
            {...formData,
            [event.target.name] :event.target.value}
            )

    }


    // function handleFirstNameChange(e) {
    //     setFirstName(e.target.value)
    // }
    //
    // function handleAgeChange(e) {
    //     setAge(e.target.value)
    // }

    return (
    <>
      <h1>Form</h1>

        <form onSubmit={handleSubmit} method={"get"}>
            <label style={{marginLeft: "3px"}}>First Name:
                <input
                type={"text"}
                name={"firstName"}
                value={firstName}
                // onChange={handleFirstNameChange}
                // onChange={(event) => setFirstName(event.target.value)}
                onChange={handleChange}
                />
            </label>
            <label style={{marginLeft: "3px"}}>Age:
                <input
                    type={"number"}
                    name={"age"}
                    value={age}
                    min={21}
                    max={100}
                    // onChange={handleAgeChange}
                    // onChange={(event) => setFirstName(event.target.value)}
                    onChange={handleChange}
                />
            </label>
            <label style={{marginLeft: "3px"}}>Email:
                <input
                    type={"text"}
                    name={"email"}
                    value={email}
                    min={21}
                    max={100}
                    // onChange={handleAgeChange}
                    // onChange={(event) => setFirstName(event.target.value)}
                    onChange={handleChange}
                />
            </label>
            <button type={"submit"} style={{marginLeft: "3px"}}>Submit</button>
        </form>
    </>
  )
}
export default App


