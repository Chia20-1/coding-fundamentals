// Pseudocode
// Write a function that takes a number and returns perimeter 1 (s or c) and perimeter 2 (side of square or radiius of cricle)
// Perimeter of a square: 4 * side.
// Perimeter of a circle: 6.28 * radius.
// I can only imagine if...else but the requirement is  no if...else, no objects, no arrays, no formatting methods.

// function perimeter(a, number) {
//     if ( a === "s") {
//         return 4 * number;
//     } else if ( a === "c") {
//         return 6.28 * number;
//     }
// }

// Let's convert it to ternary operator

function perimeter(a, number) {
    return a === "s"
        ? 4 * number
        : a === "c"
            ? 6.28 * number
            : 0
}


console.log(perimeter("s", 7))

console.log(perimeter("c", 4))

console.log(perimeter("c", 9))