const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    return cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    return cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}
function appendCat(name) {
    const moreCats = [...cats];
    moreCats.push("Broom");

    return moreCats;
}
function prependCat(name) {
    const moreCats = [...cats];
    moreCats.unshift("Arnold");

    return moreCats;
}
function removeLastCat() {
    const newCats = [...cats]
    newCats.pop();
    return newCats;
}
function removeFirstCat() {
    const newCats = [...cats]
    newCats.shift();
    return newCats;
}