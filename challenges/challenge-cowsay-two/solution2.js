// =================
// Stripped down cowsayer CLI, 
// no libraries or arguments
// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
// =================

// 1. Make  a command line interface.
import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 2. Make supplies for our speech bubble
let topLine = '_';
let bottomLine = '-';
let saying = '';

// 3. Make a cow that takes a string

const cow = (saying) => {
    // how did you make the cow before?
    saying = (saying=="" ? "Mooooo" : saying);
    console.log(` ${topLine.repeat(saying.length+2)} `);
    console.log(`< ${saying} >`);
    console.log(` ${bottomLine.repeat(saying.length+2)} `);
    console.log("        \\   ^__^            ");
    console.log("         \\  (oo)\\_______    ");
    console.log("            (__)\\       )\\/\\");
    console.log("                ||----w |   ");
    console.log("                ||     ||   ");
    console.log('');
}

// 4. Use readline to get a string from the terminal 
// (with a prompt so it's clearer what we want)
rl.question("What does the cow say? ", answer => {
    cow(answer);
    rl.close();
});