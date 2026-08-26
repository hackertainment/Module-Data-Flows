function convertToOldRoman(n) {
    let roman = "";

    roman += "M".repeat(Math.floor(n/1000));
    n = n%1000;
    roman += "D".repeat(Math.floor(n/500));
    n = n%500;
    roman += "C".repeat(Math.floor(n/100));
    n = n%100;
    roman += "L".repeat(Math.floor(n/50));
    n = n%50;
    roman += "X".repeat(Math.floor(n/10));
    n = n%10;
    roman += "V".repeat(Math.floor(n/5));
    n = n%5;
    roman += "I".repeat(Math.floor(n));

    return roman;
}

module.exports = convertToOldRoman;
