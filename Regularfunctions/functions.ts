//1//
export const sum = (a: number, b: number) => a + b;

//2//
export const asyncSubtract = (a: number, b: number) =>
  new Promise((res) => {
    setTimeout(() => res(a - b), 200);
  });

//3//
export function factorial(n: number): number {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
  // return n / factorial(n - 1);
}

//4//
export const range = function* (start: number, end: number, step: number) {
  let current = start;
  while (current <= end) {
    yield current;
    current = current + step;
  }
};

//5//
export const reverseString = (str: string) => {
  const reversedString = str.split("").reverse().join("");
  //const reversedString = str.split("").reverse();
  return reversedString;
};

//6//
export const calculateCircleArea = (radius: number) => {
  const area = Math.PI * radius * radius;
  // const area = (Math.PI / radius) * radius;
  return area;
};

//7//
export const findLongestWord = (sentence: string) => {
  const words = sentence.split(" ");
  let longestWord = "";
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

//8//
export const checkNumberSign = (num: number) => {
  if (num > 0) return "Positive";
  else if (num < 0) return "Negative";
  else return "Zero";

  //testing//
  // if (num < 0) return "Positive";
  // else if (num > 0) return "Negative";
};

//9//
export const isNumberPrime = (num: number) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  // if (num <= 3) return false;

  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
};

//10//
export const shuffleArray = (arr: number[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};
