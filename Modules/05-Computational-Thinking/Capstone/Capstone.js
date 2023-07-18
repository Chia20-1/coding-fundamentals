// Create a function that takes two dates and returns the number of days between the first and second date.
// There's calculating difference between year, month and day
// What if second date is earlier than first date, change negative to positive
// .getTime() get the numerical value that can do maths operation
// Second date - first date
// .getTime() outputs milliseconds, convert it to day as the question stipulated.

function getDays(a, b) {
    const firstDate = a.getTime();
    const secondDate = b.getTime();

    const timeDifference = secondDate - firstDate;

    // console.log(timeDifference)

    const dayDifference = timeDifference / (1000 * 60 * 60 * 24)

    const result = Math.abs(dayDifference)

    return result;
}

console.log(getDays(
    new Date("January 1, 2019"),
    new Date("January 1, 2019")
))
