function generateBandName(clothingColor, lastFoodEaten) {
    const colorCapital = clothingColor[0].toUpperCase();
    const colorRest = clothingColor.slice(1).toLowerCase();
    const color = colorCapital.concat(colorRest);

    const lfeCapital = lastFoodEaten[0].toUpperCase();
    const lfeRest = lastFoodEaten.slice(1).toLowerCase();
    const food = lfeCapital.concat(lfeRest);

    return `The ${color} ${food}`;
}

console.log(generateBandName('purple', 'pie'));