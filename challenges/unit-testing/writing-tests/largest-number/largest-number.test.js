let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  // Act
  // Assert
    expect(getLargestNumber([0])).toEqual(0);
    expect(getLargestNumber([5])).toEqual(5);
    expect(getLargestNumber([-5])).toEqual(-5);
    expect(getLargestNumber([3, 21, 88, 4, 36])).toEqual(88);
    expect(getLargestNumber([-3, -21, -88, -4, -36])).toEqual(-3);    
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
test("the original array hasn't changed", function () {
    nums = [3, 21, 88, 4, 36];
    getLargestNumber(nums);
    expect(nums).toEqual([3, 21, 88, 4, 36]);
});
