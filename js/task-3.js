"use strict";
const findLongestWord = function(string) {
  const arrString = string.split(" ");
  let maxLenghtWord = arrString[0];
  for (const item of arrString) {
    if (item.length > maxLenghtWord.length) {
      maxLenghtWord = item;
    }
  }
  return maxLenghtWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
