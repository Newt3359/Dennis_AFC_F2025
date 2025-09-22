const {add,sub} = require('./demo')


// describe("",cb())
describe("Addition Tests", () => {
    test('adds two plus two to equal four', () =>{
        expect(add(2,2)).toBe(4);
    })

    test('adding two plus five does not equal twelve', () =>{
        expect(add(2,5)).not.toBe(12);
    })
})

describe("Subtraction Tests", () =>{
    test('subtract two minus one equals one', ()=>{
        expect(sub(1,2)).toBe(1);
    })


})


