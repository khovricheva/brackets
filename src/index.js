module.exports = function check(str, bracketsConfig) {
    if (str.length === 0 || undefined) return true;
    if (str.length % 2 !== 0) return false;

    let openBrackets = "";
    let closeBrackets = "";
    let sequence = [str[0]];

    for (let elem of bracketsConfig) {
        openBrackets += elem[0];
        closeBrackets += elem[1];
    }

    for (let i = 1; i < str.length; i++) {
        let currentBracket = str[i];
        let lastBracket = sequence[sequence.length - 1];
        if (
            closeBrackets.includes(currentBracket) &&
            closeBrackets.indexOf(currentBracket) ===
                openBrackets.indexOf(lastBracket)
        ) {
            sequence.pop();
        } else {
            sequence.push(currentBracket);
        }
    }
    return sequence.length === 0;
};
