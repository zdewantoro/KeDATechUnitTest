// const assert = require("assert");
// const { sortArray } = require("./soalno1.js");

// // Test case 1
// const input1 = [1, 2, 4, 3, 5, 3, 2, 1];
// const expectedOutput1 = [5, 4, 3, 3, 2, 2, 1, 1];
// assert.deepStrictEqual(
//   sortArray(input1),
//   expectedOutput1,
//   "Test case 1 failed"
// );

// // Test case 2
// const input2 = [5, 4, 3, 2, 1];
// const expectedOutput2 = [5, 4, 3, 2, 1];
// assert.deepStrictEqual(
//   sortArray(input2),
//   expectedOutput2,
//   "Test case 2 failed"
// );

// // Test case 3
// const input3 = [1];
// const expectedOutput3 = [1];
// assert.deepStrictEqual(
//   sortArray(input3),
//   expectedOutput3,
//   "Test case 3 failed"
// );

// // Test case 4
// const input4 = [];
// const expectedOutput4 = [];
// assert.deepStrictEqual(
//   sortArray(input4),
//   expectedOutput4,
//   "Test case 4 failed"
// );

// console.log("All test cases in soal no 1 passed!");

const { sortArray } = require("./soalno1.js");

// Test case 1
test("Test case 1", () => {
  const input1 = [1, 2, 4, 3, 5, 3, 2, 1];
  const expectedOutput1 = [5, 4, 3, 3, 2, 2, 1, 1];
  expect(sortArray(input1)).toEqual(expectedOutput1);
});

// Test case 2
test("Test case 2", () => {
  const input2 = [5, 4, 3, 2, 1];
  const expectedOutput2 = [5, 4, 3, 2, 1];
  expect(sortArray(input2)).toEqual(expectedOutput2);
});

// Test case 3
test("Test case 3", () => {
  const input3 = [1];
  const expectedOutput3 = [1];
  expect(sortArray(input3)).toEqual(expectedOutput3);
});

// Test case 4
test("Test case 4", () => {
  const input4 = [];
  const expectedOutput4 = [];
  expect(sortArray(input4)).toEqual(expectedOutput4);
});
