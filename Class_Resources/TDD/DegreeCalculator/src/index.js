// (C × 9/5) + 32       c to f
// (F − 32) × 5/9       f to c

// make sure user inputs usable data
//does it exist
// correct parameters

function convertToCelsius(input){

    const cleanNum = parseFloat(input)

    if (typeof cleanNum !== "number")
        return NaN

    return (cleanNum - 32) * (5/9);
}

module.exports.convertToCelsius = convertToCelsius