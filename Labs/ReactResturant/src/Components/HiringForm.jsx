import {Button, Form, Input, Label} from "reactstrap";
import {useState} from "react";

function HiringForm (){

    const [Married, setMarried] = useState(false)

    return(
        <>
        <div style={{ margin: "60px"}}>
            <h1 className="d-flex justify-content-center align-items-center" style={{color: "white"}}>Join our family</h1>
        <Form>
            <div>

                <div className="d-flex justify-content-center align-items-center">
                <Label className="g-2 me-2 p-2">First Name:
                <Input
                type="text"
                required
                name="FirstName"
                minLength="1"
                maxLength="20"
                ></Input>
                </Label>

                <Label className="g-2 me-2 p-2">Last Name:
                    <Input
                        type="text"
                        name="LastName"
                        minLength="1"
                        maxLength="20"
                    ></Input>
                </Label>

                <Label className="g-2 me-2 p-2">Age:
                    <Input
                        type="number"
                        required
                        name="Age"
                        min="21"
                        max="99"
                        defaultValue="21"
                    ></Input>
                </Label>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                <Label className="g-2 me-2 p-2">Address 1:
                    <Input
                        type="text"
                        required
                        name="Address1"
                        maxLength="30"
                    ></Input>
                </Label>

                <Label className="g-2 me-2 p-2">Address 2:
                    <Input
                        type="text"
                        name="Address2"
                        maxLength="10"
                    ></Input>
                </Label>

                <Label className="g-2 me-2 p-2">City:
                    <Input
                        type="text"
                        required
                        name="City"
                        maxLength="29"
                    ></Input>
                </Label>

                <Label className="g-2 me-2 p-2">State:
                    <Input
                        type="select"
                        required
                        name="State"
                    >
                    <option value="">Select State</option>
                    <option value="TX">Texas</option>
                    <option value="HI">Hawaii</option>
                    <option value="NV">Nevada</option>
                    </Input>
                </Label>

                </div>

                <div className="d-flex justify-content-center align-items-center">
                    <Label className="g-2 me-2 p-2">Phone:
                        <Input
                        type="tel"
                        required
                        >
                        </Input>
                    </Label>

                    <Label className="g-2 me-2 p-2">Email:
                        <Input
                        type="email"
                        required
                        ></Input>
                    </Label>

                    <Label className="g-2 me-2 p-2">Password
                        <Input
                        type="password"
                        required
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}"
                        ></Input>
                    </Label>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                    <Label className="g-2 me-2 p-2">Marital Status:
                        <Label className="g-2 me-2 p-2">Married:
                    <Input
                        type="radio"
                        name="Married"
                        value="true"
                        checked={Married === true}
                        onChange={() => setMarried(true)}
                    ></Input>
                        </Label>
                        <Label >Single:
                            <Input
                            type="radio"
                            name="Married"
                            value="false"
                            checked={Married === false}
                            onChange={() => setMarried(false)}
                            ></Input>
                        </Label>
                    </Label>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                    <Label className="g-2 me-2 p-2">Select Your Favorite Colors:
                        <Label className="p-2">Blue<input type="checkbox" name="Favorite Colors" value="Blue"/></Label>
                        <Label className="p-2">Red<input type="checkbox" name="Favorite Colors" value="Red"/></Label>
                        <Label className="p-2">Yellow<input type="checkbox" name="Favorite Colors" value="Yellow"/></Label>
                        <Label className="p-2">Green<input type="checkbox" name="Favorite Colors" value="Green"/></Label>
                        <Label className="p-2">Purple<input type="checkbox" name="Favorite Colors" value="Purple"/></Label>
                    </Label>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                    <Label className="g-2 me-2 p-2">More Info
                        <Input
                            type="textarea"
                            maxLength="30"
                        ></Input>
                    </Label>
                </div>

                <div className="d-flex justify-content-center align-items-center g-2 me-2 p-2">
                  <Button color="light" type="submit" className="me-2 ">Submit</Button>
                  <Button color="light" type="reset" className="me-2">Reset</Button>
                </div>

            </div>
        </Form>
        </div>
        </>
    )
}
export default HiringForm;