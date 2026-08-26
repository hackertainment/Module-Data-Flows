let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  // Act
  // Assert
    expect(convertToNewRoman(1)).toEqual("I");
    expect(convertToNewRoman(2)).toEqual("II");
    expect(convertToNewRoman(3)).toEqual("III");
    expect(convertToNewRoman(4)).toEqual("IV");
    expect(convertToNewRoman(5)).toEqual("V");
    expect(convertToNewRoman(6)).toEqual("VI");
    expect(convertToNewRoman(7)).toEqual("VII");
    expect(convertToNewRoman(8)).toEqual("VIII");
    expect(convertToNewRoman(9)).toEqual("IX");
    expect(convertToNewRoman(10)).toEqual("X");
    expect(convertToNewRoman(20)).toEqual("XX");
    expect(convertToNewRoman(30)).toEqual("XXX");
    expect(convertToNewRoman(40)).toEqual("XL");
    expect(convertToNewRoman(50)).toEqual("L");
    expect(convertToNewRoman(60)).toEqual("LX");
    expect(convertToNewRoman(70)).toEqual("LXX");
    expect(convertToNewRoman(80)).toEqual("LXXX");
    expect(convertToNewRoman(90)).toEqual("XC");
    expect(convertToNewRoman(100)).toEqual("C");
    expect(convertToNewRoman(200)).toEqual("CC");
    expect(convertToNewRoman(300)).toEqual("CCC");
    expect(convertToNewRoman(400)).toEqual("CD");
    expect(convertToNewRoman(500)).toEqual("D");
    expect(convertToNewRoman(600)).toEqual("DC");
    expect(convertToNewRoman(700)).toEqual("DCC");
    expect(convertToNewRoman(800)).toEqual("DCCC");
    expect(convertToNewRoman(900)).toEqual("CM");
    expect(convertToNewRoman(1000)).toEqual("M");
    expect(convertToNewRoman(2000)).toEqual("MM");
    expect(convertToNewRoman(3000)).toEqual("MMM");
    expect(convertToNewRoman(1234)).toEqual("MCCXXXIV");
    expect(convertToNewRoman(2444)).toEqual("MMCDXLIV");
    expect(convertToNewRoman(2999)).toEqual("MMCMXCIX");
});
