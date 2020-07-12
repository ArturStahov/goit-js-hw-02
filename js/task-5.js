"use strict";
const checkForSpam = function(string) {
  const formatStr = string.toLowerCase();
  const arraySpamSword = ["spam", "sale"];
  let message = "нету спама!";
  for (const item of arraySpamSword) {
    if (formatStr.includes(item)) {
      message = "найден спам!";
      return message;
    }
  }
  return message;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
