const reverseString = function (word) {
  wordArray = word.split("");
  let newWord = "";
  for (let i = 0; i < wordArray.length; i++) {
    newWord = wordArray[i] + newWord;
    console.log(newWord);
  }
  return newWord;
};

// Do not edit below this line
module.exports = reverseString;
