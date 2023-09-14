const { sumEvenNumbers } = require("./soalno3.js");

// Test case 1
test("Test case 1", () => {
  const input1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup",
      },
    },
  };
  const expectedOutput1 = 6;
  expect(sumEvenNumbers(input1)).toBe(expectedOutput1);
});

// Test case 2
test("Test case 2", () => {
  const input2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 4 }, ee: "car" },
  };

  const expectedOutput2 = 12;
  expect(sumEvenNumbers(input2)).toBe(expectedOutput2);
});
