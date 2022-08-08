const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let exprMorseCode = [];

    let morseDecode = ''

    for (let i = 0; i < expr.length; i += 10) {

        exprMorseCode.push(expr.slice(i, i+10));
    }

    for (let item of exprMorseCode) {

        let morseLetter = ''

        if (item[0] == '*') {

            morseDecode += " ";
            continue;

        } else {

            for (let j = item.indexOf(1); j < item.length; j += 2) {

                item[j+1] == 0 ? morseLetter += '.' : morseLetter += '-';
            }
        }

        morseDecode += MORSE_TABLE[morseLetter];
    }

    return (morseDecode);

    // write your solution here
}

module.exports = {
    decode
}

