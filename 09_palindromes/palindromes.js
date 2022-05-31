const palindromes = function (string) {
    let nopunctuation = string.replace(/\W/g,"");
    let nospaces = nopunctuation.replace(/\s/g,"");
    string = nospaces;

    for (let i = 0; i < string.length / 2; i++) {

        if (string[i].toLowerCase() !== string[string.length - i - 1].toLowerCase())
            return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
