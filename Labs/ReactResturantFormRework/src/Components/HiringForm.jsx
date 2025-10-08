import {Button, Form, Input, Label} from "reactstrap";
import {useForm} from "react-hook-form";
import {object, string, number} from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
import { MdError } from 'react-icons/md';

function HiringForm (){

    const phoneRegExp = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

    const applicant = object({
        firstName: string()
            .min(1, "Must be at least one character")
            .max(20, "Cannot be more than 20 characters")
            .required("This field is required"),

        lastName: string()
            .min(1, " must be at least 1 in length")
            .max(20, "max length 20")
            .required("Required field"),

        address1: string()
            .required("Required field")
            .max(50, "address1 cannot exceed 50 characters"),

        city: string()
            .required("Please enter city")
            .max(29, "city can not exceed 29 characters"),

        state: string()
            .required("Required field")
            .oneOf(["TX", "NV", "HI"], "Must enter a valid option"),

        age: number()
            .min(25, "must be 25 to apply")
            .max(89, "too old")
            .required(),

        phoneNumber: string()
            .required("Must enter a phone number")
            .matches(phoneRegExp, "Must be a valid phone number (i.e. 123-456-7890)"),

        personEmail: string()
            .required("Required field")
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Not a valid email"),

        password: string()
            .required()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters long')
            .max(12, 'Password must be less than 13 characters')
            .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
            .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .matches(/\d/, 'Password must contain at least one number')
            .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),

        married: string()
            .oneOf(["single", "married"])
            .default("single")

    })

    const {
        register,  //replaces name attribute
        handleSubmit, //How we handle data once submitted
        setValue, // replaces use state
        reset,
        formState : {errors: errors}}
        = useForm(
        {
            resolver : yupResolver(applicant),
            mode: "onBlur"
        }
    );

    const onSubmit = (data) => {
        console.log(JSON.stringify(data))
        reset();
    };

    const handleChange = (event) => {
        console.log(`${event.target.name}: ${event.target.value}`)
        setValue(event.target.name, event.target.value);
    }




    return(
        <>
            <h1 className="d-flex justify-content-center align-items-center" style={{color: "white"}}>Join our family</h1>
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>

                {/*FirstName*/}
                <div className={"mt-2"}>
                <Label>First Name:
                    <span className={"p-1"}/>
                    <Input
                    type={"text"}
                    {...register("firstName")}
                    onChange={handleChange}
                    />
                    {errors.firstName && <span>{errors.firstName.message}<MdError/></span>}
                </Label>
                </div>

                {/*Last Name*/}
                <div className={"mt-2 "}>
                    <Label>Last Name:
                        <span className={"p-1"}/>
                        <Input
                        type={"text"}
                        {...register("lastName")}
                        onChange={handleChange}
                        />
                        {errors.lastName && <span>{errors.lastName.message}<MdError/></span>}
                    </Label>
                </div>

                {/*Address1*/}
                <div className={"mt-2 "}>
                    <Label>Address1:
                        <span className={"p-1"}/>
                        <Input
                        type={"text"}
                        {...register("address1")}
                        onChange={handleChange}
                        />
                        {errors.address1 && <span>{errors.address1.message}<MdError/></span>}
                    </Label>
                </div>

                {/*//Address2*/}
                <div className={"mt-2 "}>
                    <Label>Address2:
                        <span className={"p-1"}/>
                        <Input
                            type="text"
                            {...register("address2")}
                            onChange={handleChange}
                        ></Input>
                    </Label>
                </div>

                {/*//City*/}
                <div className={"mt-2 "}>
                    <Label>City:
                        <span className={"p-1"}/>
                        <Input
                            type="text"
                            {...register("city")}
                            onChange={handleChange}
                        ></Input>
                        {errors.city && <span>{errors.city.message}<MdError/></span>}
                    </Label>
                </div>

                {/*//State*/}
                <div id={"StateGroup"}>
                    <Label>State:
                        <span className={"p-1"}/>
                        <select {...register("state")}>
                            <option value="">--Select State--</option>
                            <option value="TX">Texas</option>
                            <option value="NV">Nevada</option>
                            <option value="HI">Hawaii</option>
                        </select>
                    </Label>
                    {errors.state && <span>{errors.state.message}<MdError/></span>}
                </div>

                {/*//Age*/}
                <div className={"mt-2 "}>
                    <Label>Age:
                        <span className={"p-1"}/>
                        <Input
                            type={"number"}
                            {...register("age")}
                            onChange={handleChange}
                            defaultValue={25}
                        ></Input>
                        {errors.age && <span>{errors.age.message}<MdError/></span>}
                    </Label>
                </div>

                {/*//Phone*/}
                <div className={"mt-2 "}>
                    <Label>Phone:
                        <span className={"p-1"}/>
                        <Input
                            type={"text"}
                            {...register("phoneNumber")}
                            onChange={handleChange}
                        />
                        {errors.phoneNumber && <span>{errors.phoneNumber.message}<MdError/></span>}
                    </Label>
                </div>

                {/*//Email*/}
                <div className={"mt-2 "}>
                    <Label>Email:
                        <span className={"p-1"}/>
                        <Input
                            type={"email"}
                            {...register("personEmail")}
                            onChange={handleChange}
                        />
                        {errors.personEmail && <span>{errors.personEmail.message}<MdError/></span>}
                    </Label>
                </div>

                {/*//Password*/}
                <div className={"mt-2 "}>
                    <Label>Password:
                        <span className={"p-1"}/>
                        <Input
                            type={"password"}
                            {...register("password")}
                            onChange={handleChange}
                        />
                        {errors.password && <span>{errors.password.message}<MdError/></span>}
                    </Label>
                </div>

                {/*//Marital Status*/}
                <div className={"mt-2 "}>
                    <Label>Marital Status:
                        <span className={"p-1"}/>
                        <Label>Married:
                            <Input
                                type="radio"
                                value={"married"}
                                {...register("married")}
                                onChange={handleChange}
                            ></Input>
                        </Label>

                        <span className={"p-1"}/>
                        <Label >Single:
                            <Input
                                type="radio"
                                value={"single"}
                                defaultChecked={true}
                                {...register("married")}
                                onChange={handleChange}
                            ></Input>
                        </Label>
                        {errors.married && <span>{errors.married.message}<MdError/></span>}
                    </Label>
                </div>

                {/*//Favorite Color*/}
                <div className={"mt-2 "}>
                    <Label>Select Your Favorite Colors:
                        <Label className="p-2">Blue<input type="checkbox" name="Favorite Colors" value="Blue"/></Label>
                        <Label className="p-2">Red<input type="checkbox" name="Favorite Colors" value="Red"/></Label>
                        <Label className="p-2">Yellow<input type="checkbox" name="Favorite Colors" value="Yellow"/></Label>
                        <Label className="p-2">Green<input type="checkbox" name="Favorite Colors" value="Green"/></Label>
                        <Label className="p-2">Purple<input type="checkbox" name="Favorite Colors" value="Purple"/></Label>
                    </Label>
                </div>

                {/*//Text Area*/}
                <div className={"mt-2 "}>
                    <Label className="mt-2">More Info:
                        <Input
                            type="textarea"
                            maxLength="30"
                        ></Input>
                    </Label>
                </div>

                {/*//Buttons*/}
                <div className={"mt-2 "}>
                    <Button type={"submit"}>submit</Button>
                    <Button type={"reset"}>Reset</Button>
                </div>

            </Form>
        </div>
        </>
    )
}
export default HiringForm;