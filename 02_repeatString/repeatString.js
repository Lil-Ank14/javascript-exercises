const repeatString = function (word, repeat) {
  let initialWord = word;
  if (repeat == 0) {
    return "";
  }
  if (repeat < 0) {
    return "ERROR";
  }
  for (let i = 0; i < repeat - 1; i++) {
    word = word + initialWord;
  }
  return word;
};
// Do not edit below this line
module.exports = repeatString;
