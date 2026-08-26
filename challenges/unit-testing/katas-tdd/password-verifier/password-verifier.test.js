let verify = require("./password-verifier");

test("If the password is null, the function should reject", function () {
    expect(verify(null)).toEqual("Password rejected");
});

test("If the password is less than 8 characters, the function should reject", function () {
    expect(verify("")).toEqual("Password rejected");
    expect(verify("ABCD567")).toEqual("Password rejected");
    expect(verify("ABCD5678")).toEqual("Password accepted");
    expect(verify("ABCD56789")).toEqual("Password accepted");
});

test("If the password does not have at least 1 uppercase letter, the function should reject", function () {
    expect(verify("abcd5678")).toEqual("Password rejected");
});

test("If the password does not have at least 1 number, the function should reject", function () {
    expect(verify("ABCDefgh")).toEqual("Password rejected");
});