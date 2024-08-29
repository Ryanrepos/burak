//📌📌📌📌📌📌📌📌📌📌📌

/*
Project Standarts
    - Logging Standarts
    - Naming Standarts
        function, method, variable =>  CAMEL   goHome
        class =>                       PASCAL  MemberService
        folder, file =>                KEBAB   kebab-case
        css =>                         SNAKE   button_style
    - Error handling
*/

//📌📌📌📌📌📌📌📌📌📌📌

/*
Traditional Api
Rest Api
GraphQL Api
*/

//📌📌📌📌📌📌📌📌📌📌📌

// Frontend qurish usullari 2 xil:
// 1. Traditional FD   =>  SSR  =>  EJS
// 2. Modern FD        =>  SPA   =>  REACT

//📌📌📌📌📌📌📌📌📌📌📌

// Cookie husisyatlari:

// 1. request join
// 2. self destroy

//📌📌📌📌📌📌📌📌📌📌📌

// Validations:

// 1. Frontend validation
// 2. Backend validation
// 3. Database validation

//📌📌📌📌📌📌📌📌📌📌📌

// CSS Animation Sources:

// 1. AnimeJs.com
// 2. PixiJs.com
// 3. SpriteJs.com
// 4. ThreeJs.com

//📌📌📌📌📌📌📌📌📌📌📌

// function getPositiveNumbers(a: number[]): string {
//     const result: number[] = [];
//     for(const i of a) {
//         if(i > 0) {
//             result.push(i);
//         }
//     }
//     return result.join("")
// }

// console.log(getPositiveNumbers([1, 9, 5, -2, -8]));  // buyerda 195 raqamlarini qaytarib beryabdi.

// RUN: npm run train

// *** H2 - TASK *** 🌻

// function myDemo(str: string): string {
//     let strResult = "";
//     for(const i of str) {
//         if (i >= "0" && i <= "9") {
//             strResult += i
//         }
//     }
//     return strResult;
// }

// console.log(myDemo("48gh9k2"));
// console.log(myDemo("123MIT456"));

// RUN: npm run train

// I-TASK: 🌻

// function takrorElement(array: number[]): number | null {
//     const count = new Map<number, number>();

//     for (let i = 0; i < array.length; i++) {
//         const num = array[i];
//         count.set(num, (count.get(num) || 0) + 1);
//     }

//     let repeatedEl: number | null = null;
//     let maxCount = 0;

//     count.forEach((a, b) => {
//         if (a > maxCount) {
//             maxCount = a;
//             repeatedEl = b;
//         }
//     });

//     return repeatedEl;
// }

// console.log(takrorElement([1, 2, 3, 4, 3, 4, 3, 5, 5, 5, 5])); // buyerda 5 qaytaradi sababi, eng kopligi uchun
// console.log(takrorElement([100, 200, 300, 200]));    // bunda bosa 200 ni qaytaryabdi

// RUN: npm run train

// J - TASK 🌻

// function longestWord(word: string): string {
//     return word.split(' ').sort((a, b) => b.length - a.length)[0];
// }

// // Example usage:
// console.log(longestWord("Life is good with so much power"));

// K - TASK 🌻

// function unlilar(input: string): number {
//     const unliTovush = "aeiouAEIOU";

//     return input.split('').reduce((count, char) => {
//         if (unliTovush.includes(char)) {
//             count++;
//         }
//         return count;
//     }, 0);
// }

// // Test the function
// console.log(unlilar("booking")); // 3 ta unli
// console.log(unlilar("fullstackDeveloper")); // 6 ta unli

// L - TASK 🌻

// function reverseSentence(input: string): string {
//     return input
//         .split(' ')
//         .map(word => word.split('').reverse().join(''))
//         .join(' ');
// }

// console.log(reverseSentence("reverse train.js file"));

// M - TASK 🌻

// function kvadrat(numbers: number[]) {
//     return numbers.map(num => ({ number: num, square: num * num }));
// }

// // Example usage:
// const result = kvadrat([4, 5, 6]);
// console.log(result);     // 16, 25, 36 natijamiz

// N - TASK 🌻

// function change(string: string) {

//     const result = string.split("").reverse().join("")

//     const palindromeCheck = string == result;

//     return palindromeCheck;

// }

// console.log(change("book")); // false natija
// console.log(change("Ryan"));    // false buyam
// console.log(change("111"));  // true buyerda

// O - TASK

// function sum(arr: any[]): number {
//     let total = 0;
//     for (const i of arr) {
//         if (typeof i === 'number') {
//             total += i;
//         }
//     }
//     return total;
// }

// console.log(sum([5, "50", { son: 10 }, true, 22])); // buyerda 27 qaytyabdi..

// P - TASK

// function objArr(obj: { [key: string]: any }): [string, any][] {
//     const result: [string, any][] = [];
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             result.push([key, obj[key]]);
//         }
//     }
//     return result;
// }

// const result = objArr({ a: 10, b: 20 });
// console.log(result);

// Q - TASK

// function hasProperty(obj: object, prop: string): boolean {
//     return prop in obj;
// }

// console.log(hasProperty({ brand: "Sony", model: "Xperia" }, "brand")); // returns true
// console.log(hasProperty({ brand: "Sony", model: "Xperia" }, "price"));  // returns false

// R - TASK

// function calculate(exp: string): number {
//     const numbers = exp.match(/\d+/g);

//     if (!numbers) {
//         return NaN;
//     }

//     const numArray = numbers.map(Number);

//     const sum = numArray.reduce((acc, curr) => acc + curr, 0);

//     return sum;
// }

// console.log(calculate("1+3")); // 4
// console.log(calculate("5+15")); // 20
// console.log(calculate("invalid")); // NaN

// S - TASK

// function missingNumber(nums: number[]): number {
//     const n: number = nums.length;
//     const totalSum: number = (n * (n + 1)) / 2;
//     const arraySum: number = nums.reduce((acc, num) => acc + num, 0);

//     return totalSum - arraySum;
// }

// console.log(missingNumber([3, 0, 1])); // 2

// T - TASK

// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//     const mergedArray: number[] = [];
//     let a = 0;
//     let b = 0;

//     while (a < arr1.length && b < arr2.length) {
//       if (arr1[a] < arr2[b]) {
//         mergedArray.push(arr1[a]);
//         a++;
//       } else {
//         mergedArray.push(arr2[b]);
//         b++;
//       }
//     }

//     while (a < arr1.length) {
//       mergedArray.push(arr1[a]);
//       a++;
//     }

//     while (b < arr2.length) {
//       mergedArray.push(arr2[b]);
//       b++;
//     }

//     return mergedArray;
//   }

//   const array1 = [9, 0, 5];
//   const array2 = [1, 887, 901];

//   console.log(mergeSortedArrays(array1, array2)); // qaytaryabdi -> [ 1, 9, 0, 5, 887, 901 ]

// U -TASK

// function odds(num: number): number {
//   let count = 0;
//   for (let i = 0; i < num; i++) {
//       if (i % 2 !== 0) {
//           count++;
//       }
//   }
//   return count;
// }

// console.log(odds(5));  // 2
// console.log(odds(16)); // 8

// W - TASK

// function chunk<T>(array: T[], capacity: number): T[][] {
//     const result: T[][] = [];
//     let index = 0;

//     while (index < array.length) {
//       result.push(array.slice(index, index + capacity));
//       index += capacity;
//     }

//     return result;
//   }

//   // Example usage
//   const result = chunk([11, 22, 34, 58, 85, 81, 74, 90, 44, 92, 1000], 2);
//   console.log(result);
//   [
//     [ 11, 22 ],
//     [ 34, 58 ],
//     [ 85, 81 ],
//     [ 74, 90 ],
//     [ 44, 92 ],
//     [ 1000 ]
//   ]

// X - TASK

// function cases(obj: any, keyToFind: string): number {
//   if (typeof obj !== "object" || obj === null) return 0;

//   return Object.entries(obj).reduce((count, [key, value]) => {
//     const currentCount = key === keyToFind ? 1 : 0;
//     return (
//       count +
//       currentCount +
//       (typeof value === "object" ? cases(value, keyToFind) : 0)
//     );
//   }, 0);
// }

// // Example usage:
// const result = cases(
//   {
//     model: "Continental GT",
//     steer: { model: "HANKOOK", size: 30 },
//   },
//   "model"
// );
// console.log(result); // 2

// Y - TASK

// function unique(arr1: number[], arr2: number[]): number[] {
//   return arr1.filter((value) => arr2.includes(value));
// }

// // Example usage:
// const array1 = [8, 9, 0];
// const array2 = [9, 5, 7];
// const find = unique(array1, array2);
// console.log(find); // 9 ni qaytaradi

// Z - TASK

// function find(array: number[]): number {
//   return array.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
// }

// console.log(find([1, 2, 3, 4, 5, 6, 7, 8, 88])); // 108

// ZB-TASK

// function randomRaqam(min: number, max: number): number {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(randomRaqam(30, 50));  // orasidan ixtiyoriy sonni qaytaradi.

// ZC - TASK

// function convertCelToFah(celsius: number): number {
//   return (celsius * 9) / 5 + 32;
// }

// console.log(convertCelToFah(0)); // 32
// console.log(convertCelToFah(10)); // 50
// console.log(convertCelToFah(100)); // 212

// ZD - TASK

// function updateNum(target: number, arr: number[], newValue: number): number[] {
//   return arr.reduce((acc, num) => {
//     if (num === target && !acc.replaced) {
//       acc.result.push(newValue);
//       acc.replaced = true;
//     } else {
//       acc.result.push(num);
//     }
//     return acc;
//   }, { result: [], replaced: false } as { result: number[], replaced: boolean }).result;
// }

// console.log(updateNum(10, [45, 75, 33, 2], 99)); // 45, 75, 33, 2

// ZE - TASK

// function removingDup(input: string): string {
//   return input
//     .split('')
//     .filter((char, index, self) => self.indexOf(char) === index)
//     .join('');
// }

// console.log(removingDup('Ryaann'));
// console.log(removingDup('Engineerr'));

// ZF - TASK

// function boshHarflarBilan(str: string): string {

//     return str.split(' ').map(word => {

//         if (word.length > 2) {
//             return word.charAt(0).toUpperCase() + word.slice(1);
//         }

//         return word;
//     }).join(' ');
// }

// console.log(boshHarflarBilan("I want to be fullStack engineer!"));  // I Want to be FullStack Engineer!

// ZG - TASK

// function toSnakeCase(input: string): string {
//     return input
//       .toLowerCase()
//       .replace(/[^a-z0-9\s]/g, '')
//       .replace(/\s+/g, '_');
//   }

//   const result = toSnakeCase('Learning programming is not hard, just understand the logic');
//   console.log(result);
// learning_programming_is_not_hard_just_understand_the_logic

// ZH-TASK:

// function missedNums(list: number[]): number[] {
//     const maxNum = Math.max(...list);
//     const present = new Array(maxNum + 1).fill(false);
//     const result: number[] = [];

//     for (const num of list) {
//         present[num] = true;
//     }

//     for (let i = 1; i <= maxNum; i++) {
//         if (!present[i]) {
//             result.push(i);
//         }
//     }

//     return result;
// }

// const numbers = [1, 22, 33];
// console.log(missedNums(numbers));

/*

[
   2,  3,  4,  5,  6,  7,  8,  9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19,
  20, 21, 23, 24, 25, 26, 27, 28, 29,
  30, 31, 32
]

*/

// ZI - TASK

// Shunday function yozing, u function ishga tushgandan 3 soniyadan keyin "Hello World" ni qaytarsin.
// MASALAN: delayHelloWorld("Hello World") return "Hello World"

// function delayHelloWorld () {
//     console.log(" 3 second kechga qol")
// }
// setTimeout(delayHelloWorld, 3000);

// ZJ-TASK:

// Shunday function yozing, u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
// MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8

// @MITASK

// function calculate(arr: any[]): number[] {

//   const arr1 = arr.flat(Infinity);

//   const sum = arr1.reduce((acc, num) => acc + num, 0);

//   return [sum];
// }

// const nums = [1, 2, 3, 4, 0];
// const raqamlar = [2, [4, 4, [2, 4]]];

// console.log(calculate(nums));
// console.log(calculate(raqamlar));
// 10 va 16

// ZK-TASK:

// Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
// MASALAN: printNumbers()

// @MITASK

// function logs(count: number = 1) {
//   console.log(count);
//   if (count < 5) {
//     setTimeout(() => logs(count + 1), 1000);
//   }
// }

// logs();
/*
1
2
3
4
5
*/

// ZL-TASK:

// Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
// MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”

// function kebabCase(data: string): string {
//   return data.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');     
// }

// console.log(kebabCase("Life is Good, if you write the code and understand it fully, especially backend code"));

// life-is-good-if-you-write-the-code-and-understand-it-fully-especially-backend-code

/*
ZM-TASK:

Shunday function yozing, u function parametrga berilgan raqamlarni orqasiga ogirib qaytarsin.
MASALAN: reverseInteger(123456789) return 987654321

*/

// function reverse(nums: number): number {
//     const strng = nums.toString();

//     const resultStr = strng.split('').reverse().join('');

//     return parseInt(resultStr, 10);
// }

// console.log(reverse(2468)); // 8642
// console.log(reverse(2277)); // 7722

/*
ZN-TASK:

Shunday function yozing, uni array va number parametri bolsin. Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]
*/

function rotateArr<T>(array: T[], countingRotation: number): T[] {
    const length = array.length;
    countingRotation = countingRotation % length;
  
    if (countingRotation === 0) {
        return array;
    }
  
    return array.slice(countingRotation).concat(array.slice(0, countingRotation));
}

const numbers = [1, 2, 3, 4, 5, 6];
const rotatedNumbers = rotateArr(numbers, 2);
console.log(rotatedNumbers); 
//[3, 4, 5, 6, 1, 2]


