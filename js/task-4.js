"use strict";
const formatString = function(string) {
  const strLength = string.length;

  if (strLength <= 40) {
    return string;
  } else {
    const arrString = string.split("");
    arrString.slice(0, 41);
    arrString.push("...");
    const formatStr = arrString.join("");
    return formatStr;
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
