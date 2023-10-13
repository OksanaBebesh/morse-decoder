const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

const replaceAllSymbols = (symbol, str) => {
  let result = "";
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] != symbol) {
      result += str[i];
    }
  }
  return result;
};
//`10` stands for dot(`.`), `11` stands for dash(`-`)
function decode(expr) {
  // write your solution here
  const items = { 10: ".", 11: "-" };
  let result = expr.match(/.{1,10}/g) || [];
  let translateToMorse = [];
  let resultFinal = [];

  result.forEach((letter) => {
    if (letter === "**********") {
      resultFinal.push(" ");
    } else {
      let pair = letter.match(/.{1,2}/g) || [];

      pair.forEach((symbol) => {
        for (const [key, value] of Object.entries(items)) {
          if (symbol == key) translateToMorse.push(symbol.replace(key, value));
        }
      });

      let a = replaceAllSymbols(",", translateToMorse.toString());

      for (const [keyFrom, valueTranslTo] of Object.entries(MORSE_TABLE)) {
        if (a == keyFrom) {
          resultFinal.push(valueTranslTo);
        }
      }
      translateToMorse = [];
    }
  });
  return replaceAllSymbols(",", resultFinal.toString());
}

module.exports = {
  decode,
};
