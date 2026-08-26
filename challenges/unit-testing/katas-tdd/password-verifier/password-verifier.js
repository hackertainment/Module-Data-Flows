function verify(password) {
    const uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const numbers = "0123456789".split("");
    let hasUppercase = false;
    let hasNumber = false;

    if (password!=null && password.length>=8) {
        for (let i=0; i<password.length; i++) {
            hasUppercase = hasUppercase || uppercases.includes(password[i]);
            hasNumber = hasNumber || numbers.includes(password[i]);
        }
    }
    
    return `Password ${(hasUppercase && hasNumber ? "accepted" : "rejected")}`;
}

module.exports = verify;