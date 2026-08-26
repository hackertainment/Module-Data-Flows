function convertToNewRoman(n) {
    let roman = "";

    roman += "M".repeat(Math.floor(n/1000));
    n = n%1000;
    if (n>=900) {
        roman += "CM";
        n = n-900;
    }
    roman += "D".repeat(Math.floor(n/500));
    n = n%500;
    if (n>=400) {
        roman += "CD";
        n = n-400;
    }
    roman += "C".repeat(Math.floor(n/100));
    n = n%100;
    if (n>=90) {
        roman += "XC";
        n = n-90;
    }
    roman += "L".repeat(Math.floor(n/50));
    n = n%50;
    if (n>=40) {
        roman += "XL";
        n = n-40;
    }
    roman += "X".repeat(Math.floor(n/10));
    n = n%10;
    if (n>=9) {
        roman += "IX";
        n = n-9;
    }
    roman += "V".repeat(Math.floor(n/5));
    n = n%5;
    if (n>=4) {
        roman += "IV";
        n = n-4;
    }
    roman += "I".repeat(Math.floor(n));

    return roman;
}

module.exports = convertToNewRoman;
