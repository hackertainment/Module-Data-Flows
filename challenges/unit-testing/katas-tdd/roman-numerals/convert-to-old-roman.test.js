let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  // Act
  // Assert
    expect(convertToOldRoman(1)).toEqual("I");
    expect(convertToOldRoman(2)).toEqual("II");
    expect(convertToOldRoman(3)).toEqual("III");
    expect(convertToOldRoman(4)).toEqual("IIII");
    expect(convertToOldRoman(5)).toEqual("V");
    expect(convertToOldRoman(6)).toEqual("VI");
    expect(convertToOldRoman(7)).toEqual("VII");
    expect(convertToOldRoman(8)).toEqual("VIII");
    expect(convertToOldRoman(9)).toEqual("VIIII");
    expect(convertToOldRoman(10)).toEqual("X");
    expect(convertToOldRoman(20)).toEqual("XX");
    expect(convertToOldRoman(30)).toEqual("XXX");
    expect(convertToOldRoman(40)).toEqual("XXXX");
    expect(convertToOldRoman(50)).toEqual("L");
    expect(convertToOldRoman(60)).toEqual("LX");
    expect(convertToOldRoman(70)).toEqual("LXX");
    expect(convertToOldRoman(80)).toEqual("LXXX");
    expect(convertToOldRoman(90)).toEqual("LXXXX");
    expect(convertToOldRoman(100)).toEqual("C");
    expect(convertToOldRoman(200)).toEqual("CC");
    expect(convertToOldRoman(300)).toEqual("CCC");
    expect(convertToOldRoman(400)).toEqual("CCCC");
    expect(convertToOldRoman(500)).toEqual("D");
    expect(convertToOldRoman(600)).toEqual("DC");
    expect(convertToOldRoman(700)).toEqual("DCC");
    expect(convertToOldRoman(800)).toEqual("DCCC");
    expect(convertToOldRoman(900)).toEqual("DCCCC");
    expect(convertToOldRoman(1000)).toEqual("M");
    expect(convertToOldRoman(2000)).toEqual("MM");
    expect(convertToOldRoman(3000)).toEqual("MMM");
    expect(convertToOldRoman(1234)).toEqual("MCCXXXIIII");
    expect(convertToOldRoman(2999)).toEqual("MMDCCCCLXXXXVIIII");
});
