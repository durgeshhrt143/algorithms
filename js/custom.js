// Q1:wrtie a program to count each charecter frequency in string
// function countOccurence(str) {
//   const obj = {};
//   for (let char of str) {
//     if (char === " ") continue;
//     if (obj[char] > 0) {
//       obj[char]++;
//     } else {
//       obj[char] = 1;
//     }
//   }
//   return obj;
// }
// let result1 = countOccurence("durgesh singh");
// console.log(result1);

//Q2:call stack
// function takeShower() {
//   return "Showering!";
// }
// function eatBrackfast() {
//   let meal = cookFood();
//   return `Eating ${meal}`;
// }
// function cookFood() {
//   let items = ["Qatmeal", "Eggs", "Protein Shake"];
//   return items[Math.floor(Math.random() * items.length)];
// }
// function wakeUp() {
//   takeShower();
//   eatBrackfast();
//   console.log("Ok ready to go to work!");
// }
// wakeUp();

// Q3:printing number with the help of recursion

// function countDown(num) {
//   if (num >= 5) {
//     console.log("all done");
//     return;
//   }
//   console.log(num);
//   num++;
//   countDown(num);
// }
// countDown(0);

// Q4 sum of numbers with the help of recursion
// function sum(num) {
//   if (num === 1) {
//     return 1;
//   }
//   return num + sum(num - 1);
// }
// console.log(sum(4));

// Q5 write factorial problem with the help of recursion
// function factorial(num) {
//   if (num === 1) return 1;
//   return num * factorial(num - 1);
// }
// console.log(factorial(5));

//Q5 power function with the help of recursion

// function power(a, b) {
//   if (b === 0) return 1;

//   return a * power(a, b - 1);
// }
// console.log(power(2, 3));

//Q6 JavaScript recursion function: Get the first n Fibonacci numbers

// let fibonacciSeries = function(n) {
//   if (n === 1) {
//     return [0, 1];
//   } else {
//     let s = fibonacciSeries(n - 1);
//     s.push(s[s.length - 1] + s[s.length - 2]);
//     return s;
//   }
// };

// console.log(fibonacciSeries(4));

//Q7 write a recursive function called reverse
// which accepts a string and returns a new string in reverse.
// function reverseString(str) {
//   if (str.length === 0) return "";
//   return reverseString(str.slice(1)) + str.charAt(0);
// }
// console.log(reverseString("hello"));

//Q8 Write a recursive function called isPalindrome which
// returns true if the string passed to it is a palindrome
//  (reads the same forward and backward). Otherwise it returns false.
// function isPalindrome(str) {
//   let newString = str
//     .split("")
//     .reverse()
//     .join("");
//   return str === newString;
// }
// console.log(isPalindrome("isi"));

//Q9 capitalizeFirst
// function capitalizeFirst(arr) {
//   const result = [];
//   for (let s of arr) {
//     let newString = s.charAt(0).toUpperCase() + s.slice(1);
//     result.push(newString);
//   }
//   return result;
// }

// console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']

//searching algorithms
// const states = [
//   "Andhra Pradesh",
//   "Arunachal Pradesh",
//   "Assam",
//   "Bihar",
//   "Chhattisgarh",
//   "Goa",
//   "Gujarat",
//   "Haryana",
//   "Himachal Pradesh",
//   "Jammu and Kashmir",
//   "Jharkhand",
//   "Karnataka",
//   "Kerala",
//   "Madhya Pradesh",
//   "Maharashtra",
//   "Manipur",
//   "Meghalaya",
//   "Mizoram",
//   "Nagaland",
//   "Odisha",
//   "Punjab",
//   "Rajasthan",
//   "Sikkim",
//   "Tamil Nadu",
//   "Telangana",
//   "Tripura",
//   "Uttar Pradesh",
//   "Uttarakhand",
//   "West Bengal"
// ];

//linear Search

// function lineraSearch(arr, num) {
//   for (let i = 0; i <= arr.length; i++) if (arr[i] === num) return i;
//   return -1;
// }
// console.log(lineraSearch([1, 20, 2, 40, 50], 100));

//binary search
// function binarySearch(arr, ele) {
//   let start = 0;
//   let end = arr.length - 1;
//   let middle = Math.floor((start + end) / 2);
//   while (arr[middle] !== ele && start <= end) {
//     if (ele < arr[middle]) end = middle - 1;
//     else start = middle + 1;

//     middle = Math.floor((start + end) / 2);
//   }
//   return arr[middle] === ele ? middle : -1;
// }
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));

//naiveSearch

// function naiveSearch(long, sort) {
//   let count = 0;
//   for (let i = 0; i < long.length; i++) {
//     for (let j = 0; j < sort.length; j++) {
//       if (sort[j] !== long[i + j]) break;
//       if (j === sort.length - 1) {
//         count++;
//       }
//     }
//   }
//   return count;
// }
// console.log(naiveSearch("durgeshdu", "du"));
