function randomInteger(min, max) {

    let int = min + Math.random() * (max + 1 - min);
    return Math.floor(int)
}
alert(randomInteger(1, 4));

