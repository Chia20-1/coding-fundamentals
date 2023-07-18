//  Pseudocode
//  Number is negative - related ancestor
//  Number is positive - related descendant
//  I am 0. Returns me regardless of gender
//  Two perimeter (number and gender)

function generation(number, gender) {
    let gen = gender.toLowerCase()

    let outcome = ""

    if (number === 0) {
        return "me!"
    } else if (gen === "m") {
        switch (number) {
            case -3:
                outcome = "great grandfather";
                break;
            case -2:
                outcome = "grandfather";
                break;
            case -1:
                outcome = "father";
                break;
            case 1:
                outcome = "son";
                break;
            case 2:
                outcome = "grandson";
                break;
            case 3:
                outcome = "great grandson";
                break;
        }
    } else if (gen === "f") {
        switch (number) {
            case -3:
                outcome = "great grandmother";
                break;
            case -2:
                outcome = "grandmother";
                break;
            case -1:
                outcome = "mother";
                break;
            case 1:
                outcome = "daughter";
                break;
            case 2:
                outcome = "granddaughter";
                break;
            case 3:
                outcome = "great granddaughter";
                break;
        }
    }

    return outcome;
}


// Using ternary operator
// Use object to apply the ternary operator

function generation(number, gender) {

    let gen = gender.toLowerCase()

    const maleSide = {
        "-3": "great grandfather",
        "-2": "grandfather",
        "-1": "father",
        "1": "son",
        "2": "grandson",
        "3": "great grandson",
    }

    const femaleSide = {
        "-3": "great grandmother",
        "-2": "grandmother",
        "-1": "mother",
        "1": "daughter",
        "2": "granddaughter",
        "3": "great granddaughter",
    }

    return number === 0
        ? "me!"
        : gen === "m"
            ? maleSide[number] || "invalid number"
            : gen === "f"
                ? femaleSide[number] || "invalid number"
                : "invalid gender"

}

console.log(generation(2, "F"))

console.log(generation(-3, "m"))

console.log(generation(1, "f"))