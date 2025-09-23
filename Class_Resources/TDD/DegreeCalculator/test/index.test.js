const {convertToCelsius} = require("../src/index")

const person = {
    fname : "john",
    lname : "wick",
    age : 40
};

describe("Functionality = API Contracts", () =>{

    test("does function exist", () =>{
        expect(typeof convertToCelsius).toBe("function")
    })
    test("Is function taking correct amount of arguments", ()=>{
        expect(convertToCelsius.length).toBe(1);
    })
})

describe("Testing data types", () =>{

    test("if undefined return Nan", () =>{
        expect(convertToCelsius(undefined)).toBe(NaN)
    })

    test("if a non number string return Nan", () =>{
        expect(convertToCelsius("fifty five")).toBe(NaN)
    })

    test("Does not accept Booleans", () =>{
        expect(convertToCelsius(true)).toBe(NaN)
    })

    test("Does not accept Objects", () =>{
        expect(convertToCelsius(person)).toBe(NaN)
    })

    test("Does not accept null", () =>{
        expect(convertToCelsius(null)).toBe(NaN)
    })

    test("if string number return answer", () =>{
        expect(convertToCelsius("32")).toBe(0)
    })
})

describe("Base line tests",() =>{

    test("does it return celsius", () =>{
    expect(convertToCelsius(32)).toBe(0)
    })


})