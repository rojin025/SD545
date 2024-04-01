// console.log("Hello World.");

/**
 * 1
 * Create a function using 
 * function declaration named 
 * sum 
        with one parameter of Array type, 
        the returned result is the sum of all elements 
        which are greater than 20.
 */
function sum(numbers: number[]): number {
  let totalSum = numbers
    .filter((number) => number > 20)
    .reduce((total, curr) => total + curr, 0);
  return totalSum;
}

console.log(sum([10, 21, 30]));
console.log(sum([10, 20, 30]));
console.log(sum([]));

/**
 * 
2. 
Create a function using function expression named 
getNewArray with one parameter of String Array, 
return a new array which contains all string, 
length is greater than and equal to 5, 
and contains letter ‘a’.
 */
const getNewArray = function (words: string[]): string[] {
  let newWords = words.filter((word) => {
    if (word.length >= 5 && word.includes("a")) {
      return true;
    }
  });
  return newWords;
};

console.log(getNewArray(["array", "word", "java", "Anguler"]));

/**
 * 3. Implement an arrow function with feature below:
concat('hi', [1,2,3], ['Hello','world']) -> 
return result: ['h', 'i', 1,2,3, 'Hello','world']
 */

const str1 = "hi";
const arr = [1, 2, 3];
const str = ["Hello", "world"];
const foo = (str1: string, arr: number[], str: string[]) => {
  return [...str1, ...arr, ...str];
};

console.log(foo(str1, arr, str));
