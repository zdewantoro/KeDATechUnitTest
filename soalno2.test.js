// const assert = require("assert");
// const { maxSubArray } = require("./soalno2.js");

// // Test case 1
// const input1_1 = [100, 200, 300, 400];
// const input1_2 = 2;
// const expectedOutput1 = 700;
// assert.strictEqual(maxSubArray(input1_1, input1_2), expectedOutput1);

// // Test case 2
// const input2_1 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
// const input2_2 = 4;
// const expectedOutput2 = 39;
// assert.strictEqual(maxSubArray(input2_1, input2_2), expectedOutput2);

// // Test case 3
// const input3_1 = [-3, 4, 0, -2, 6, -1];
// const input3_2 = 2;
// const expectedOutput3 = 5;
// assert.strictEqual(maxSubArray(input3_1, input3_2), expectedOutput3);

// console.log("All test cases in soal no 2 passed!");

const { maxSubArray } = require("./soalno2.js");

// Test case 1
test("Test case 1", () => {
  const input1_1 = [100, 200, 300, 400];
  const input1_2 = 2;
  const expectedOutput1 = 700;
  expect(maxSubArray(input1_1, input1_2)).toBe(expectedOutput1);
});

// Test case 2
test("Test case 2", () => {
  const input2_1 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
  const input2_2 = 4;
  const expectedOutput2 = 39;
  expect(maxSubArray(input2_1, input2_2)).toBe(expectedOutput2);
});

// Test case 3
test("Test case 3", () => {
  const input3_1 = [-3, 4, 0, -2, 6, -1];
  const input3_2 = 2;
  const expectedOutput3 = 5;
  expect(maxSubArray(input3_1, input3_2)).toBe(expectedOutput3);
});
