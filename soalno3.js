/*
3. Buatlah fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek
Input :
{
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}
Output: 6
 
Input:
{
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 4}, ee: 'car'}
};
Output: 12
*/

function sumEvenNumbers(userInput) {
  let total = 0;

  for (const key in userInput) {
    if (typeof userInput[key] === "number" && userInput[key] % 2 === 0) {
      total += userInput[key];
    } else if (typeof userInput[key] === "object") {
      total += sumEvenNumbers(userInput[key]);
    }
  }

  return total;
}

// Export sumEvenNumbers function agar dapat di import di dalam file soalno3.test.js
module.exports = { sumEvenNumbers };

//Test:
// const input1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup",
//     },
//   },
// };

// const input2 = {
//   a: 2,
//   b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//   c: { c: { c: 2 }, cc: "ball", ccc: 5 },
//   d: 1,
//   e: { e: { e: 4 }, ee: "car" },
// };

// console.log(sumEvenNumbers(input1)); // Output: 6
// console.log(sumEvenNumbers(input2)); // Output: 12
