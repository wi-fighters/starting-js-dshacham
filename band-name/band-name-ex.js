// function generateBandName(clothingColor, lastFoodEaten) {
//     const colorCapital = clothingColor[0].toUpperCase();
//     const colorRest = clothingColor.slice(1).toLowerCase();
//     const color = colorCapital.concat(colorRest);

//     const lfeCapital = lastFoodEaten[0].toUpperCase();
//     const lfeRest = lastFoodEaten.slice(1).toLowerCase();
//     const food = lfeCapital.concat(lfeRest);

//     return `The ${color} ${food}`;
// }
// console.log(generateBandName('purple', 'pie'));

// function bandName(clothingColor, lastFoodEaten) {
//     return `The ${clothingColor[0].toUpperCase() + clothingColor.slice(1).toLowerCase()} ${lastFoodEaten[0].toUpperCase() + lastFoodEaten.slice(1).toLowerCase()}`
// }

// console.log(bandName('yeLLOW', 'BROKOLI'));

// function generateBandName(clothingColor, lastFoodEaten) {
//     const bandNames = [];
//     bandNames.push(`The ${clothingColor[0].toUpperCase() + clothingColor.slice(1).toLowerCase()} ${lastFoodEaten[0].toUpperCase() + lastFoodEaten.slice(1).toLowerCase()}`);
//     return bandNames;
// }

// console.log(generateBandName('greEn', 'CHOCOLATE'));
// console.log(generateBandName('BLACK', 'pasta'));

// function generateBandName(clothingColor, lastFoodEaten) {
//     bandNames.push(`The ${clothingColor[0].toUpperCase() + clothingColor.slice(1).toLowerCase()} ${lastFoodEaten[0].toUpperCase() + lastFoodEaten.slice(1).toLowerCase()}`);
//     return bandNames;
// }
// const bandNames = []

// generateBandName('greEn', 'CHOCOLATE');
// generateBandName('BLACK', 'pasta');
// console.log(bandNames);

// function generateBandName(clothingColor, lastFoodEaten) {
//     const bandName = '';
//     return `The ${clothingColor[0].toUpperCase() + clothingColor.slice(1).toLowerCase()} ${lastFoodEaten[0].toUpperCase() + lastFoodEaten.slice(1).toLowerCase()}`;
// }

// console.log(generateBandName('BLACK', 'pasta'));

// function generateBandName(clothingColor, lastFoodEaten) {
//     let bandName = '';

//     let color = capitalizeColor(clothingColor);
//     let food = capitalizeFood(lastFoodEaten);

//     bandName = `The ${color} ${food}!`;

//     return bandName;
// }

// function capitalizeColor(clothingColor) {
//     return clothingColor[0].toUpperCase() + clothingColor.substr(1).toLowerCase();
// }

// function capitalizeFood(lastFoodEaten) {
//     return lastFoodEaten[0].toUpperCase() + lastFoodEaten.substr(1).toLowerCase();
// }
// console.log(generateBandName("blACK", "saLad"));

function generateBandName(clothingColor, lastFoodEaten) {
    let bandName = '';

    let color = capitalizeInitial(clothingColor);
    let food = capitalizeInitial(lastFoodEaten);

    return `The ${color} ${food}`;
}

function capitalizeInitial(capitalize) {
    return capitalize[0].toUpperCase() + capitalize.slice(1).toLowerCase()
}

console.log(generateBandName('bLuE', 'baGLE'));