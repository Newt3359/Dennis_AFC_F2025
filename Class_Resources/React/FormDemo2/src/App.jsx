import {useForm} from "react-hook-form";
import {object,string,number} from "yup";
import {yupResolver} from "@hookform/resolvers/yup"

function App() {

    const applicant = object({
        firstName: string()
            .max(20, "Cannot be more than 20 characters")
            .required("This field is required"),

        personAge: number()
            .min(21, "must be 21 to apply")
            .max(99, "too old")
            .required(),

        personEmail: string()
            .required()
            .email(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),

        state: string()
            .required("Required field")
            .oneOf(["TX", "NV", "HI"], "Must enter a valid option")
    })

    const {
        register,  //replaces name attribute
        handleSubmit, //How we handle data once submitted
        setValue, // replaces use state
        reset,
        watch,
        formState : {errors: errors}}
        = useForm(
            {
        resolver : yupResolver(applicant),
        mode: "onBlur"
        }
    );

    const onSubmit = (data) => {
        console.log(data)
        const firstNameValue = watch()
        console.log(firstNameValue)
        reset();
    };

    const handleChange = (event) => {
        console.log(`${event.target.name}: ${event.target.value}`)
        setValue(event.target.name, event.target.value);
    }

  return (
    <>
        <h1>React Hook form demo</h1>
     <form onSubmit={handleSubmit(onSubmit)}>
         <label>First Name:
             <input
             type="text"
             {...register("firstName")}
             onChange={handleChange}
             />
             {errors.firstName && <span>{errors.firstName.message}</span>}
         </label>
         <br/>

         <label>Age:
             <input
                type={"number"}
                {...register("personAge")}
                 onChange={handleChange}
             />
             {errors.personAge && <span>{errors.personAge.message}</span>}
         </label>

         <br/>

         <label>Email:
             <input
                 type={"email"}
                 {...register("personEmail")}
                 onChange={handleChange}
             />
             {errors.personEmail && <span>{errors.personEmail.message}</span>}
         </label>

            <br/>

         <label>Select your state:
             <select {...register("state")}>
                 <option value="">--Select State--</option>
                 <option value="TX">Texas</option>
                 <option value="NV">Nevada</option>
                 <option value="HI">Hawaii</option>
             </select>
         </label>
         {errors.state && <span>{errors.state.message}</span>}
         <button type={"submit"}>Submit</button>
     </form>
    </>
  )
}

export default App
