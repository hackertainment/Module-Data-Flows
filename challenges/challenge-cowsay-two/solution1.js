// =================
// Stripped down cowsayer CLI, 
// no libraries
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
// =================

// 1. Accept arguments

// how will you accept arguments?
if (process.argv.length<3) {
    console.error(`Usage: ${process.argv[0].split("/").slice(-1)} ${process.argv[1].split("/").slice(-1)} STRING`);
    console.error(` e.g.: ${process.argv[0].split("/").slice(-1)} ${process.argv[1].split("/").slice(-1)} 'Mooooo'`);
    process.exit(1);
}

// 2. Make supplies for our speech bubble

let topLine = '_';
let bottomLine = '-';
let saying = '';

// 3. Make a cow that takes a string

function cowsay(saying) {
// how will you make the speech bubble contain the text?
    saying = (saying=="" ? "Mooooo" : saying);
    console.log(` ${topLine.repeat(saying.length+2)} `);
    console.log(`< ${saying} >`);
    console.log(` ${bottomLine.repeat(saying.length+2)} `);

// where will the cow picture go?
    console.log("        \\   ^__^            ");
    console.log("         \\  (oo)\\_______    ");
    console.log("            (__)\\       )\\/\\");
    console.log("                ||----w |   ");
    console.log("                ||     ||   ");

// how will you account for the parameter being empty?
    console.log('');
}

//4. Pipe argument into cowsay function and return a cow

// how will you log this to the console?
cowsay(process.argv.slice(2).join(" "));