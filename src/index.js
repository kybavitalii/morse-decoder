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
  let arrin = [];
  let prew = 0;
  for (let s = 10; s <= expr.length; s += 10) {
    arrin.push(expr.slice(prew, s));
    prew = s;
  }
  const map1 = arrin.map((el) => {
    return el
      .replace(/\b0+/g, '')
      .replace(/(11)/gm, '-')
      .replace(/(10)/gm, '.')
      .replace(/(\*)+/gm, 'z');
  });
  let res = [];
  for (let i = 0; i < map1.length; i++) {
    let key;
    for (key in MORSE_TABLE) {
      if (map1[i] === key) {
        res.push(MORSE_TABLE[key]);
      } else if (map1[i] === 'z') {
        res.push(' ');
      }
    }
  }
  let str = res.join('').replace(/\b\s+/g, ' ');
  return str;
}

module.exports = {
  decode,
};
