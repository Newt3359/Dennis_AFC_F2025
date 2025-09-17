let yesArray = [];
let noArray = [];
import yesNoWords from "yes-no-words";

for (let i =0; i<5; i++){
    yesArray.push(yesNoWords.yesRandom());
}
for (let i =0; i<5; i++) {
    noArray.push(yesNoWords.noRandom());
}

const newArr = [...yesArray, ...noArray]

console.log(yesArray)
console.log(noArray)
console.log(newArr);