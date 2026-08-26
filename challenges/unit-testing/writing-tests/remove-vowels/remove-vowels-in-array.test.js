let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  // Act
  // Assert
    expect(removeVowelsFromWords([])).toEqual([]);
    expect(removeVowelsFromWords([""])).toEqual([""]);
    expect(removeVowelsFromWords(["ABCDEFGHIJKLMNOPQRSTUVWXYZ"])).toEqual(["BCDFGHJKLMNPQRSTVWXYZ"]);
    expect(removeVowelsFromWords(["abcdefghijklmnopqrstuvwxyz"])).toEqual(["bcdfghjklmnpqrstvwxyz"]);
    expect(removeVowelsFromWords(["AEIOU", "aeiou"])).toEqual(["", ""]);
    expect(removeVowelsFromWords(["BCDFGHJKLMNPQRSTVWXYZ", "bcdfghjklmnpqrstvwxyz"])).toEqual(["BCDFGHJKLMNPQRSTVWXYZ", "bcdfghjklmnpqrstvwxyz"]);
    expect(removeVowelsFromWords(["Irina", "Etza", "Daniel"])).toEqual(["rn", "tz", "Dnl"]);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
