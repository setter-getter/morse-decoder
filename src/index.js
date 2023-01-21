const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    let res = '';
    while (expr.length > 0) {
        let el = expr.slice(0, 10);
        arr.push(el);
        expr = expr.slice(el.length);
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != '**********') {
            for (let el = 0; el < arr[i].length; el++) {
                if (arr[i][el] === '1') {
                    arr2.push(arr[i].slice(el));
                    break;
                }
            }
        }
        else {
            arr2.push(' ')
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        let symb_e = ''
        while (arr2[i].length > 0) {
            let el = arr2[i].slice(0, 2);
            if (el === '11') {
                symb_e += '-'
            }
            else if (el === '10') {
                symb_e += '.'
            }
            else {
                symb_e += ' ';
            }
            arr2[i] = arr2[i].slice(el.length);
        }
        arr3.push(symb_e);
    }

    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] === ' ') {
            res += ' ';
        }
        for (let key in MORSE_TABLE) {
            if (arr3[i] === key) {
                res += MORSE_TABLE[key];
            }
        }
    }

    return res
}

module.exports = {
    decode
}



