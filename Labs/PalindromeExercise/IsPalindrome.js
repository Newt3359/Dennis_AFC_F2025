
function isPalindrome(input){

    if (typeof input !== "string")
        return false;

    input = input.toLowerCase();
    let cleanedInput = input.replace(/[^\w]/g, '');
    let i = 0;
    let j = cleanedInput.length -1;
    const charArray = [...cleanedInput]

    while (i <= j){
        if (charArray[i] === charArray[j]){
            i++;
            j--;
        }
        else {
            return false;
        }
    }
    return true;

}

module.exports.isPalindrome = isPalindrome;