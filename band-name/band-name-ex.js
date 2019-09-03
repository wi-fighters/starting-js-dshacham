// 1
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

// 1.0
// function bandName(clothingColor, lastFoodEaten) {
//     return `The ${clothingColor[0].toUpperCase() + clothingColor.slice(1).toLowerCase()} ${lastFoodEaten[0].toUpperCase() + lastFoodEaten.slice(1).toLowerCase()}`
// }

// console.log(bandName('yeLLOW', 'BROKOLI'));

// 1.1
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

// 2
// function generateBandName(clothingColor, lastFoodEaten) {
//     let bandName = '';

//     const color = function () {
//         return clothingColor[0].toUpperCase() + clothingColor.slice(1).toLowerCase();
//     };
//     const food = function () {
//         return lastFoodEaten[0].toUpperCase() + lastFoodEaten.slice(1).toLowerCase();
//     };

//     bandName = `The ${color()} ${food()}!`;

//     return bandName;
// }
// console.log(generateBandName('gRay', 'APRICOT'));
// +
// function generateBandName(clothingColor, lastFoodEaten) {
//     let bandName = '';

//     const color = capitalizeColor(clothingColor);
//     const food = capitalizeFood(lastFoodEaten);

//     bandName = `The ${color()} ${food()}!`;

//     return bandName;
// }

// function capitalizeColor(clothingColor) {
//     return clothingColor[0].toUpperCase() + clothingColor.slice(1).toLowerCase()
// }

// function capitalizeFood(clothingColor) {
//     return lastFoodEaten[0].toUpperCase() + lastFoodEaten.slice(1).toLowerCase()
// }

// console.log(generateBandName('piNK', 'PEACH'));

// 3
// function generateBandName(clothingColor, lastFoodEaten) {
//     let bandName = '';

//     const color = capitalizeInitial(clothingColor);
//     const food = capitalizeInitial(lastFoodEaten);

//     return `The ${color} ${food}`;
// }

// function capitalizeInitial(capitalize) {
//     return capitalize[0].toUpperCase() + capitalize.slice(1).toLowerCase()
// }

// console.log(generateBandName('bLuE', 'baGLE'));

// 4
console.log(makeTasty('red'));

function makeTasty(color) {
    let fruitColor = '';

    switch (color) {
        case 'red':
        case 'Red':
            return 'Chilli';
            break;
        case 'orange':
        case 'Orange':
            return 'Tangerine';
            break;
        case 'yellow':
        case 'Yellow':
            return 'Pineapple';
        case 'green':
        case 'Green':
            return 'Sage';
            break;
        case 'blue':
        case 'Blue':
            return 'Blueberry';
            break;
        case 'purple':
        case 'Purple':
            return 'Plum';
    }

    return fruitColor;
}

console.log(makeTasty('Purple'));
console.log(makeTasty('blue'));