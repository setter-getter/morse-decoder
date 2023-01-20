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
    let arr = expr.split('');
    let srt_1 = '';
    let res = '';
    for (let i = 0; i < arr.length; i++) {
        for (let key in MORSE_TABLE) {
            if (arr[i] === MORSE_TABLE[key]) {
                for (let i in key) {
                    if (key[i] === '-') {
                        srt_1 += '11'
                    }
                    else {
                        srt_1 += '10'
                    }
                }
                let s1 = '';
                for (let i = srt_1.length; i < 10; i++) {
                    s1 += 0;
                }
                res += (s1 + srt_1);
                srt_1 = '';
                s1 = '';
            }
        }
    }
   return res  
}

module.exports = {
    decode
}






