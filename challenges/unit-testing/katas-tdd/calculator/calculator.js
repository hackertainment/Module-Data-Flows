function add(numbers) {
    let nums = numbers.split(",");
    let negs = [];
    let sum = 0;

    for (let i=0; i<nums.length; i++) {
        let num = Number(nums[i]);

        if (num<0) {
            negs.push(nums[i]);
        }
        else {
            sum = sum+(num>1000 ? 0 : num);
        }
    }
    
    if (negs.length>0) {
        throw new Error(`negatives not allowed: ${negs.join(",")}`);
    }

    return sum;
}

module.exports = add;