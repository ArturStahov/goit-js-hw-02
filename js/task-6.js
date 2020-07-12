"use strict";
let inputs;
let total = 0;
const numbers = [];
let message = "Веден неверный формат данных!";

do {
  inputs = prompt("Введите число");
  let convertsInput = Number(inputs);

  if (Number.isNaN(convertsInput)) {
    alert(message);
  } else {
    numbers.push(convertsInput);
  }
} while (inputs !== null);

const summInputs = function() {
  let results = 0;
  for (const item of arguments[0]) {
    results += item;
  }

  return results;
};

total = summInputs(numbers);
message = `Общая сумма чисел равна ${total}`;

alert(message);
