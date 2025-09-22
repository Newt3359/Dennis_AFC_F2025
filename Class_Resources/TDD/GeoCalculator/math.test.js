const {add, squaredNum} = require("./math")

describe("If function exists with correct parameters", ()=>{

    test("Does add exist", () =>{
        // expect(add()).toExist;
        expect(typeof add).toBe("function")
    })

    test("add() only contains two parameters", () =>{
        expect(add.length).toBe(2)
    })
})

test("Does squared nums exist", () =>{
    expect(typeof squaredNum).toBe("function")
})

test("square only takes one argument", () =>{
    expect(squaredNum.length).toBe(1)
})