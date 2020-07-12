"use strict";
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  const loginLength = login.length;
  if (loginLength >= 4 && loginLength <= 16) {
    return true;
  }
  return false;
};

const isLoginUnique = function(allLogins, login) {
  for (const item of allLogins) {
    if (login.includes(item)) {
      return false;
    }
  }
  return true;
};

const addLogin = function(allLogins, login) {
  let message = "Логин успешно добавлен!";
  if (!isLoginValid(login)) {
    message = "Ошибка! Логин должен быть от 4 до 16 символов";
    return message;
  }
  if (!isLoginUnique(allLogins, login)) {
    message = "Такой логин уже используется!";
    return message;
  }

  return message;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
