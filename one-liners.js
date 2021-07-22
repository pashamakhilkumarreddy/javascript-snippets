const randonBoolean = () => Math.random() > 0.5;

console.info(randonBoolean());

const isWeekDay = (date) => date.getDay() % 6 !== 0;

console.info(isWeekDay(new Date()));

const reverse = (str) => str.split("").reverse().join("");

console.info(reverse("Hola Mundo"));

const isBrowserTabInView = () => document.hidden;

console.info(isBrowserTabInView());

const isEven = (num) => num % 2 === 0;

console.info(isEven(12));

const timeFromDate = (date) => date.toTimeString().slice(0, 8);

console.info(timeFromDate(new Date()));

const toFixed = (num, fixed) =>
  ~~(Math.pow(10, fixed) * num) / Math.pow(10, fixed);

console.info(toFixed(25.81437927301, 3));

const elementIsInFocus = (el) => el === document.activeElement;

console.info(elementIsInFocus(document.querySelector("body")));

const isTouchSupported = () =>
  "ontouchstart" in window ||
  (window.DocumentTouch && document instanceof window.DocumentTouch);

console.info(isTouchSupported());

const isAppleDevice = () => /Mac|iPod|iPhone|iPad|/.test(navigator.platform);

console.info(isAppleDevice());

const goToTop = () => window.scrollTo(0, 0);

goToTop();

const avg = (...args) => args.reduce((acc, cur) => acc + cur) / args.length;

console.info(avg(1, 2, 3, 4, 5, 6));

const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * (5 / 9);

console.info(celsiusToFahrenheit(36.9));

console.info(fahrenheitToCelsius(98));
