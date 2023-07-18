// Pseudocode
// + 1 tp + 6
// Possibility of reaching friend's tiles
// A is your position and B is friend's position
// Already same tile means can't (a === b)
// Can't move backward (a < b), so (a <= b)
// Tile difference can't exceed 6, so (b - a <= 6)

// function possibleBonus(a, b) {
//     if (a > 0 || b > 0) {
//         if (a !== b) {
//             if (b > a) {
//                 return (b - a <= 6);
//             } else {
//                 return false;
//             }
//         }
//     }
// }
// This function doesn't account a > 0 and b > 0 to return false

// Optimized code

function possibleBonus(a, b) {
    return a >= 0 && b >= 0 && b > a && b - a <= 6;
}


console.log(possibleBonus(3, 7))
console.log(possibleBonus(1, 9))
console.log(possibleBonus(5, 3))
console.log(possibleBonus(-1, 0))

