// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let nums = numbers.filter(Number.isFinite);
    let total = 0;

    for (let i of nums) {
        total = total+i;
    }

    return total/nums.length;
}

module.exports = average;
