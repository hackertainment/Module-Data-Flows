let add = require("./calculator");

test("for an empty string it will return 0", function () {
    expect(add("")).toEqual(0);
});

test("for single number string it will return the number", function () {
    expect(add("5")).toEqual(5);
    expect(add("0")).toEqual(0);
});

test("for an unknown amount of numbers string it will return the sum of them", function () {
    expect(add("3,6")).toEqual(9);
    expect(add("3,5,0,6")).toEqual(14);
});

test("for numbers bigger than 1000 string it should be ignored", function () {
    expect(add("2,1001")).toEqual(2);
    expect(add("1001,1001")).toEqual(0);
});

test("with a negative number string it will throw an error", function () {
    expect(() => {add("1,4,-1");}).toThrow(new Error("negatives not allowed: -1"));
    expect(() => {add("1,-4,1");}).toThrow(new Error("negatives not allowed: -4"));
    expect(() => {add("-1,4,1");}).toThrow(new Error("negatives not allowed: -1"));
    expect(() => {add("1,-4,-1");}).toThrow(new Error("negatives not allowed: -4,-1"));
    expect(() => {add("-1,-4,1");}).toThrow(new Error("negatives not allowed: -1,-4"));
    expect(() => {add("-1,4,-1");}).toThrow(new Error("negatives not allowed: -1,-1"));
    expect(() => {add("-1,-4,-1");}).toThrow(new Error("negatives not allowed: -1,-4,-1"));
});