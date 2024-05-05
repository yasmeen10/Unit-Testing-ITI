import {
  sum,
  asyncSubtract,
  factorial,
  range,
  reverseString,
  calculateCircleArea,
  findLongestWord,
  shuffleArray,
  isNumberPrime,
  checkNumberSign,
} from "./functions";

//1//
test("sum adds two numbers", () => {
  const result = sum(2, 3);
  const expected = 5;
  expect(result).toBe(expected);
});

//2//
test("asyunSubtract subtract two numbers async", async () => {
  const result = await asyncSubtract(4, 2);
  const expected = 2;
  expect(result).toBe(expected);
});

//3//
test("factorial of number", () => {
  const result = factorial(5);
  const expected = 120;
  expect(result).toBe(expected);
});

//4//
test("Range of numbers", () => {
  const result = Array.from(range(0, 10, 1));
  const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expect(result).toEqual(expected);
});

//5//
test("ReverseString reverse string", () => {
  const result = reverseString("yasmeen");
  const expected = "neemsay";
  expect(result).toBe(expected);
});

//6//
test("calculateCircleArea calculate the area of circle", () => {
  const result = Math.round(calculateCircleArea(5));
  const expected = 79;
  expect(result).toBe(expected);
});

//7//
test("findLongestWord find the longest word from the sentece", () => {
  const result = findLongestWord("My name is yasmeen walid");
  const expected = "yasmeen";
  expect(result).toEqual(expected);
});

//8//
test("checkNumberSign check the sign of the number", () => {
  const result = checkNumberSign(9);
  const expected = "positive";
  expect(result.toLowerCase()).toBe(expected);
});

//9//
test("isNumberPrime check if the number is primary or not", () => {
  const result = isNumberPrime(2);
  const expected = true;
  expect(result).toBe(expected);
});

//10//
test("shuffles the array", () => {
  const spy = jest
    .spyOn(Math, "random")
    .mockReturnValueOnce(0.5)
    .mockReturnValueOnce(0.7)
    .mockReturnValueOnce(0.3);
  const arr = [1, 2, 3, 4, 5];
  const result = shuffleArray(arr);
  const expected = [4, 3, 5, 2, 1];
  expect(result).toEqual(expected);
  expect(spy).toHaveBeenCalledTimes(3);
  spy.mockRestore();
});
