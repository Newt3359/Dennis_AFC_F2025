const {isPalindrome} = require("./IsPalindrome")

const person = {
    fname : "john",
    lname : "wick",
    age : 40
};

let myVariable;

describe("Baseline test for if it exists and only validates strings", () => {

    test("Tests that function exists", ()=>{
        expect(typeof isPalindrome).toBe("function")
    })

    test("Is function taking correct amount of arguments", ()=>{
        expect(isPalindrome.length).toBe(1);
    })

    test("Only test strings", () =>{
        expect(isPalindrome(123)).toBe(false)
    })

    test("Only test strings", () =>{
        expect(isPalindrome([1,2,3])).toBe(false)
    })

    test("Does not accept Booleans", () =>{
        expect(isPalindrome(true)).toBe(false)
    })

    test("Does not accept Objects", () =>{
        expect(isPalindrome(person)).toBe(false)
    })

    test("Does not accept null", () =>{
        expect(isPalindrome(null)).toBe(false)
    })

    test("Does not accept undefined", () =>{
        expect(isPalindrome(myVariable)).toBe(false)
    })
})

describe("Basic test cases", () =>{

    test("Does a basic palindrome work", ()=>{
        expect(isPalindrome("racecar")).toBe(true);
    })

    test("Does a basic palindrome work part2", ()=>{
        expect(isPalindrome("kayak")).toBe(true);
    })

    test("Does a non palindrome fail", ()=>{
        expect(isPalindrome("apple")).toBe(false)
    })

    test("Does a non palindrome fail part2", ()=>{
        expect(isPalindrome("broad")).toBe(false)
    })
})

describe("Outlier handling", () =>{

    test("Shouldn't be case sensitive",()=>{
        expect(isPalindrome("Racecar")).toBe(true)
    })

    test("Handle phrases",() =>{
        expect(isPalindrome("Red rum, sir, is murder.")).toBe(true)
    })

    test("Handle phrases part 2",() =>{
        expect(isPalindrome("Warsaw was raw")).toBe(true)
    })

    test("Handle phrases part 3",() =>{
        expect(isPalindrome("T. Eliot, top bard, notes putrid tang emanating, is sad; I'd assign it a name: gnat dirt upset on drab pot toilet.")).toBe(true)
    })

})