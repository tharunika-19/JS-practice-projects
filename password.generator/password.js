//Random password generator
function generatePassword(length,includeUppercase,includeLowercase,includeNumbers,includeSymbols) {
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var numberChars = "0123456789";
    var symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let allowedChars = "";
    let password = "";


        allowedChars += uppercaseChars ? uppercaseChars : "";
        allowedChars += lowercaseChars ? lowercaseChars : "";
        allowedChars += numberChars ? numberChars : "";
        allowedChars += symbolChars ? symbolChars : "";


    if(length<=0){
        return "Length must be greater than 0";
    }
    if(allowedChars.length===0){
        return "At least one character type must be selected";
    }
    for(let i=0;i<length;i++){
        password += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
    }
    return password;

}

function generateAndShow() {
    const password = generatePassword(12, true, true, true, true);

    document.getElementById("result").textContent = password;
}

